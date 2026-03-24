# Changelog

## v1.3 — March 2026

### New Content

**Tools**
- Added spokeshave (planes cat) — flat/curved/round sole types, grain-reading technique
- Added marking knife (marking cat) — single vs double bevel, knife wall technique
- Added sliding bevel / bevel gauge (marking cat) — angle transfer, lock-and-reuse workflow
- Added mallet (chisels cat) — four types including carver's round and lignum vitae, metal-hammer warning
- Added winding sticks (marking cat) — sighting technique, shop-made vs commercial
- Added drawknife (planes cat) — bevel-up vs bevel-down, shaving horse callout

**Joinery**
- Added detail pages for: Dowel Joint, Mitered Joint with Spline, Groove and Panel, Scarf and Splice Joint
- All Joint Guide results now link to their respective detail pages (previously four were `nav:null`)

**Finishing Schedules**
- Added: Carved and Turned Objects (food-contact and non-food paths, green wood note)
- Added: Hardwax Oil / Rubio Monocoat / Osmo (thin-coat system, cure timing, brand differences)
- Added: Wax-Only / Bare Wood (workbench and tool handle path, anti-glue-adhesion benefit)

### Content Improvements

**Beginner Guide** — full rewrite, 5 thin items → 8 substantive sections
- Existing sections expanded: What Woodworking Is, Hand vs Power Tools, Grain, Sharp Tools, First Projects
- New sections added: Wood Moves — Design Around It, The Milling Sequence, Workholding — The Bench is a Tool

**Exotic Wood Entries** — voice/tone pass on all eight exotic species
- Osage orange, purpleheart, lignum vitae, bloodwood, bubinga, zebrawood, Indian rosewood, Gaboon ebony
- Workability fields expanded with specific tool guidance, dust/health warnings (P100 noted where needed)
- Finishing fields expanded with mechanism explanations (tannin reactions, oil adhesion, UV behavior)
- CITES / sourcing notes added for lignum vitae, bubinga, Indian rosewood, Gaboon ebony

**Heartwood & Sapwood terms**
- Both definitions expanded with practical selection guidance and species-specific notes
- Missing `rel: ['sapwood']` backlink on heartwood entry fixed

### Navigation & Home Page

- Sharpening promoted to hero card on home page (alongside Start Here and Shop Safety)
- Joint Decision Guide moved from Calculators group into Reference group, alongside Joinery
- Calculators group label updated to just "Calculators"

### Journal

- Archive system added: entries soft-delete to archive rather than permanent deletion
- Archive view accessible from list footer — shows archived entries with Restore and Delete options
- Permanent delete only available from archive view, with confirmation
- Archive button in editor replaces Delete button (amber color, distinct from destructive red)
- All journal buttons properly wired in `journalInit` (new entry, save, back, export, archive, archive view, archive back)
- Journal state declarations (`journalEntries`, `activeEntryId`, `JOURNAL_KEY`, `LEGACY_KEY`) hoisted above `safeRender` calls — fixes silent TDZ crash that prevented journal from initializing

### Bug Fixes

- Removed two stray bare commas in T and TOOLS arrays that created `null` slots and caused `x.id` crashes in list renderers
- Fixed escaped template literal interpolations (`\${...}`) in `journalRenderArchive` that caused raw placeholder text to render in archive view

---

## v1.2 — earlier 2026

- Terms category navigation fixed (61 terms across 7 categories)
- Wood Movement Calculator species coverage completed
- Journal system with auto-save, export, and localStorage persistence
- Disclaimer modal and service worker registration
- 30 wood species with Janka, workability, finishing, and drying data
- 23 tools with types, technique, and associated terms
- Finishing schedules: cutting board, indoor oil, indoor film, shellac, outdoor, painted
- Joinery guide: mortise and tenon, dovetail, box joint, half-lap, dado, drawbore, pocket screw
- Green woodworking section: riving, spoon carving, chairmaking, steam bending, shaving horse
- Dovetail step-by-step walkthrough
- Board foot calculator
- Hardware and fasteners reference
- Joint Decision Guide
