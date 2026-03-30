import pandas as pd
import os
import numpy as np
import json

def clean_string(val):
    if pd.isna(val) or val is None:
        return ""
    val_str = str(val).strip()
    if val_str.lower() == "nan":
        return ""
    if val_str.endswith(".0"):
        try:
            return str(int(float(val_str)))
        except:
            pass
    return val_str

def format_votes(val):
    s = clean_string(val)
    if not s: return ""
    try:
        # Extract numbers only
        clean_v = "".join(c for c in s if c.isdigit() or c == '.')
        if not clean_v: return s
        num = int(float(clean_v))
        return f"{num:,}"
    except:
        return s

# Hardcoded 2024 Lok Sabha NDA Candidates
NDA_LS_2024 = {
    "Kasaragod": "M. L. Ashwini", "Kannur": "C. Raghunath", "Vatakara": "Prafulla Krishna",
    "Wayanad": "K. Surendran", "Kozhikode": "M. T. Ramesh", "Malappuram": "Dr. Abdul Salam",
    "Ponnani": "Niveditha Subramanian", "Palakkad": "C. Krishnakumar", "Alathur (SC)": "Dr. Sarasu",
    "Thrissur": "Suresh Gopi", "Chalakudy": "K.A. Unnikrishnan", "Ernakulam": "Dr. K.S. Radhakrishnan",
    "Idukki": "Sangeetha Viswanathan", "Kottayam": "Jitu Meher", "Alappuzha": "Sobha Surendran",
    "Mavelikkara (SC)": "Baiju Kalasala", "Pathanamthitta": "Anil K. Antony", "Kollam": "G. Krishna Kumar",
    "Attingal": "V. Muraleedharan", "Thiruvananthapuram": "Rajeev Chandrasekhar"
}

# Hardcoded 2021 Assembly NDA Candidates
NDA_AS_2021 = {
    "Manjeshwar": "K. Surendran", "Kasaragod": "K. Shreekanth", "Palakkad": "E. Sreedharan",
    "Thrissur": "Suresh Gopi", "Nemom": "Kummanam Rajasekharan", "Thiruvananthapuram": "G. Krishna Kumar",
    "Kazhakootam": "Sobha Surendran", "Vattiyoorkavu": "V. V. Rajesh", "Malampuzha": "C. Krishnakumar",
    "Chathannoor": "B. B. Gopakumar", "Kattakkada": "P. K. Krishnadas", "Attingal": "P. Sudheer",
    "Konni": "K. Surendran", "Chengannur": "M. V. Gopakumar", "Koyilandy": "N. P. Radhakrishnan",
    "Dharmadam": "C. K. Padmanabhan", "Kunnamangalam": "V. K. Sajeevan", "Tripunithura": "Dr. K. S. Radhakrishnan",
    "Irinjalakuda": "Jacob Thomas", "Koduvally": "T. Balasoman", "Ambalappuzha": "Anoop Antony",
    "Alappuzha": "Sandeep Vachaspati", "Changanassery": "G. Raman Nair", "Kanjirappally": "Alphons Kannanthanam",
    "Puthuppally": "N. Hari", "Pala": "Jitu Meher", "Mananthavady (ST)": "Palliyara Mukundan",
    "Sulthan Bathery (ST)": "C. K. Janu", "Idukki": "Sangeetha Viswanathan", "Adoor (SC)": "Pandalam Prathapan"
}

# Known 2021 Vote counts
NDA_AS_VOTES_2021 = {
    "Manjeshwar": "65013", "Kasaragod": "50395", "Palakkad": "50220", "Thrissur": "41233",
    "Nemom": "51888", "Thiruvananthapuram": "34996", "Kazhakootam": "40193", "Vattiyoorkavu": "39596",
    "Malampuzha": "50200", "Chathannoor": "42090", "Kattakkada": "37611", "Attingal": "38262",
    "Konni": "32811", "Tripunithura": "39872"
}

def create_vault_parquet():
    raw_dir = 'data/raw'
    out_dir = 'public/data/vault'
    processed_dir = 'public/data/processed'
    os.makedirs(out_dir, exist_ok=True)
    
    assembly_data = {}
    if os.path.exists(f'{processed_dir}/assembly.json'):
        with open(f'{processed_dir}/assembly.json', 'r') as f:
            try:
                raw_ajson = json.load(f)
                for item in raw_ajson:
                    key = f"{item['Year']}_{item['Constituency Name']}"
                    if item.get('Votes Received'):
                        assembly_data[key] = str(item['Votes Received'])
            except: pass

    frames = []

    def standardize(df, election_type, mapping, is_lsg=False):
        new_df = pd.DataFrame()
        for col, source in mapping.items():
            if source in df.columns:
                new_df[col] = df[source]
            else:
                new_df[col] = ""
        
        new_df['Election_Type'] = election_type
        for col in ['Year', 'District', 'Constituency_or_Body', 'Ward_Name', 'Candidate', 'Party', 'Votes', 'Vote_Share', 'Position']:
            if col not in new_df.columns: new_df[col] = ""

        # Force all columns to string to avoid dtype issues during at/loc
        for col in new_df.columns:
            new_df[col] = new_df[col].astype(str).replace('nan', '')

        # Fill Candidates & Votes
        for idx, row in new_df.iterrows():
            year = str(row['Year']).split('.')[0]
            const = str(row['Constituency_or_Body']).strip()
            
            if election_type == 'Lok Sabha' and year == '2024':
                if not clean_string(row['Candidate']):
                    new_df.at[idx, 'Candidate'] = NDA_LS_2024.get(const, "")
            
            if election_type == 'Assembly':
                if year == '2021':
                    if not clean_string(row['Candidate']):
                        new_df.at[idx, 'Candidate'] = NDA_AS_2021.get(const, "")
                    if not clean_string(row['Votes']):
                        new_df.at[idx, 'Votes'] = NDA_AS_VOTES_2021.get(const, "")
                
                akey = f"{year}_{const}"
                if not clean_string(new_df.at[idx, 'Votes']) and akey in assembly_data:
                    new_df.at[idx, 'Votes'] = assembly_data[akey]

        if is_lsg:
            new_df = new_df[new_df['Party'].str.contains('BJP|NDA|BDJS', case=False, na=False)]
        
        new_df['Votes'] = new_df['Votes'].apply(format_votes)
        new_df['Position'] = new_df['Position'].apply(clean_string)

        if election_type in ['Lok Sabha', 'Assembly', 'By-Election']:
            mask = (new_df['Votes'] != "") | (new_df['Position'] != "")
            new_df = new_df[mask]

        return new_df[['Year', 'Election_Type', 'District', 'Constituency_or_Body', 'Ward_Name', 'Candidate', 'Party', 'Votes', 'Vote_Share', 'Position']]

    major_mapping = {'Year':'Year','District':'District','Constituency_or_Body':'Constituency Name','Candidate':'BJP/NDA Candidate Name','Party':'Party Label','Votes':'Votes Received','Position':'Position'}
    
    tables = [
        ('table1_loksabha_results.csv', 'Lok Sabha', major_mapping, False),
        ('table2_assembly_results.csv', 'Assembly', major_mapping, False),
        ('table3_byelection_results.csv', 'By-Election', {'Year':'Year','District':'District','Constituency_or_Body':'Constituency Name','Candidate':'BJP/NDA Candidate','Party':'Party Label','Votes':'Votes Received','Position':'Position'}, False),
        ('table4_corporation_results.csv', 'Corporation', {'Year':'Year','District':'District','Constituency_or_Body':'Corporation','Ward_Name':'Ward_Name','Candidate':'Winning_Candidate','Party':'Party'}, True),
        ('table5_municipality_results.csv', 'Municipality', {'Year':'Year','District':'District','Constituency_or_Body':'Municipality','Ward_Name':'Ward_Name','Candidate':'Winning_Candidate','Party':'Party'}, True),
        ('table6_district_panchayat_results.csv', 'District Panchayat', {'Year':'Year','District':'District','Constituency_or_Body':'District_Panchayat','Ward_Name':'Ward_Name','Candidate':'Winning_Candidate','Party':'Party'}, True),
        ('table7_block_panchayat_results.csv', 'Block Panchayat', {'Year':'Year','District':'District','Constituency_or_Body':'Block_Panchayat','Ward_Name':'Ward_Name','Candidate':'Winning_Candidate','Party':'Party'}, True),
        ('table8_gram_panchayat_results.csv', 'Gram Panchayat', {'Year':'Year','District':'District','Constituency_or_Body':'Grama_Panchayat','Ward_Name':'Ward_Name','Candidate':'Winning_Candidate','Party':'Party'}, True),
    ]

    for filename, etype, mapping, is_lsg in tables:
        path = f'{raw_dir}/{filename}'
        if os.path.exists(path):
            df = pd.read_csv(path)
            frames.append(standardize(df, etype, mapping, is_lsg))

    if frames:
        combined = pd.concat(frames, ignore_index=True)
        combined = combined[combined['Constituency_or_Body'].notna() & (combined['Constituency_or_Body'].astype(str).str.strip() != "")]
        
        # Cleanup Year
        def clean_year(x):
            s = str(x).split('.')[0].strip()
            return s if s.isdigit() else clean_string(x)
        combined['Year'] = combined['Year'].apply(clean_year)

        for col in combined.columns:
            combined[col] = combined[col].apply(lambda x: clean_string(x) if clean_string(x) != "" else "—")
        
        mask_missing = (combined['Election_Type'].isin(['Lok Sabha', 'Assembly', 'By-Election'])) & (combined['Candidate'] == "—")
        combined.loc[mask_missing, 'Candidate'] = "NDA Candidate"
        
        combined = combined.sort_values(by=['Year', 'Election_Type'], ascending=[False, True])
        
        combined.to_parquet(f'{out_dir}/kerala_elections.parquet', index=False)
        combined.to_json(f'{out_dir}/kerala_elections.json', orient='records')
        print(f"Created vault with {len(combined)} rows.")

if __name__ == "__main__":
    create_vault_parquet()
