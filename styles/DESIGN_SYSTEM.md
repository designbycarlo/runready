# Design System - Design by Carlo

## Overview

This design system is based on the visual design language of [designbycarlo.vercel.app](https://designbycarlo.vercel.app/), a minimalist portfolio website. The system emphasizes clean typography, warm neutral tones, and precise spacing to create sophisticated user interfaces.

## Principles

1. **Typography-First Design**: Content hierarchy established through type scale and spacing
2. **Minimalist Aesthetic**: Clean layouts with ample whitespace
3. **Warm Neutrals**: Paper-like backgrounds with subtle borders
4. **Monospace Accents**: Technical metadata labels using monospace fonts
5. **Subtle Interactions**: Smooth transitions and hover states
6. **Dark Mode Support**: Full theme switching capability

---

## 1. Typography

### Font Families

- **Primary (Sans)**: Geist Sans - Modern, geometric sans-serif for body and headings
- **Secondary (Mono)**: Geist Mono - Monospace font for labels, metadata, and technical content

### Type Scale

| Name | Size | Usage |
|------|------|-------|
| xs | 0.75rem (12px) | Monospace captions, labels |
| sm | 0.875rem (14px) | Secondary text, metadata |
| base | 1rem (16px) | Body text |
| lg | 1.125rem (18px) | Large body text |
| xl | 1.25rem (20px) | Subheadings |
| 2xl | 1.5rem (24px) | Section headings |
| 3xl | 1.875rem (30px) | Large headings |
| 4xl | 2.25rem (36px) | Display headings |
| 5xl | 3rem (48px) | Hero text |
| 6xl | 3.75rem (60px) | Large hero text |

### Font Weights

- **Normal**: 400 - Body text
- **Medium**: 500 - Emphasized text
- **Semibold**: 600 - Subheadings
- **Bold**: 700 - Headings

### Letter Spacing

- **Tightest**: -0.07em - Large display headings (7xl, 8xl)
- **Tighter**: -0.05em - Hero headings
- **Tight**: -0.025em - Section headings
- **Normal**: 0em - Body text
- **Wide**: 0.05em - Elevated text
- **Wider**: 0.1em - Monospace labels

### Line Heights

- **None**: 1 - Display headings
- **Tight**: 1.25 - Large headings
- **Snug**: 1.375 - Subheadings
- **Normal**: 1.5 - Body text
- **Relaxed**: 1.625 - Long-form content

---

## 2. Color Palette

### Neutrals

```css
--color-black: #000000
--color-white: #ffffff
--text-primary: #0a0a0a (near black)
--text-secondary: #86807a (muted gray)
--text-tertiary: #a8a39e (light muted)
--text-inverse: #ffffff
```

### Backgrounds

```css
--color-paper: #f5f3ed (warm off-white)
--color-paper-dark: #edeae3 (warm off-white variant)
--color-black-solid: #000000
```

### Dark Mode Backgrounds

```css
--color-paper: #000000
--color-paper-dark: #0a0a0a
```

### Accent Colors

```css
--color-highlight-yellow: #fff4a3
--color-highlight-yellow-dark: #fff4a3
```

Usage: Tag highlighting, callouts, emphasis

### Borders

```css
--color-border: #e1dfd7 (light border)
--color-border-dark: #82807a (dark border)
--color-border-light: #f0efe9 (very light border)
```

### Interactive States

```css
--color-hover: #0a0a0a (text hover in light mode)
--color-hover-inverse: #f5f3ed (text hover in dark mode)
```

---

## 3. Spacing

### 8-Point Grid System

```css
--space-1: 0.25rem (4px)
--space-2: 0.5rem (8px)
--space-3: 0.75rem (12px)
--space-4: 1rem (16px)
--space-5: 1.25rem (20px)
--space-6: 1.5rem (24px)
--space-8: 2rem (32px)
--space-10: 2.5rem (40px)
--space-12: 3rem (48px)
--space-16: 4rem (64px)
--space-20: 5rem (80px)
--space-24: 6rem (96px)
--space-32: 8rem (128px)
--space-40: 10rem (160px)
```

---

## 4. Borders & Shape

### Border Widths

```css
--border-width-thin: 1px
--border-width-medium: 2px
```

All borders use 1px height for subtle separation.

### Border Radius

```css
--radius-none: 0
--radius-sm: 0.25rem
--radius-md: 0.375rem
--radius-lg: 0.5rem
```

Design Philosophy: Minimal rounding, mostly sharp edges

---

## 5. Transitions & Animation

### Timing Functions

```css
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1)
--transition-base: 200ms cubic-bezier(0.4, 0, 0.2, 1)
--transition-slow: 300ms cubic-bezier(0.4, 0, 0.2, 1)
```

**Easing**: Custom cubic-bezier for smooth, natural motion

### Common Transition Properties

- **Colors**: `transition-colors` (150ms)
- **Opacity**: `transition-opacity` (150ms-300ms)
- **All**: `transition-all` (150ms)

---

## 6. Layout

### Max Widths

- **Content Container**: `640px` - Optimal reading width
- **Full Width**: Fluid with responsive padding

### Breakpoints

```css
sm: 640px  - Small tablets
md: 768px  - Tablets
lg: 1024px - Small laptops
xl: 1280px - Desktops
```

### Responsive Padding

- **Mobile**: `px-8` (2rem)
- **Tablet+**: `md:px-0` (no horizontal padding)
- **Container**: Centered with auto margins

---

## 7. Components

### Section Structure

```tsx
<section className="pt-0 pb-2 space-y-8">
  {/* Section content */}
</section>
```

### Navigation

```tsx
<nav className="mb-20 lg:mb-32 py-6 border-b border-border">
  {/* Navigation items */}
</nav>
```

**Spacing**: Large bottom margin creates visual separation

### Labels & Tags

```tsx
<span className="mono-caption bg-highlight-yellow text-black px-2 py-0.5">
  About
</span>

<p className="mono-caption-muted">Front End Engineer</p>
```

**Usage**: Section labels, metadata, category tags

### Headings

```tsx
{/* Hero heading */}
<h1 className="heading-xl">
  Building <span className="text-muted font-normal">intuitive experiences</span>
</h1>

{/* Section heading */}
<h2 className="heading-lg">Selected Experience</h2>

{/* Subsection heading */}
<h3 className="heading-md">Senior UI UX Designer</h3>
```

### Lists with Numbering

```tsx
<ul className="space-y-2 text-muted text-sm">
  <li className="flex gap-3">
    <span className="mono-caption">01</span>
    <span>Redesign and updates of scalable web applications.</span>
  </li>
</ul>
```

### Dividers

```tsx
<div className="border-t border-border dark:border-border-dark pt-6">
  {/* Content after divider */}
</div>
```

### Cards/Content Blocks

```tsx
<div className="space-y-2">
  <p className="mono-caption text-muted uppercase tracking-wider">Contact</p>
  <div className="text-sm font-medium space-y-1.5">
    <a href="mailto:email@example.com" className="hover:text-muted transition-colors">
      email@example.com
    </a>
  </div>
</div>
```

---

## 8. Utility Classes Reference

### Typography Classes

| Class | Purpose |
|-------|---------|
| `.mono-caption` | Monospace uppercase labels |
| `.mono-caption-muted` | Secondary monospace labels |
| `.heading-xl` | 5xl/6xl display headings |
| `.heading-lg` | 3xl section headings |
| `.heading-md` | 2xl subsection headings |
| `.body-text` | Standard body copy |
| `.body-text-muted` | Secondary text |

### Color Classes

| Class | Purpose |
|-------|---------|
| `bg-paper` | Primary background |
| `bg-highlight-yellow` | Accent/tag background |
| `text-black` | Primary text |
| `text-white` | Inverse text |
| `text-muted` | Secondary text |
| `border-border` | Standard border |

### Spacing Classes

Uses Tailwind default scale (8-point grid)

---

## 9. Dark Mode

### Implementation

```tsx
<html className="dark">
  {/* Dark mode content */}
</html>
```

**Note**: Dark mode is class-based. Toggle the `dark` class on the `<html>` element.

### Key Differences in Dark Mode

- Background: `#000000` (pure black)
- Borders: Darker muted gray (`#82807a`)
- Text: Adjusted for contrast
- Highlight yellow: Same (`#fff4a3`)

---

## 10. Best Practices

### Content Hierarchy

1. Use Mono Captions for section labels and metadata
2. Apply heading classes for visual hierarchy
3. Use muted text for secondary information
4. Highlight important elements with accent colors

### Spacing

1. Follow the 8-point grid system
2. Use consistent vertical rhythm with `space-y-*`
3. Add borders for visual separation
4. Maintain generous whitespace

### Accessibility

1. Ensure sufficient color contrast (WCAG AA minimum)
2. Use semantic HTML elements
3. Provide focus states for interactive elements
4. Maintain readable font sizes (minimum 14px for body)

### Performance

1. Use system font stack fallbacks
2. Optimize font loading with `font-display: swap`
3. Use CSS variables for theming
4. Minimize custom CSS, leverage Tailwind utilities

---

## 11. Implementation

### Setup

1. Import the design system CSS in your layout:
```tsx
import './styles/design-system.css';
```

2. Configure Tailwind for dark mode:
```js
// tailwind.config.js
module.exports = {
  darkMode: 'class',
  // ... other config
}
```

3. Set base styles in your CSS:
```css
@import "tailwindcss";
@import "./design-system.css";
```

### Usage Examples

```tsx
{/* Navigation */}
<nav className="mb-20 lg:mb-32 py-6 border-b border-border">
  <a href="/" className="heading-lg hover:opacity-70 transition-opacity">
    Site Name
  </a>
</nav>

{/* Section with label */}
<section className="space-y-8">
  <div className="flex items-center gap-2">
    <span className="mono-caption bg-highlight-yellow px-2 py-0.5">Label</span>
    <p className="mono-caption-muted">Secondary text</p>
  </div>
  <h1 className="heading-xl">
    Main <span className="text-muted font-normal">heading</span>
  </h1>
</section>

{/* Content with divider */}
<div className="border-t border-border dark:border-border-dark pt-6 space-y-6">
  <h2 className="heading-lg">Section Title</h2>
  <p className="body-text">Content goes here...</p>
</div>
```

---

## 12. Component Library

See `/components/examples/` for example implementations:

- `Label.tsx` - Monospace caption component
- `Heading.tsx` - Heading components (XL, LG, MD)
- `Divider.tsx` - Horizontal rule with spacing
- `Section.tsx` - Reusable section wrapper
- `Nav.tsx` - Navigation component template

---

## Resources

- **Live Site**: https://designbycarlo.vercel.app/
- **Geist Font**: https://vercel.com/font
- **Tailwind CSS**: https://tailwindcss.com/

---

*Last Updated: 2026*
*Version: 1.0.0*