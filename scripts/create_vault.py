import pandas as pd
import os

def create_vault_parquet():
    raw_dir = 'data/raw'
    out_dir = 'public/data/vault'
    os.makedirs(out_dir, exist_ok=True)
    
    frames = []

    # Table 1: Lok Sabha
    if os.path.exists(f'{raw_dir}/table1_loksabha_results.csv'):
        df1 = pd.read_csv(f'{raw_dir}/table1_loksabha_results.csv')
        df1['Election_Type'] = 'Lok Sabha'
        df1['Constituency_or_Body'] = df1['Constituency Name']
        df1['Candidate'] = df1['BJP/NDA Candidate Name']
        df1['Party'] = df1['Party Label']
        df1['Votes'] = df1['Votes Received']
        df1['Vote_Share'] = df1['Vote Share %']
        # 'District' is present in df1
        frames.append(df1[['Year', 'Election_Type', 'District', 'Constituency_or_Body', 'Candidate', 'Party', 'Votes', 'Vote_Share', 'Position']])

    # Table 2: Assembly
    if os.path.exists(f'{raw_dir}/table2_assembly_results.csv'):
        df2 = pd.read_csv(f'{raw_dir}/table2_assembly_results.csv')
        df2['Election_Type'] = 'Assembly'
        df2['Constituency_or_Body'] = df2['Constituency Name']
        df2['Candidate'] = df2['BJP/NDA Candidate Name']
        df2['Party'] = df2['Party Label']
        df2['Votes'] = df2['Votes Received']
        df2['Vote_Share'] = df2['Vote Share %']
        frames.append(df2[['Year', 'Election_Type', 'District', 'Constituency_or_Body', 'Candidate', 'Party', 'Votes', 'Vote_Share', 'Position']])

    # Table 8: Gram Panchayat
    if os.path.exists(f'{raw_dir}/table8_gram_panchayat_results.csv'):
        df8 = pd.read_csv(f'{raw_dir}/table8_gram_panchayat_results.csv', dtype=str)
        df8['Election_Type'] = 'Gram Panchayat'
        df8['Constituency_or_Body'] = df8['Grama_Panchayat']
        df8['Votes'] = ''
        df8['Vote_Share'] = ''
        df8['Position'] = ''
        df8['Candidate'] = df8.get('Winning_Candidate', '')
        frames.append(df8[['Year', 'Election_Type', 'District', 'Constituency_or_Body', 'Candidate', 'Party', 'Votes', 'Vote_Share', 'Position']])

    if frames:
        combined = pd.concat(frames, ignore_index=True)
        # Ensure string types
        combined = combined.astype(str)
        parquet_path = f'{out_dir}/kerala_elections.parquet'
        combined.to_parquet(parquet_path, index=False)
        print(f"Created {parquet_path} with {len(combined)} rows.")
    else:
        print("No data found to create parquet.")

if __name__ == "__main__":
    create_vault_parquet()
