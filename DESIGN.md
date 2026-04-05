# Design System: Lume Dental High-End Editorial

## 1. Overview & Creative North Star

The Creative North Star for this design system is **"The Clinical Curator."** 

Unlike standard medical websites that rely on sterile, rigid grids and predictable blue boxes, this system treats oral health as a high-end lifestyle experience. It balances the precision of dentistry with the breathing room of a luxury editorial magazine. The design breaks the "template" look through **intentional asymmetry**, where text-heavy blocks are balanced by large-scale, rounded imagery that breaks the container's edge. This creates a rhythmic, flowing experience that feels personal and bespoke rather than industrial.

## 2. Colors

The palette is anchored by high-contrast neutrals and a singular, oxygenating accent. 

*   **Primary Dark (#131c15):** Our "Charcoal-Green." Used for high-impact typography and deep-canvas sections. It conveys authority and modern sophistication.
*   **Secondary Accent (#a9eaf7):** Our "Sky Blue." Used sparingly to draw the eye to critical CTAs and active states.
*   **Surface Foundation (#f8f9fb):** A clean, off-white base that provides more warmth and premium feel than a pure hex white.

### The "No-Line" Rule
To maintain a high-end editorial feel, **1px solid borders are strictly prohibited** for sectioning. Boundaries must be defined solely through background color shifts or tonal transitions. Use `surface-container-low` (#f3f4f6) sections against a `surface` (#f8f9fb) background to create structural separation.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Hierarchy is defined by "nesting" deeper tones within lighter ones:
1.  **Canvas:** `surface` (#f8f9fb)
2.  **Section Wrappers:** `surface-container-low` (#f3f4f6)
3.  **Active Cards:** `surface-container-lowest` (#ffffff)
This stacking creates a soft, natural lift that mimics the way light hits fine paper.

### Signature Textures
Main CTAs and Hero backgrounds should utilize subtle gradients rather than flat fills. Transitioning from `secondary` (#216772) to `secondary_container` (#a9eaf7) provides a "glow" effect (The "Lume" effect) that feels three-dimensional and premium.

## 3. Typography

The typography scale is designed to be "loud" in the headlines and "quiet" in the details, mirroring the confidence of a leading dental clinic.

*   **Display & Headlines (Unbounded):** This is our signature. It must be bold, wide, and high-impact. Use `display-lg` (3.5rem) for hero sections to make a definitive brand statement. The wide stance of 'Unbounded' suggests stability and modernism.
*   **Body & Titles (Manrope):** A geometric sans-serif that balances the character of the headlines with extreme readability. 
*   **Hierarchy Narrative:** Large headlines provide the "hook," while titles (`title-lg`) act as the editorial sub-headings. Body text (`body-lg`) should always have generous line-height (1.6+) to ensure the layout feels "airy."

## 4. Elevation & Depth

We eschew traditional drop shadows in favor of **Tonal Layering** and **Atmospheric Perspective.**

*   **The Layering Principle:** Depth is achieved by "stacking" surface tiers. Place a `surface-container-lowest` card on a `surface-container-low` section to create a lift without a single pixel of shadow.
*   **Ambient Shadows:** If a floating element (like a modal or a primary 'Book' button) requires a shadow, it must be an **Ambient Shadow**:
    *   Blur: 40px - 60px
    *   Opacity: 4% - 6%
    *   Color: Derived from `primary_container` (#151e17) to ensure the shadow looks like natural light occlusion, not a grey smudge.
*   **Glassmorphism:** Use `backdrop-blur` (12px - 20px) on navigation bars and floating chips. This allows the high-quality imagery to "bleed" through the UI, making the interface feel integrated with the photography.

## 5. Components

### Buttons
*   **Primary (Book an Appointment):** Pill-shaped (`rounded-full`), using `primary` (#000000) or a deep gradient. For a premium touch, the text should be `on_primary` (#ffffff) with a subtle letter-spacing of 0.05em.
*   **Secondary:** Ghost-style but using the **"Ghost Border" fallback**—a 1px border using `outline_variant` at 20% opacity.

### Cards & Lists
*   **Forbid Dividers:** Do not use horizontal lines between list items. Use vertical white space (32px - 48px) or a `surface-variant` background shift.
*   **Feature Cards:** Must use `rounded-xl` (1.5rem) to echo the friendliness of a smile. 

### Interactive "Lume" Chips
*   Used for service categories (e.g., "Cosmetic," "Implant"). These should use `secondary_container` (#a9eaf7) with a subtle `secondary` text color. When hovered, they should "glow" using a soft ambient shadow.

### Appointment Input Fields
*   Fields should not be boxes. Use a "Minimalist Tray" approach: a subtle `surface-container-high` fill with no border, becoming `surface-container-highest` on focus.

## 6. Do's and Don'ts

### Do:
*   **Use Asymmetric Padding:** Allow imagery to take up 60% of the width while text takes up 40%, creating a dynamic, editorial flow.
*   **Embrace Whitespace:** If a section feels crowded, double the padding. The brand's luxury feel is directly proportional to its empty space.
*   **Intentional Overlaps:** Let professional photography overlap two different surface tiers to "stitch" the page sections together.

### Don't:
*   **Don't use 100% Black:** Even for text, use `on_surface` (#191c1e) to keep the contrast high but the feel "soft."
*   **Don't use Standard Grids:** Avoid the "3-column service grid" if possible. Try a staggered masonry layout or a horizontal scroll with "Glassmorphism" peek-edges.
*   **Don't use Sharp Corners:** Everything from the smallest icon to the largest hero image must adhere to the `Roundedness Scale` (min 0.5rem). Sharp corners break the "Lume" (light/softness) metaphor.