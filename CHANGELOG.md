# Workshop Companion, Changelog

All notable changes to this project are documented here.

---

## v1.2, Workshop Journal & PWA
*March 2026*

- Added Workshop Journal, timestamped entries, auto-save, archive view, export to clipboard
- Reorganized landing page into five focused groups: Reference, Learn, Finishing & Gluing, Shop, Calculators & Tools
- App Guide, About, and References moved to footer, landing page is now for doing work
- Converted to Progressive Web App (PWA), installable to home screen on iOS and Android
- Added offline caching via service worker, full app works without internet after first visit
- Fixed disclaimer modal button not responding on first load
- Fixed `HARDWARE`, `GREEN_WOOD`, `SPECIES_FINISH_MAP` arrays loading in wrong script block
- Fixed all list sections to sort alphabetically by name
- Removed AI identification bullet from disclaimer
- Fixed undefined CSS variable `--cream` → `--cr`
- Bumped disclaimer text size to match body text

---

## v1.1, Species Expansion & Continuity
*March 2026*

- Expanded wood species from 8 to 30 total
  - Added 13 domestic species: Red Oak, Yellow Birch, Shagbark Hickory, Western Red Cedar, Douglas Fir, Teak, Tulip Poplar, Black Locust, Soft Maple, European Beech, American Sycamore, Butternut, Osage Orange, Eastern White Pine
  - Added 9 exotic species: Purpleheart, Lignum Vitae, African Padauk, Wenge, Bloodwood, Bubinga, Zebrawood, Indian Rosewood, Gaboon Ebony
- All list sections now sort alphabetically by name
- Consolidated fragmented `NEW_TOOLS`, `NEW_WOOD`, `MORE_WOOD` arrays into base arrays
- Removed dead `mergeNewContent()` runtime merge function
- Fixed duplicate `renderWoodD` and `analyzeImg` function definitions
- Added proper `</script>`, `</body>`, `</html>` closing tags (were missing due to file size truncation)
- Removed ID camera (AI wood/tool identification), to return in v2.0 with proper backend proxy
- Added Ko-fi donation link to About page
- Added `safeRender()` wrapper, render failures are isolated, rest of app continues
- Added global error handler and unhandled promise rejection handler

---

## v1.0, Initial Release
*March 2026*

Initial public release of Workshop Companion.

**Content:**
- 15 woodworking terms with definitions and cross-links
- 23 hand and power tools with technique notes
- 8 wood species (domestic hardwoods and softwoods)
- 9 sawmill and lumber terms
- 7 joinery types with hand/power/both classification
- 8 clamp and workholding types
- 5 workbench designs
- 9 wood finishing entries
- 5 starter projects (sequenced builds)
- 9 common mistakes with symptom/cause/fix
- 7 gluing entries
- 7 milling and process entries
- 6 layout and measurement entries
- 7 hardware and fastener types
- 6 green woodworking entries
- 8 finish troubleshooting entries
- 6 wood defect entries
- 7-step dovetail walkthrough
- 6 finishing schedules
- Joint decision guide (interactive)
- Board foot calculator
- Wood movement calculator
- Shop safety reference
- Sharpening, maintenance, drying, shop setup sections
- Beginner guide
- External references

**Technical:**
- Single HTML file, all data inline
- Works offline after first visit (service worker)
- Notes panel with localStorage persistence
- Full-text search with scoring
- Species-to-finish cross-links
- Disclaimer modal (shows once)
- Ko-fi donation link

---

## Planned, v2.0
- Wood and tool AI identification (camera feature) via Cloudflare Workers proxy
- Personal project log section
- Expanded tool library
