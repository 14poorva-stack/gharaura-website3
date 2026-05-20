---
name: Luminous Stillness
colors:
  surface: '#faf9f6'
  surface-dim: '#dbdad7'
  surface-bright: '#faf9f6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f1'
  surface-container: '#efeeeb'
  surface-container-high: '#e9e8e5'
  surface-container-highest: '#e3e2e0'
  on-surface: '#1a1c1a'
  on-surface-variant: '#4c463f'
  inverse-surface: '#2f312f'
  inverse-on-surface: '#f2f1ee'
  outline: '#7d766e'
  outline-variant: '#cfc5bb'
  surface-tint: '#665d52'
  primary: '#665d52'
  on-primary: '#ffffff'
  primary-container: '#a69b8f'
  on-primary-container: '#3a332a'
  inverse-primary: '#d1c5b8'
  secondary: '#675d52'
  on-secondary: '#ffffff'
  secondary-container: '#ecddd0'
  on-secondary-container: '#6b6156'
  tertiary: '#625e54'
  on-tertiary: '#ffffff'
  tertiary-container: '#a29c90'
  on-tertiary-container: '#37342b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ede0d3'
  primary-fixed-dim: '#d1c5b8'
  on-primary-fixed: '#211b12'
  on-primary-fixed-variant: '#4e453c'
  secondary-fixed: '#efe0d3'
  secondary-fixed-dim: '#d2c4b7'
  on-secondary-fixed: '#211a12'
  on-secondary-fixed-variant: '#4f453c'
  tertiary-fixed: '#e9e2d5'
  tertiary-fixed-dim: '#ccc6b9'
  on-tertiary-fixed: '#1e1b13'
  on-tertiary-fixed-variant: '#4a463d'
  background: '#faf9f6'
  on-background: '#1a1c1a'
  surface-variant: '#e3e2e0'
  ivory-base: '#FAF9F6'
  sand-surface: '#E5DED1'
  taupe-detail: '#A69B8F'
  earth-ink: '#322C28'
typography:
  display-lg:
    fontFamily: EB Garamond
    fontSize: 84px
    fontWeight: '400'
    lineHeight: 92px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: EB Garamond
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 52px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: EB Garamond
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 48px
  headline-sm:
    fontFamily: EB Garamond
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 36px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 32px
    letterSpacing: 0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 28px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 32px
  margin-desktop: 80px
  margin-mobile: 24px
  base-unit: 8px
  section-gap-md: 64px
  section-gap-lg: 128px
---

## Brand & Style

This design system is built upon the intersection of Scandinavian functionality and Japanese rustic minimalism (Japandi). It targets an ultra-high-net-worth audience that values "quiet luxury"—wealth that does not need to shout. The aesthetic is curated, intellectual, and timeless, mirroring the experience of paging through a premium architectural monograph.

The visual style is **Minimalist** with a focus on tactile refinement. It prioritizes "Ma" (negative space), allowing high-resolution photography of textures and materials to serve as the primary visual driver. Interactions should feel intentional and decelerated, utilizing subtle fade-ins to maintain a sense of calm and composure.

## Colors

The palette is a sophisticated study in warm neutrals. Instead of harsh blacks or clinical whites, the design system utilizes **Ivory Base** (#FAF9F6) for backgrounds to create a softer, more inviting atmosphere. 

**Earth Ink** (#322C28) replaces pure black for all text to maintain a high-contrast yet organic feel. **Taupe** and **Sand** are reserved for secondary elements and subtle structural dividers. There are no vibrant "call-to-action" colors; focus is directed through scale and composition rather than chromatic intensity.

## Typography

The typography system relies on a sharp contrast between the classical elegance of **EB Garamond** and the modern precision of **Inter**. 

Headlines are set with significant scale. The `display-lg` role is intended for hero sections and editorial openers, using slight negative letter-spacing to mimic high-end print layouts. Body text is prioritized for legibility with generous line heights (`body-lg` at 32px) to ensure the reading experience feels unhurried. Small labels use uppercase Inter with wide tracking to denote technical details or categories without distracting from the editorial flow.

## Layout & Spacing

The design system utilizes a **Fixed Grid** layout to maintain the rigid structure of an architecture magazine. On desktop, content is contained within a 1440px max-width, framed by expansive 80px outer margins.

The spacing rhythm is "airy," using an 8px base unit but frequently jumping to larger increments (64px, 128px) to separate sections. Vertical rhythm is just as important as horizontal; large gaps between blocks of content are encouraged to reduce cognitive load and emphasize the importance of every individual piece of furniture or design detail shown.

## Elevation & Depth

To maintain the "quiet luxury" ethos, this design system avoids traditional drop shadows and heavy elevation. Depth is conveyed through **Tonal Layers** and **Low-contrast outlines**.

Surfaces are distinguished by subtle shifts in background color—for example, moving from an Ivory base to a Sand surface. When a boundary is required, a 0.5px or 1px "Hairline" divider in Taupe (#A69B8F) is preferred over a shadow. This creates a "flat-physical" feel, as if layers of expensive paper are stacked upon one another.

## Shapes

The shape language is **Soft** but disciplined. A subtle 0.25rem (4px) corner radius is applied to most UI containers and images. This is enough to remove the "sharpness" of digital interfaces, making them feel more organic and handcrafted, without losing the structured, architectural feel of the layout. Large structural containers should remain sharp (0px) to anchor the design, while interactive elements like buttons and cards use the soft radius.

## Components

### Buttons
Buttons are understated. The primary action uses a ghost-style border or a solid "Earth Ink" background with ivory text. There are no heavy gradients or "squishy" effects. Hover states should involve a simple, slow opacity shift or a subtle fill color change.

### Dividers
Thin, 1px horizontal and vertical lines (Hairlines) are a core component. They should be used to separate editorial sections or to frame product specs, mimicking the layout of an architectural blueprint.

### Cards & Imagery
Cards have no borders or shadows. They rely on the image within to provide the shape. Typography is usually placed below the image in a "Caption" style rather than overlaid.

### Input Fields
Inputs are minimal underlines or simple boxes with no background fill. The focus state is indicated by the underline thickening slightly or darkening, maintaining a "pen-on-paper" aesthetic.

### Navigation
The navigation should be sparse. Use a centered logo with wide-spaced menu items. Mobile navigation should use a full-screen overlay with large Garamond links and a soft ivory backdrop.