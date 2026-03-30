import os
import re

# Explicit mappings for colors
OPACITY_MAP = {
    '95': '950',
    '90': '900',
    '80': '800',
    '70': '700',
    '60': '600',
    '50': '500',
    '40': '400',
    '30': '300',
    '25': '200',
    '20': '200',
    '10': '100',
    '5': '50',
}

def refactor_content(content):
    # 1. Replace text-white/x with text-ink-x00
    # Use word boundary to avoid partial matches
    for op, val in OPACITY_MAP.items():
        content = re.sub(rf'\btext-white/{op}\b', f'text-ink-{val}', content)

    # 2. Replace text-white with text-ink-950 IF it's not on a dark background
    # This is tricky, but the user said "Replace text-white with text-ink-950 or remove it".
    # And "Keep text-pure-white or text-white ONLY on actual dark backgrounds like bg-bjp-saffron or bg-ink-950".
    
    # We'll first replace all text-white with text-ink-950
    content = re.sub(r'\btext-white\b', 'text-ink-950', content)
    
    # Then we'll fix the dark background cases where we WANT white text
    # Buttons often have text-white
    content = content.replace('bg-bjp-saffron text-ink-950', 'bg-bjp-saffron text-pure-white')
    content = content.replace('bg-ink-950 text-ink-950', 'bg-ink-950 text-pure-white')
    content = content.replace('bg-bjp-green text-ink-950', 'bg-bjp-green text-pure-white')
    
    # 3. Headings: font-heading font-black text-ink-950
    # Match h1-h6 tags
    def fix_heading(match):
        tag = match.group(1)
        attrs = match.group(2)
        # Ensure it has font-heading and font-black
        if 'font-heading' not in attrs:
            if 'className="' in attrs:
                attrs = attrs.replace('className="', 'className="font-heading ')
            else:
                attrs += ' className="font-heading"'
        if 'font-black' not in attrs:
            if 'className="' in attrs:
                attrs = attrs.replace('className="', 'className="font-black ')
        # Ensure text-ink-950 is there (it should be from step 2)
        if 'text-ink-950' not in attrs:
            if 'className="' in attrs:
                attrs = attrs.replace('className="', 'className="text-ink-950 ')
        return f'<{tag}{attrs}>'

    content = re.sub(r'<(h[1-6])(.*?)>', fix_heading, content)

    # 4. Replace bg-dark-xxx and bg-black/x
    content = re.sub(r'\bbg-dark-900\b', 'bg-white', content)
    content = re.sub(r'\bbg-dark-950\b', 'bg-dark-950', content) # Stay same (it's light)
    content = re.sub(r'\bbg-dark-800\b', 'glass-card', content)
    
    # bg-black/x to bg-ink-950/5 or glass-card
    content = re.sub(r'\bbg-black/40\b', 'bg-ink-950/5', content)
    content = re.sub(r'\bbg-black/20\b', 'bg-ink-950/5', content)
    content = re.sub(r'\bbg-black/60\b', 'bg-ink-950/10', content)
    content = re.sub(r'\bbg-white/5\b', 'bg-ink-950/5', content)
    content = re.sub(r'\bbg-white/10\b', 'bg-ink-950/10', content)
    
    # border-white/10 -> border-ink-950/10 or border-bjp-saffron/20
    content = re.sub(r'\bborder-white/10\b', 'border-bjp-saffron/20', content)

    return content

def process_files(file_list):
    root = "/Users/arunjithm/Desktop/VS-Projects/dawn_orange/kerala-orange-dawn/"
    for f in file_list:
        path = os.path.join(root, f)
        if not os.path.exists(path):
            print(f"Skipping {f} (not found)")
            continue
        
        with open(path, 'r') as file:
            content = file.read()
        
        new_content = refactor_content(content)
        
        with open(path, 'w') as file:
            file.write(new_content)
        print(f"Processed {f}")

files = [
    "components/acts/ActI_BeforeDawn.tsx",
    "components/acts/ActII_FirstSeeds.tsx",
    "components/acts/ActIII_GrowingRoots.tsx",
    "components/acts/ActIV_FirstLight.tsx",
    "components/acts/ActV_TheSurge.tsx",
    "components/acts/ActVI_RootsDeepen.tsx",
    "components/acts/ActVII_TheDip.tsx",
    "components/acts/ActVIII_DoubleBreakthrough.tsx",
    "components/acts/ActIX_DawnIsHere.tsx",
    "components/charts/GrowthCharts.tsx",
    "components/charts/ScoreboardCard.tsx",
    "components/shared/CredibilityBanner.tsx",
    "components/shared/DistrictStrength.tsx",
    "components/shared/ElectionSandbox.tsx",
    "components/shared/EventTimeline.tsx",
    "components/shared/FortyFourYearWall.tsx",
    "components/shared/GrassrootsGrowth.tsx",
    "components/shared/GrowthSection.tsx",
    "components/shared/Navbar.tsx",
    "components/shared/NearMissGallery.tsx",
    "components/shared/NumberCounter.tsx",
    "components/shared/OneVoteAtATime.tsx",
    "components/shared/OppositionClaims.tsx",
    "components/shared/ShareableMoments.tsx",
    "components/shared/SilentRevolution.tsx",
    "components/shared/ThrissurDeepDive.tsx",
    "components/shared/VoteShiftFlow.tsx"
]

process_files(files)
