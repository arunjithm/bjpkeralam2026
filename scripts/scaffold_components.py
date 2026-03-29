import os

base = "components"
dirs = ["acts", "maps", "charts", "datavault", "shared"]
for d in dirs: os.makedirs(f"{base}/{d}", exist_ok=True)

acts = ["ActI_BeforeDawn", "ActII_FirstSeeds", "ActIII_GrowingRoots", "ActIV_FirstLight", "ActV_TheSurge", "ActVI_RootsDeepen", "ActVII_TheDip", "ActVIII_DoubleBreakthrough", "ActIX_DawnIsHere"]
maps = ["KeralaStateMap", "DistrictDrillMap", "ConstituencyMap", "WardLevelMap", "DotDensityOverlay"]
charts = ["VoteShareLineChart", "ThreewayRaceBar", "HeartbeatMonitor", "SwingMap", "ScoreboardCard", "MarginExplorer"]
datavault = ["VaultFilterPanel", "VaultResultsTable", "VaultDownloadButton", "DuckDBProvider"]
shared = ["Navbar", "MilestoneCard", "DataGapTooltip", "NumberCounter", "ScrollProgress"]

def create_components(folder, comps):
    for c in comps:
        path = f"{base}/{folder}/{c}.tsx"
        if not os.path.exists(path):
            with open(path, "w") as f:
                f.write(f"export default function {c}() {{\n  return <div>{c}</div>;\n}}\n")

create_components("acts", acts)
create_components("maps", maps)
create_components("charts", charts)
create_components("datavault", datavault)
create_components("shared", shared)

os.makedirs("app/data-vault", exist_ok=True)
os.makedirs("app/2026", exist_ok=True)

if not os.path.exists("app/data-vault/page.tsx"):
    with open("app/data-vault/page.tsx", "w") as f:
        f.write("export default function DataVault() { return <main className=\"p-8 pb-20\">Data Vault</main>; }\n")

if not os.path.exists("app/2026/page.tsx"):
    with open("app/2026/page.tsx", "w") as f:
        f.write("export default function Live2026() { return <main className=\"p-8 pb-20\">2026 Live Chapter</main>; }\n")

print("Components scaffolded successfully.")
