# Design System Specification: High-Tech Editorial

## 1. Overview & Creative North Star: "The Digital Architect"

This design system moves away from the generic "SaaS-in-a-box" aesthetic, instead embracing a philosophy we call **The Digital Architect**. Just as premium Brazilian architecture utilizes light, shadow, and raw materials to define space, this system uses tonal layering and aggressive whitespace to create a sense of structural permanence and technological sophistication.

To break the "template" look, we employ:
*   **Intentional Asymmetry:** Overlapping image containers and staggered grid placements that mimic editorial layouts.
*   **Atmospheric Depth:** A shift from 2D flat design to a multi-layered interface where components feel "suspended" in an environment rather than pasted onto a page.
*   **High-Contrast Chronology:** Clear alternating sections of Deep Navy and Clean White to guide the user through a narrative journey.

---

## 2. Colors

The palette is anchored by "Electric Blue" for kinetic energy and "Deep Navy" for institutional authority. 

### Core Palette (Material Design Tokens)
*   **Primary:** `#0049db` (Electric Blue - Action & Energy)
*   **Primary Container:** `#2962ff` (Vibrant accenting for hover states)
*   **Surface:** `#f7f9fb` (Clean, tech-forward background)
*   **On-Surface:** `#191c1e` (Deep Navy for primary readability)
*   **Tertiary:** `#9e3500` (Used sparingly for high-attention alerts)

### The "No-Line" Rule
Traditional 1px borders are strictly prohibited for sectioning. To separate content blocks, designers must use **Background Alternation**. Transition from `surface` (#f7f9fb) to `on_secondary_fixed` (#0d1c32) to create a definitive boundary without visual clutter.

### Surface Hierarchy & Nesting
Depth is achieved through the systematic nesting of surface tiers:
1.  **Level 0 (Base):** `surface` (#f7f9fb)
2.  **Level 1 (Card/Container):** `surface_container_lowest` (#ffffff)
3.  **Level 2 (Inset/Search):** `surface_container` (#eceef0)

### Glass & Texture
For floating navigation or hero overlays, use **Glassmorphism**:
*   **Color:** `surface` at 70% opacity.
*   **Effect:** `backdrop-blur: 20px`.
*   **Texture:** Apply a subtle linear gradient to main CTAs transitioning from `primary` (#0049db) to `primary_container` (#2962ff) at a 135° angle to add "soul" to the digital surface.

---

## 3. Typography

The system utilizes a dual-font strategy to balance architectural boldness with technical precision.

*   **Headings (Plus Jakarta Sans):** Chosen for its aggressive modern geometry. 
    *   *Display-LG (3.5rem):* Used for hero statements with tight letter-spacing (-0.02em).
    *   *Headline-MD (1.75rem):* Set in Bold weight to command attention in feature sections.
*   **Body & Utility (Inter):** The industry standard for legibility.
    *   *Body-LG (1rem):* Optimized for readability with a generous 1.6 line-height.
    *   *Label-MD (0.75rem):* Used for micro-copy and metadata, always in Semi-Bold to maintain "high-tech" crispness.

---

## 4. Elevation & Depth

We convey hierarchy through **Tonal Layering** rather than structural lines.

*   **The Layering Principle:** Place a `surface_container_lowest` (#ffffff) card on top of a `surface_container_low` (#f2f4f6) background. This creates a "soft lift" that feels premium and organic.
*   **Ambient Shadows:** For floating elements (like the Primary CTA or Nav), use an extra-diffused shadow:
    *   `box-shadow: 0 20px 40px rgba(0, 73, 219, 0.06);` (Note the blue tint in the shadow to mimic the primary brand color).
*   **The "Ghost Border" Fallback:** If a container requires a border for accessibility, use `outline_variant` (#c3c5d8) at **15% opacity**. This creates a "Ghost Border"—visible enough to define space, but soft enough to avoid the "bootstrap" look.

---

## 5. Components

### Buttons
*   **Primary:** Solid `primary` (#0049db) with `on_primary` (#ffffff) text. Corner radius: `full` (9999px) for a high-tech "pill" aesthetic. 
*   **Ghost:** Transparent background with an `outline` (#737687) at 20% opacity. On hover, transition to a subtle `surface_container_high` fill.

### Cards
*   **Styling:** No borders. Use `surface_container_lowest` for the background.
*   **Spacing:** Use `xl` (1.5rem) internal padding to allow the content to breathe, mirroring the editorial "Editorial" North Star.
*   **Interaction:** On hover, the card should scale slightly (1.02x) and the Ambient Shadow should deepen.

### Input Fields
*   **Resting State:** `surface_container_low` background with no border.
*   **Focus State:** A "Ghost Border" appears using the `primary` color at 40% opacity, and a subtle internal glow.

### Floating Navigation
*   A "pilled" container using the **Glassmorphism** rule. The "ZION" logo should be locked to the left with menu items centered, using `label-md` typography in all-caps with 0.1em tracking.

---

## 6. Do's and Don'ts

### Do
*   **DO** use large-scale imagery that overlaps two background sections to create depth.
*   **DO** use "Electric Blue" as a directional tool (arrows, underlines, icons) to lead the eye.
*   **DO** leave at least 120px of vertical padding between major sections to maintain a premium feel.

### Don't
*   **DON'T** use 100% opaque grey borders (#CCCCCC, etc.). They look cheap and dated.
*   **DON'T** use pure black for text. Always use `on_surface` (#191c1e) to keep the Deep Navy sophistication.
*   **DON'T** crowd components. If it feels tight, double the whitespace.
*   **DON'T** use standard "Drop Shadows." If the shadow doesn't look like a soft blur of light, it's too heavy.