# 3D asset prompt: the Kool Konsulting bahi-khata (GLB)

> **How to use this file.** Give it to whoever builds the model:
> - an AI agent with Blender, such as Claude with Higgsfield's 3D Scene Builder ("3D Jutsu"), Claude Code with Blender installed, or a Blender MCP
> - or a 3D artist
>
> **Route A** (section 4) produces the animatable model the website needs. **Route B** (section 5) is a quick static fallback. The website code depends on **section 6, "Contract with the website"**: follow it exactly.
>
> Companion file: `REDESIGN-PROMPT-V3.md`, section 7. Prepared 2 October 2026.

---

## 1. What we're making, and why it matters

A **bahi-khata** is the red cloth-bound ledger Indian traders have kept their accounts in for generations. It's the most recognisable symbol of an Indian business's books. In 2019 the Finance Minister carried the Union Budget in a red bahi-khata instead of the old leather briefcase, and since 2021 the same red pouch has carried a tablet. That makes the object a national symbol of moving business from paper to digital.

That's exactly what Kool Konsulting does for small and medium businesses. On the homepage, this 3D bahi-khata floats beside the headline. As the visitor scrolls:
1. its cotton rope slips off and the cover opens
2. the pages lift out
3. each page turns into a glowing app screen: a website, an app, business software and an automation

The visitor sees, in one smooth motion, their own register becoming software.

So the model has to be:
- **beautiful:** a premium product shot, not a game asset
- **real:** instantly recognisable to any Indian trader
- **light:** 600 KB or less, so it runs smoothly on a mid-range Android phone
- **built to be animated:** separate parts with exact names and hinge pivots

---

## 2. What a real bahi-khata looks like

- **Cover.** Red cotton cloth stitched over a cardboard core. It has loose, wavy white machine stitching (curvy lines) running along its length and a straight stitch just inside the border. The edges are bound with a thin, colourful striped cotton tape called *niwar*.
- **Format.** Bahis come in two formats: book-like (*kitaabnuma*) and the classic bahi format (*bahinuma*). For the website we use a long, narrow bahi, about twice as long as it is wide, bound along one short edge so the cover and pages flip up and over like a long notepad. This is a design choice: the portrait pages turn naturally into phone-shaped cards. Some artistic licence is fine, as long as it reads instantly as a bahi-khata.
- **Pages.** Handmade-feel paper in alternating white and pale yellow sheets. Each page is folded lengthwise into equal columns (called *sal*), so the folds act as the columns for credits and debits.
- **Tie.** A cotton rope wound around the closed book and knotted.
- **Feel.** Handmade, slightly soft at the corners, used but cared for.

**Leave out**, because the bahi on the website stays secular and generic:
- the religious invocations traditionally written on the first page (swastika, "Shree", Ganesh or Lakshmi)
- the Government of India's State Emblem from the Budget pouch, whose use is restricted by law
- any text, numbers or logos, apart from the optional monogram in section 4.6

---

## 3. Art direction

- **The look.** A premium studio product shot, like an Apple or Muji product page: calm, tactile and precise. The red should feel rich and handloom, not glossy or plasticky.
- **Lighting.** Soft studio lighting: a large soft key light from the top left, a gentle fill from the right, and a warm rim light from behind. Soft contact shadow.
- **Materials do the talking.** Cotton weave, thread stitches, paper fibres and folds, and rope twist should all be readable at about 1200 px wide, without becoming noisy.
- **Accurate colour.** Render with the **Khronos PBR Neutral** view transform. The website uses the matching three.js tone mapping, so the colours must agree.

---

## 4. Route A (recommended): an animatable model built in Blender

### 4.1 Units, axes and scale
- **Units:** metric, unit scale 1.0, 1 Blender unit = 1 metre. Model at real size.
- **Axes:** Blender is Z-up, and the glTF export converts to +Y up. In the finished GLB, +Y is up, +Z points towards the viewer and +X points right.
- **Placement in Blender:**
  - the book lies flat on the XY plane, with its top surface facing +Z
  - the **hinge** (the bound short edge) runs along the far edge, at Blender **+Y**, which becomes glTF **−Z**
  - the free short edge, nearest the viewer, is at Blender −Y, which becomes glTF +Z

### 4.2 Dimensions (closed book)

| Part | Size |
|---|---|
| Covers (front and back) | 165 mm wide × 330 mm long × 3 mm thick each, with corners rounded to a 1.5 mm radius and a 1 mm bevel |
| Page block | 157 × 322 mm and 34 mm thick. Flush with the hinge edge; inset 4 mm from the cover's edge at the free edge and on both sides |
| Loose pages | Six pages, each 157 × 322 mm and 0.4 mm thick, stacked on the page block under the front cover |
| Gaps | Leave a 0.1 mm gap between stacked parts so nothing flickers (z-fights) |
| Total thickness | About 42.5 mm |
| Spine | Red cloth wrapped around the hinge edge from the bottom to the top of the stack, extending 18 mm onto the outside of each cover, with a line of stitching. It stays with the back cover. Keep the front cover's hinge-side edge 1 mm clear of it so the cover never clips when it opens. |
| Rope | Natural cotton, 3.5 mm diameter. Wound twice across the width of the closed book, about 40% of the way along its length from the free edge. Finished with a simple knot on the front cover, leaving two loose ends of about 60 mm with slightly frayed tips. |

### 4.3 Parts, names and pivots

The names below are the website's contract. They must be exact.

```
BK_Root                     origin: centre of the book's bottom face (the book rests on the ground plane)
├── BK_BackCover            static
├── BK_Spine                static cloth wrap around the hinge edge
├── BK_PageBlock            static stack of pages
├── BK_Page_06_Hinge        empty, on the hinge line, at the height of page 6's underside
│   └── BK_Page_06          page mesh, with morph target "Curl"
├── BK_Page_05_Hinge
│   └── BK_Page_05
├── BK_Page_04_Hinge
│   └── BK_Page_04
├── BK_Page_03_Hinge
│   └── BK_Page_03
├── BK_Page_02_Hinge
│   └── BK_Page_02
├── BK_Page_01_Hinge        page 1 is the top page, directly under the front cover
│   └── BK_Page_01
├── BK_FrontCover_Hinge     empty, on the hinge line, at the height of the front cover's underside
│   └── BK_FrontCover       cover mesh
│       └── BK_Monogram     optional debossed mark; the website may hide it
├── BK_Rope                 rope and knot, with its origin at the centre of the knot
└── CAM_Hero                perspective camera for the hero and poster view
```

**Pivot rules:**
- **Where each hinge empty sits.** Each `_Hinge` empty sits exactly on its hinge line: centred on X, at the hinge edge (glTF z = −0.165 m), and at the height of the bottom of the part it carries.
- **Rest transforms.** Each empty has identity rotation and scale at rest. Its child mesh has its rotation and scale applied, and only a location offset.
- **How opening works.** Rotate a `_Hinge` empty about its **local X axis**. 0 is closed. **−π lays the cover flat behind the book, cloth side down.** For pages, −0.35π lifts the page about 63°.
- **Test it before exporting.** Rotate `BK_FrontCover_Hinge` X to −180° and check that the cover swings up and over the hinge and lies flat behind the book with nothing intersecting.
- **Don't merge anything.** Don't join meshes, and don't parent anything except as shown.

### 4.4 Geometry
- **Budget:** 15,000 triangles or fewer in total.

  | Part | Triangle limit |
  |---|---|
  | Rope (a 6–8 sided tube, shaded smooth) | 5,000 |
  | Each page | 300 |
  | Each cover, including the bevel | 800 |
  | Spine | 1,500 |
  | Page block | 300 |
- **Topology:** clean quads and triangles, with no n-gons on the pages (they deform). Shade smooth, with sharp edges marked on hard corners, and consistent outward-facing normals.
- **Pages** are separate solid meshes (a Solidify modifier of 0.4 mm, applied), so each has a top face, a bottom face and edges. Give each page about 24 segments along its length and 2 across, so the curl is smooth.
- **Detail lives in the textures, not the geometry.** Add realism such as worn edges and slightly uneven page edges through textures and normal maps.

### 4.5 UVs
- **Atlases:** use non-overlapping UVs for everything that has baked maps, with 4 px of padding at 1024 px. The covers and spine share one 1024² cloth atlas, with the stitch pattern and niwar tape painted into it.
- **Page content face (critical).** Each `BK_Page_0n`'s **top face** (the face you see when the book is open) must fill UV 0–1 exactly:
  - **u** runs left to right
  - **v** runs from the free edge (v = 0) to the hinge (v = 1)

  This lets the website swap in its own 512×1024 textures the right way up.
- **The rest of the page:** the bottom face and edges use a plain paper material, `M_Paper_Back`.

### 4.6 Materials and textures

Use Blender's Principled BSDF throughout; it exports to glTF's metallic-roughness model. Metallic is 0 for every material.

| Material | Look | Key settings |
|---|---|---|
| `M_Cloth_Red` | **Cloth:** deep handloom cotton red, varying between `#A82219` and `#B3261E`, with a fine plain weave and slightly lighter wear at the corners and edges.<br>**Stitching:** white cotton thread in 5–7 loose, wavy, slightly irregular lines along the length about 20 mm apart, plus one straight stitch 6 mm inside the border.<br>**Edging:** striped niwar tape, 9 mm wide, along the cover edges. The stripes are about 2 mm each, in yellow `#E2B23A`, green `#2F7D46`, white and red. | Roughness 0.85–0.92. Sheen weight about 0.6, warm pinkish-white sheen tint, sheen roughness about 0.5 (this exports as `KHR_materials_sheen`). Base colour and normal maps. |
| `M_Cloth_Inner` | The inside of the covers: pale yellow endpaper | Roughness 0.9 |
| `M_Paper_White` | Off-white handmade paper (`#F4EFE2`) with 8 lengthwise fold creases (the *sal* columns) and very faint fibres. No ruled lines and no writing. | Roughness 0.95. Folds in a normal map with light ambient occlusion |
| `M_Paper_Yellow` | The same paper in pale yellow (`#F1E3AE`). Pages alternate white and yellow, starting with white on page 1. | Same as `M_Paper_White` |
| `M_Paper_Back` | Plain paper for the bottom faces and edges of the pages | Base colour only |
| `M_PageEdges` | The sides of the page block: thin alternating white and yellow layers | Base colour, 256×1024 |
| `M_Rope` | Natural cotton (`#EBE1C9`), three-ply twist, slightly fuzzy | Roughness 0.9, sheen 0.5. A 256² tiling normal map |
| `M_Monogram` (optional) | The Kool Konsulting mirrored-K mark, 24 mm wide, blind-debossed into the front cover (no colour change). It sits centred, 40 mm from the free edge. | A normal map only, as a decal mesh 0.2 mm above the cloth |

**The mirrored-K mark** is six strokes inside a 100 × 88 box: two verticals at x = 14 and x = 86, and four diagonals meeting at the top centre and bottom centre. The SVG paths are `M14 8 V80`, `M14 44 L50 8`, `M14 44 L50 80`, `M86 8 V80`, `M86 44 L50 8` and `M86 44 L50 80`.

**Texture rules:**
- **Limits:** no image larger than 1024 px, and no more than 6 images in total: cloth base colour, cloth normal, paper base colour, paper normal, page edges, and the rope normal.
- **Bake everything to images inside Blender.** Procedural shader nodes, world lighting and external texture files don't carry into a GLB, so generate every pattern (weave, stitches, tape, folds, rope twist) procedurally or with numpy, then bake it to an image in the `.blend` and use it as an image texture.
- **No text** of any kind, and no religious marks or emblems.

### 4.7 Morph target: `Curl`

Each `BK_Page_0n` gets one shape key, named exactly `Curl`. At a value of 1.0, the page bends smoothly upwards from the hinge to the free edge, as if someone were lifting it by its free edge:
- no displacement at the hinge
- displacement increasing quadratically towards the free edge
- the free edge raised about 18 mm and tipped about 30°

Export shape keys and shape key normals.

### 4.8 Optional baked animation clip

`BK_Open`, 2.0 seconds at 30 fps:
- 0.0–0.6 s: `BK_Rope` rises 20 mm. You may also scale it from 1.0 to 1.03.
- 0.4–2.0 s: `BK_FrontCover_Hinge` rotates around X from 0° to −180°, eased in and out.

The pages don't move in this clip. The website either scrubs the clip or animates the nodes itself, and it fades the rope's opacity in code (glTF can't animate opacity without extensions).

### 4.9 Camera and poster render

**`CAM_Hero`.** A perspective camera with a vertical field of view of 28°.
- **In glTF coordinates:** at (0.38, 0.40, 0.52) m, looking at (0, 0.02, 0).
- **In Blender coordinates:** at (0.38, −0.52, 0.40), looking at (0, 0, 0.02).

This gives a three-quarter view from the front right, slightly above. Use a Track To constraint while setting it up, then apply it so the camera exports with a plain transform.

**Render `bahi-poster.png`:**
- **Size and background:** 2400 × 2400 px, transparent film, with a shadow-catcher plane under the book so only a soft contact shadow shows.
- **Lighting:** the lights from section 3.
- **Colour:** Khronos PBR Neutral view transform.
- **State:** the book closed, with the rope on.
- **Engine:** Eevee or Cycles; denoise if you use Cycles.

**Optional:** `bahi-open-still.png`, with the cover open 180° and page 1 lifted 40° (Curl at 0.5). It's useful for social posts.

### 4.10 Export from Blender

Use File › Export › glTF 2.0, with these settings (labels vary slightly between Blender versions):

| Setting | Value |
|---|---|
| Format | glTF Binary (`.glb`) |
| Include | Selected objects (the `BK_Root` hierarchy and `CAM_Hero`). Cameras on, punctual lights off. |
| Transform | +Y Up on |
| Mesh | Apply Modifiers on, UVs on, Normals on, Tangents off, Vertex Colours off |
| Shape keys | Shape Keys on, Shape Key Normals on |
| Materials | Export. Images: PNG (the compression step converts them to WebP; `resize` only accepts PNG and JPEG). |
| Animation | On only if the `BK_Open` clip exists ("Always sample animations" on) |
| Compression | Off (the next step compresses the file) |

If your tool exports the GLB for you (Higgsfield's 3D Scene Builder does this through `scene_builder_3d_get_glb`), download that file and run section 4.11 on it. If its textures are already WebP, skip the `resize` and `webp` steps; the textures were baked at 1024 px or smaller anyway.

### 4.11 Compress

Use the gltf-transform command-line tool (Node 18 or later):

```bash
npx @gltf-transform/cli resize   bahi-raw.glb step1.glb --width 1024 --height 1024
npx @gltf-transform/cli webp     step1.glb    step2.glb --quality 85
npx @gltf-transform/cli meshopt  step2.glb    bahi-khata.glb
npx @gltf-transform/cli inspect  bahi-khata.glb
npx @gltf-transform/cli validate bahi-khata.glb
```

**Don't** run `gltf-transform optimize` with its default settings. It flattens the node tree, joins meshes and merges materials, which would destroy the named hinges.

**Target: 600 KB or less.** If the file is over, try these in order:
1. reduce the rope's segments
2. drop the paper normal map, baking the folds into the paper's base colour
3. drop the cloth normal map to 512²

### 4.12 Check before handing it over
- [ ] **The validator** (`gltf-transform validate`) reports 0 errors.
- [ ] **Neutral lighting:** at https://gltf-viewer.donmccurdy.com it looks right under neutral lighting, and it's about 0.33 m long.
- [ ] **Hinges and morph:** at https://threejs.org/editor, check that:
  - setting `BK_FrontCover_Hinge` rotation X to −3.14 lays the cover flat behind the book, cloth side down, with no clipping
  - setting `BK_Page_01_Hinge` X to −1.1 lifts the page from the hinge
  - setting its `Curl` influence to 1 curls it smoothly
- [ ] **Names:** node names match section 6 exactly, and `BK_Monogram` can be hidden.
- [ ] **Size:** the file is 600 KB or less, with 15,000 triangles or fewer and no more than 6 textures, none over 1024 px.
- [ ] **Look:** at 1200 px wide, the cloth weave is visible but subtle, the stitches and tape are crisp, nothing looks plasticky, the paper is slightly warm and the rope reads as cotton.

### 4.13 Deliverables

Put the GLB and the poster in the website repo, in `public/3d/`.

| File | What it is |
|---|---|
| `bahi-khata.glb` | Compressed, 600 KB or less |
| `bahi-khata.blend` | The source file, with textures packed in |
| `bahi-poster.png` | 2400², transparent background (the website converts it to AVIF) |
| `textures/` | The baked source PNGs |
| `bahi-khata.manifest.json` | Node names, pivot positions in glTF coordinates, dimensions, triangle count and file size |
| `bahi-open-still.png` | Optional |

### 4.14 Copy-paste prompt for an AI agent with Blender

> You have Blender with Python (`bpy`): Higgsfield 3D Scene Builder, Blender run from Claude Code (`blender --background --python build.py`), or a Blender MCP. Build the Kool Konsulting bahi-khata exactly as specified in sections 2–4 and 6 of `3D-BAHI-KHATA-PROMPT.md`. Work in separate, verifiable edits rather than one giant script:
>
> 1. **Scene setup.** Set up a metric scene (1 unit = 1 m). Add `CAM_Hero` using the values in section 4.9, a large soft key light from the top left, a fill light from the right, a warm rim light from behind, and a shadow-catcher ground.
> 2. **Blockout.** Block out `BK_Root` and every part, with the exact names, hierarchy, dimensions and hinge pivots from sections 4.2 and 4.3. Render a small check image from `CAM_Hero` and inspect it.
> 3. **Test the hinges.** Rotate `BK_FrontCover_Hinge` to −90° and −180°, and `BK_Page_01_Hinge` to −63°. Render a check image for each, inspect them, then reset everything to 0.
> 4. **Detail.** Add the bevels, the spine wrap, the rope wound twice with its knot and frayed ends, and the optional monogram decal.
> 5. **Textures.** Generate the textures procedurally (cloth weave, white wavy stitches, niwar tape stripes, paper folds, page-edge layers, rope twist), then **bake each one to an image of 1024 px or smaller**. Assign them through Principled BSDF materials named as in section 4.6, including cloth sheen. Use no external files and no text.
> 6. **Curl.** Add a `Curl` shape key to every page (section 4.7). Test it at 0, 0.5 and 1 with a check render.
> 7. **Optional clip.** If you have time, add the `BK_Open` clip from section 4.8.
> 8. **Final check.** Render a final check image of the closed book from `CAM_Hero` (Eevee, Khronos PBR Neutral) and inspect it for floating parts, intersections, missing textures and lighting problems. Fix anything you find.
> 9. **Poster and export.** Render `bahi-poster.png` (2400², transparent background). Export the GLB with the settings in section 4.10, or fetch the committed GLB if your tool exports it automatically.
> 10. **Report.** Report the node list with pivot positions, the triangle count, the texture list and sizes, and the raw file size. Section 4.11's compression runs in the website repo.
>
> Never claim something is finished without looking at a render of it.

---

## 5. Route B (quick): a static model from AI image-to-3D

Use this only if Route A isn't possible yet. Image-to-3D tools (Meshy, Tripo, Hyper3D Rodin, Higgsfield's `generate_3d`) produce **one fused mesh**: the cover can't open and the pages can't lift. The website then uses its fallback choreography, where the closed book turns towards the viewer and four cards rise out of it.

**Step 1: generate a reference image.** Use any image model.

> Studio product photograph of a traditional Indian bahi-khata ledger, closed, lying flat on a seamless white background. Long, narrow format, about twice as long as it is wide. Cover of deep red handloom cotton cloth with loose, wavy white machine stitching running along its length; edges bound with a thin striped cotton tape in yellow, green and white; tied with a natural off-white cotton rope wound twice and knotted on top. Handmade, slightly soft worn corners. Three-quarter view from the front right, camera slightly above, 85 mm lens. Soft diffused studio light from the top left, gentle contact shadow. Photorealistic, high detail.
>
> Negative: text, letters, numbers, logos, emblem, religious symbols, gold foil, leather, plastic shine, hands, people, clutter.

**Step 2: image to 3D.**
- **Settings:** PBR textures on; a target of about 20,000 triangles (quad remesh if the tool offers it); textures at 1024 px, or 2048 px downsized later; symmetry off, because the rope knot isn't symmetrical.
- **Text-to-3D instead:** if your tool takes text rather than an image, use this prompt:

  > A closed traditional Indian bahi-khata ledger: a long, narrow rectangular book (about 1:2), deep red cotton cloth cover with loose wavy white stitching along its length, thin striped yellow-green-white tape edging, a natural cotton rope tied around it with a knot; realistic handmade materials, PBR textures, clean geometry, no text or symbols.

**Step 3: clean up in Blender.**
- delete any stray geometry
- put the origin at the centre of the bottom face
- scale the book to 0.33 m long and orient it as in section 4.1
- name the single mesh `BK_Root` and check its normals
- add `CAM_Hero`
- export and compress as in sections 4.10 and 4.11

**Limits.** AI generators often garble rope knots and stitching. Generate 3–4 variants and keep the cleanest. A static model also can't open, so it can't deliver the full sequence. Treat Route B as a stopgap until the Route A model is ready.

---

## 6. Contract with the website (summary)

| Item | Requirement |
|---|---|
| File | `public/3d/bahi-khata.glb`, 600 KB or less, Meshopt geometry and WebP textures |
| Axes and units | +Y up, the front faces +Z, metres, real size (about 0.165 × 0.33 × 0.0425 m closed) |
| Root | `BK_Root`, with its origin at the centre of the bottom face |
| Hinges | `BK_FrontCover_Hinge` and `BK_Page_01_Hinge` to `BK_Page_06_Hinge` (page 01 is on top). All sit on the hinge line at z = −0.165. Rotate about local X: 0 is closed, and −π lays the cover flat behind the book. |
| Meshes | `BK_FrontCover`, `BK_BackCover`, `BK_Spine`, `BK_PageBlock`, `BK_Page_01` to `BK_Page_06`, `BK_Rope`, and optionally `BK_Monogram` |
| Morph target | `Curl` on each page: 0 is flat, 1 is curled |
| Page UVs | The content (top) face fills 0–1, with v = 1 at the hinge. To show a page as a card facing the camera, the website rotates it +π/2 about its own X axis. |
| Materials | `M_Cloth_Red`, `M_Cloth_Inner`, `M_Paper_White`, `M_Paper_Yellow`, `M_Paper_Back`, `M_PageEdges`, `M_Rope`, and optionally `M_Monogram` |
| Camera | `CAM_Hero`, with a 28° vertical field of view, at (0.38, 0.40, 0.52) looking at (0, 0.02, 0) in glTF coordinates |
| Optional animation | `BK_Open`, 2 s: the rope lifts, then the cover opens |
| Poster | `bahi-poster.png` (2400², transparent background) from `CAM_Hero`; the website converts it to AVIF |
| Page artwork | Pages stay plain: folds only, no writing. The website overlays its own handwritten and app-screen textures at runtime. |
