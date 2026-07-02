# Design System - designbycarlo.github.io

## Overview

This design system replicates the visual design language of [designbycarlo.github.io](https://designbycarlo.github.io/), a minimalist portfolio built with Tailwind CSS v4. The system uses **Zinc** color palette, **Geist** font family, and modern design patterns with dark mode support.

## Principles

1. **Zinc Gradient**: Warm neutral palette from zinc-50 to zinc-950
2. **Geist Typography**: Clean, modern sans-serif with system fallbacks
3. **Rounded Corners**: Generous border radius (rounded-xl, rounded-2xl)
4. **Subtle Borders**: Light borders with transparency (border-zinc-200/80)
5. **Smooth Transitions**: 300ms duration transitions for all interactions
6. **Dark Mode**: Seamless class-based dark mode switching
7. **Card-Based Layout**: Elevated cards with shadows and hover effects

---

## 1. Typography

### Font Family

**Primary**: Geist (Loaded from Google Fonts)
```css
--font-sans: 'Geist', ui-sans-serif, system-ui, sans-serif, 
             'Apple Color Emoji', 'Segoe UI Emoji', 
             'Segoe UI Symbol', 'Noto Color Emoji';
```

**Fallback Stack**: Ensures Geist renders consistently across:
- **macOS/iOS**: System UI → Apple Color Emoji
- **Windows**: System UI → Segoe UI Emoji
- **Android**: System UI → Noto Color Emoji
- **Linux**: System UI → Liberation Mono fallbacks

**Monospace**: System default monospace stack (no Geist Mono)
```css
--font-mono: ui-monospace, SFMono-Regular, Roboto Mono, 
             Menlo, Monaco, Liberation Mono, DejaVu Sans Mono, 
             Courier New, monospace;
```

### Type Scale

| Name | Size | Weight | Usage |
|------|------|--------|-------|
| xs | 0.75rem | medium | Small labels |
| sm | 0.875rem | normal | Secondary text |
| base | 1rem | normal | Body text |
| lg | 1.125rem | normal | Large body |
| xl | 1.25rem | bold | Section headings |
| 2xl | 1.5rem | bold | Large headings |
| 3xl | 1.875rem | bold | Display headings |
| 4xl | 2.25rem | bold | Hero text (mobile) |
| 5xl | 3rem | bold | Hero text (desktop) |

### Font Weights

- **Normal**: 400 - Body text
- **Medium**: 500 - Emphasized text
- **Semibold**: 600 - Labels
- **Bold**: 700 - Headings

### Letter Spacing

- **Tightest**: -0.07em
- **Tighter/Tight**: -0.025em - Headings
- **Normal**: 0em - Body text
- **Wide**: 0.05em
- **Widest**: 0.1em - Uppercase labels

### Line Heights

- **None**: 1 - Display headings
- **Tight**: 1.25 - Headings
- **Snug**: 1.375 - Subheadings
- **Normal**: 1.5 - Body text
- **Relaxed**: 1.625 - Long-form content

---

## 2. Color Palette - Zinc Scale

### Light Mode

```css
--zinc-50:  #fafafa  /* Background primary */
--zinc-100: #f4f4f5  /* Background secondary */
--zinc-200: #e4e4e7  /* Borders primary */
--zinc-300: #d4d4d8  /* Borders secondary */
--zinc-400: #a1a1aa  /* Tertiary text, muted labels */
--zinc-500: #71717a  /* Secondary text */
--zinc-600: #52525b  /* Hover states */
--zinc-800: #27272a  /* Interactive hover */
--zinc-900: #18181b  /* Text primary */
--zinc-950: #09090b  /* Deep background */
```

### Dark Mode

```css
--zinc-50:  #09090b  /* Background primary */
--zinc-100: #18181b  /* Background secondary */
--zinc-200: #27272a  /* Borders primary */
--zinc-300: #3f3f46  /* Borders secondary */
--zinc-400: #52525b  /* Tertiary text */
--zinc-500: #71717a  /* Secondary text */
--zinc-600: #a1a1aa  /* Muted text */
--zinc-800: #fafafa  /* Text primary */
--zinc-900: #f4f4f5  /* Hover text */
--zinc-950: #ffffff  /* Inverse text */
```

### Semantic Mappings

```css
/* Light Mode */
--text-primary:   #18181b;
--text-secondary: #71717a;
--text-tertiary:  #a1a1aa;

--bg-primary:   #fafafa;
--bg-secondary: #ffffff;
--bg-tertiary:  #f4f4f5;

--border-primary:   #e4e4e7;
--border-secondary: #d4d4d8;
--border-tertiary:  #a1a1aa;
```

### Dark Mode Mappings

```css
--text-primary:   #fafafa;
--text-secondary: #a1a1aa;
--text-tertiary:  #71717a;

--bg-primary:   #09090b;
--bg-secondary: #27272a;
--bg-tertiary:  #18181b;

--border-primary:   #27272a;
--border-secondary: #3f3f46;
--border-tertiary:  #52525b;
```

### Special Colors

```css
--color-highlight-yellow: #fff4a3  /* Accent highlights */
--selection-bg: zinc-200 (light) / zinc-800 (dark)
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

### Border Radius

```css
--radius-none: 0
--radius-sm: 0.25rem (4px)
--radius-md: 0.375rem (6px)
--radius-lg: 0.5rem (8px)
--radius-xl: 0.75rem (12px)
--radius-2xl: 1rem (16px)
```

**Common Usage**:
- Cards: `rounded-2xl` (1rem)
- Buttons: `rounded-lg` (0.75rem)
- Badges: `rounded-full` (pill shape)
- Small elements: `rounded-md` (0.5rem)

### Shadows

```css
--shadow-xs: 0 1px 2px 0 rgb(0 0 0 / 0.05)
--shadow-sm: 0 1px 3px 0 rgb(0 0 0 / 0.1)
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1)
```

Hover states: `hover:shadow-md` (cards), `shadow-xs` (default)

---

## 5. Transitions & Animation

### Timing Functions

```css
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1)
--transition-base: 200ms cubic-bezier(0.4, 0, 0.2, 1)
--transition-slow: 300ms cubic-bezier(0.4, 0, 0.2, 1)
```

**Standard**: 300ms for all interactive elements

### Common Patterns

```css
/* Colors */
transition-colors duration-300

/* Opacity */
transition-opacity duration-300

/* Transform */
transition-transform duration-300

/* All properties */
transition-all duration-300
```

---

## 6. Layout

### Max Widths

- **Container**: `4xl` (896px) - Primary content width
- **Card**: Fluid, typically 50% on desktop in horizontal scroll

### Breakpoints

```css
sm: 640px  - Small tablets
md: 768px  - Tablets  
lg: 1024px - Laptops
xl: 1280px - Desktops
```

### Responsive Padding

- **Mobile**: `px-6` (1.5rem)
- **Tablet+**: `sm:px-6` (consistent)
- **Container**: Centered with auto margins

### Section Spacing

```css
/* Vertical spacing between sections */
space-y-24 (6rem / 96px)
```

---

## 7. Components

### Navigation

```tsx
<header className="sticky top-0 z-50 backdrop-blur-md bg-zinc-50/80 border-b border-zinc-200/80 dark:bg-zinc-950/80 dark:border-zinc-800/80">
  <div className="max-w-4xl mx-auto px-6 py-4 sm:py-3 flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-between gap-4">
    {/* Logo */}
    <a href="#" className="text-xl font-semibold tracking-tight text-zinc-900 hover:text-zinc-600 transition-colors">
      designbycarlo
    </a>
    
    {/* Nav Links */}
    <nav className="flex items-center gap-6 text-sm font-medium text-zinc-600">
      <a href="#section" className="px-3 py-2 hover:text-zinc-900 dark:hover:text-white transition-colors">
        Link
      </a>
    </nav>
  </div>
</header>
```

**Features**: Sticky header, backdrop blur, responsive layout

### Section Headers

```tsx
<div className="space-y-2 border-b border-zinc-200 dark:border-zinc-800 pb-4">
  <h2 className="mono-caption text-zinc-400">Label</h2>
  <h3 className="heading-lg">Section Title</h3>
</div>
```

### Hero Section

```tsx
<section className="space-y-6 pt-6">
  {/* Status Badge */}
  <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-zinc-600 bg-zinc-100 rounded-full border border-zinc-200/60">
    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
    Available status
  </div>
  
  {/* Main Heading */}
  <h1 className="heading-xl max-w-2xl leading-tight">
    Building refined digital interfaces
  </h1>
  
  {/* Subheading */}
  <p className="text-base sm:text-lg text-zinc-600 max-w-xl leading-relaxed">
    Description text goes here...
  </p>
  
  {/* CTAs */}
  <div className="pt-2 flex items-center gap-4">
    <a href="#" className="btn-primary">Primary Action</a>
    <a href="#" className="btn-secondary">Secondary →</a>
  </div>
</section>
```

### Buttons

```tsx
/* Primary Button */
<a href="#" className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-zinc-950 hover:bg-zinc-800 rounded-lg shadow-sm transition-all">
  Action
</a>

/* Secondary Button */
<a href="#" className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 rounded-lg transition-all">
  Action →
</a>

/* Dark Mode Variants */
.dark:bg-zinc-100 .dark:text-zinc-950 .dark:hover:bg-zinc-300
```

### Cards

```tsx
<div className="group p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 shadow-xs hover:shadow-md hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300">
  {/* Card content */}
</div>
```

**Features**: White background, rounded-2xl, subtle border, hover shadow

### Project Cards

```tsx
<div className="group relative p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 shadow-xs hover:shadow-md hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between shrink-0 w-[85%] sm:w-[calc(50%-12px)] snap-start">
  <div>
    {/* Number Badge */}
    <a href="#" className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-zinc-700 dark:text-zinc-300 font-mono text-sm mb-4 group-hover:bg-zinc-950 group-hover:text-white transition-colors duration-300">
      01
    </a>
    
    {/* Title */}
    <a href="#" className="font-semibold text-zinc-900 dark:text-white text-base hover:underline">
      Project Title
    </a>
    
    {/* Description */}
    <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
      Project description goes here...
    </p>
  </div>
  
  {/* Footer */}
  <div className="mt-6 pt-4 border-t border-zinc-100/80 dark:border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
    <span>Tech stack</span>
    <a href="#" className="text-zinc-900 dark:text-zinc-100 font-medium group-hover:translate-x-1 transition-transform">
      View Repository ↗
    </a>
  </div>
</div>
```

### Skills/Tags

```tsx
<div className="flex flex-wrap gap-2">
  <span className="px-3 py-1.5 text-sm bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg text-zinc-700 dark:text-zinc-300 font-medium shadow-xs">
    Skill Name
  </span>
</div>
```

### Contact Links

```tsx
<div className="flex flex-col sm:flex-row gap-4 text-sm font-medium">
  <a href="#" className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-100 rounded-xl transition-colors">
    Contact method
  </a>
</div>
```

### Dividers

```tsx
<div className="border-b border-zinc-200 dark:border-zinc-800 pb-4">
  {/* Content */}
</div>
```

---

## 8. Utility Classes Reference

### Typography Classes

| Class | Purpose |
|-------|---------|
| `.mono-caption` | Uppercase labels, zinc-400 |
| `.mono-caption-muted` | Subtle labels, zinc-500 |
| `.heading-xl` | 4xl/5xl bold headings |
| `.heading-lg` | xl bold headings |
| `.heading-md` | base semibold headings |
| `.body-text` | Standard body copy |
| `.body-text-muted` | Secondary text |

### Color Classes (Tailwind)

| Class | Purpose |
|-------|---------|
| `bg-zinc-50` | Primary background |
| `bg-white` | Card backgrounds |
| `bg-zinc-100` | Secondary backgrounds |
| `text-zinc-900` | Primary text |
| `text-zinc-600` | Secondary text |
| `text-zinc-400` | Tertiary/muted text |
| `border-zinc-200` | Primary borders |
| `border-white/80` | Transparent borders |

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

### Theme Toggle Logic

```javascript
// Check system preference or localStorage
const theme = localStorage.getItem('color-theme') || 
              (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

if (theme === 'dark') {
  document.documentElement.classList.add('dark');
}

// Toggle function
function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('color-theme', isDark ? 'dark' : 'light');
}
```

### Key Differences in Dark Mode

- Backgrounds: zinc-950, zinc-900, zinc-800
- Borders: zinc-800, zinc-700
- Text: zinc-50, zinc-100, zinc-400
- Cards: zinc-900 background
- Selection: zinc-800 background

---

## 10. Best Practices

### Content Hierarchy

1. Use `.mono-caption` for section labels
2. Apply heading classes for visual hierarchy
3. Use zinc-600 for secondary text
4. Highlight CTAs with primary button styles

### Spacing

1. Follow 8-point grid system
2. Use `space-y-*` for vertical rhythm
3. Generous section spacing: `space-y-24`
4. Card padding: `p-6` (1.5rem)

### Cards & Elevation

1. White backgrounds with subtle borders
2. Rounded corners: `rounded-2xl` for cards
3. Hover: `shadow-md` elevation increase
4. Transition: `duration-300` for smooth effects

### Accessibility

1. Ensure zinc contrast ratios meet WCAG AA
2. Use semantic HTML elements
3. Provide focus states for interactive elements
4. Minimum 14px font size for body text

### Performance

1. Geist font preconnect and preload
2. `font-display: swap` for fast rendering
3. CSS variables for theming
4. `backdrop-blur` only on sticky headers

---

## 11. Geist Font Cross-Platform Setup

### Google Fonts Import

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap" rel="stylesheet">
```

### Next.js Font Configuration

```typescript
import { Geist } from 'next/font/google';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});
```

### CSS Font Stack

```css
--font-sans: 'Geist', ui-sans-serif, system-ui, sans-serif,
             'Apple Color Emoji', 'Segoe UI Emoji',
             'Segoe UI Symbol', 'Noto Color Emoji';
```

### Platform-Specific Fallbacks

| Platform | Primary Fallback | Emoji Support |
|----------|-----------------|---------------|
| iOS/macOS | system-ui | Apple Color Emoji |
| Windows | system-ui | Segoe UI Emoji |
| Android | system-ui | Noto Color Emoji |
| Linux | system-ui | Liberation Mono |

### Critical Settings

1. **preload: true** - Load font immediately
2. **display: swap** - Show text immediately with fallback
3. **font-feature-settings** - Enable OpenType features
4. **subsets: ["latin"]** - Minimal character set

---

## 12. Implementation

### Setup

1. Import the design system CSS:
```tsx
import './styles/design-system.css';
```

2. Configure Tailwind (already has zinc colors):
```js
// tailwind.config.js - already configured
```

3. Load Geist font in layout:
```tsx
import { Geist } from 'next/font/google';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});
```

### Usage Examples

```tsx
{/* Navigation */}
<header className="sticky top-0 z-50 backdrop-blur-md bg-zinc-50/80 border-b border-zinc-200/80">
  <nav className="max-w-4xl mx-auto px-6 py-4">
    <a href="#" className="text-xl font-semibold tracking-tight text-zinc-900">
      Logo
    </a>
  </nav>
</header>

{/* Hero Section */}
<section className="max-w-4xl mx-auto px-6 py-24 space-y-6">
  <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-zinc-600 bg-zinc-100 rounded-full border border-zinc-200">
    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
    Available for work
  </div>
  <h1 className="heading-xl max-w-2xl">
    Building refined digital interfaces
  </h1>
  <p className="text-lg text-zinc-600 max-w-xl leading-relaxed">
    Description text here...
  </p>
</section>

{/* Card */}
<div className="p-6 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200/80 shadow-xs hover:shadow-md transition-all duration-300">
  <h3 className="heading-md">Card Title</h3>
  <p className="text-zinc-600">Card content</p>
</div>
```

---

## 13. Component Library

### Available Components

See `/components/ui/` for implementations:
- **Label** - Section labels with muted/default variants
- **Heading** - Semantic headings (xl/lg/md)
- **Divider** - Border separators with spacing

---

## Resources

- **Live Site**: https://designbycarlo.github.io/
- **Geist Font**: https://vercel.com/font
- **Tailwind CSS v4**: https://tailwindcss.com/
- **Zinc Palette**: https://ui.shadcn.com/colors/zinc

---

*Last Updated: 2026*
*Version: 2.0.0*
*Based on: designbycarlo.github.io*