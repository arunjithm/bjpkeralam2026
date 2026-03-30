import os
import re

def refactor_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Define explicit mapping for opacity classes
    opacity_map = {
        '95': '950',
        '90': '900',
        '80': '800',
        '75': '700', # closest
        '70': '700',
        '60': '600',
        '50': '500',
        '40': '400',
        '30': '300',
        '25': '200', # closest
        '20': '200',
        '10': '100',
        '5': '50',   # we might not have 50, but let's see
    }

    for white_op, ink_val in opacity_map.items():
        content = content.replace(f'text-white/{white_op}', f'text-ink-{ink_val}')
        # Also fix the already broken ones from previous run
        content = content.replace(f'text-ink-{white_op}', f'text-ink-{ink_val}')

    # Rule 1: Replace 'text-white' with 'text-ink-950' or remove it IF it's on a light background.
    # In light theme, we want ink-950 for text.
    
    # Replace bg-dark-xxx with light variants or glass-card
    content = content.replace('bg-dark-900', 'bg-white')
    content = content.replace('bg-dark-800', 'glass-card')
    
    # Fix Data Vault specifically
    if "app/data-vault/page.tsx" in filepath:
        content = content.replace('className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-dark-900"', 'className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-white"')
        content = content.replace('text-white', 'text-ink-950')
        # Re-fix buttons
        content = content.replace('bg-bjp-saffron text-ink-950', 'bg-bjp-saffron text-pure-white')
        content = content.replace('bg-ink-950 text-ink-950', 'bg-ink-950 text-pure-white')
        content = content.replace('text-ink-40', 'text-ink-400')
        content = content.replace('text-ink-30', 'text-ink-300')
        content = content.replace('text-ink-70', 'text-ink-700')
        content = content.replace('text-ink-80', 'text-ink-800')
        content = content.replace('text-ink-50', 'text-ink-500')
        content = content.replace('text-ink-25', 'text-ink-200')

    # Fix headings globally
    content = re.sub(r'<(h[1-6])(.*?)text-white(.*?)>', r'<\1\2text-ink-950\3>', content)
    
    # Ensure headings have font-black and font-heading
    for i in range(1, 7):
        h_tag = f'h{i}'
        if h_tag in content:
            def fix_heading(match):
                full_tag = match.group(0)
                tag_start = match.group(1)
                attrs = match.group(2)
                if 'font-black' not in attrs:
                    attrs = attrs.replace('className="', 'className="font-black ')
                if 'font-heading' not in attrs:
                    attrs = attrs.replace('className="', 'className="font-heading ')
                return f'<{tag_start}{attrs}>'
            
            content = re.sub(f'({h_tag})(.*?)className="(.*?)"', fix_heading, content)

    # Final cleanup of some common broken patterns
    content = content.replace('text-ink-40 ', 'text-ink-400 ')
    content = content.replace('text-ink-30 ', 'text-ink-300 ')
    content = content.replace('text-ink-50 ', 'text-ink-500 ')

    with open(filepath, 'w') as f:
        f.write(content)

# File list
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
    "components/charts/HeartbeatMonitor.tsx",
    "components/charts/MarginExplorer.tsx",
    "components/charts/ScoreboardCard.tsx",
    "components/charts/SwingMap.tsx",
    "components/charts/ThreewayRaceBar.tsx",
    "components/charts/VoteShareLineChart.tsx",
    "components/shared/CredibilityBanner.tsx",
    "components/shared/DataGapTooltip.tsx",
    "components/shared/DistrictStrength.tsx",
    "components/shared/ElectionSandbox.tsx",
    "components/shared/EventTimeline.tsx",
    "components/shared/FortyFourYearWall.tsx",
    "components/shared/GrassrootsGrowth.tsx",
    "components/shared/GrowthSection.tsx",
    "components/shared/MilestoneCard.tsx",
    "components/shared/Navbar.tsx",
    "components/shared/NearMissGallery.tsx",
    "components/shared/NumberCounter.tsx",
    "components/shared/OneVoteAtATime.tsx",
    "components/shared/OppositionClaims.tsx",
    "components/shared/ScrollProgress.tsx",
    "components/shared/ShareableMoments.tsx",
    "components/shared/SilentRevolution.tsx",
    "components/shared/ThrissurDeepDive.tsx",
    "components/shared/VoteShiftFlow.tsx",
    "app/data-vault/page.tsx"
]

root = "/Users/arunjithm/Desktop/VS-Projects/dawn_orange/kerala-orange-dawn/"
for f in files:
    path = os.path.join(root, f)
    if os.path.exists(path):
        refactor_file(path)
        print(f"Processed {f}")
