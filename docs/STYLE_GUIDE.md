# Style Guide

This document outlines the visual design system and style guidelines for the News Blog application.

## Table of Contents
- [Design Principles](#design-principles)
- [Color Palette](#color-palette)
- [Typography](#typography)
- [Layout & Spacing](#layout--spacing)
- [Components](#components)
- [Icons & Images](#icons--images)
- [Animations](#animations)

---

## Design Principles

### 1. Professional & Clean
- Modern, minimalist design approach
- Clean lines and clear hierarchy
- Professional appearance suitable for news content

### 2. Accessible & Inclusive
- High contrast ratios for readability
- Keyboard navigation support
- Screen reader compatibility
- Clear focus indicators

### 3. Responsive & Mobile-First
- Fluid layouts that adapt to all screen sizes
- Touch-friendly interface elements
- Performance-optimized for mobile devices

### 4. Content-Focused
- Typography optimized for reading
- Clear content hierarchy
- Minimal distractions from main content

---

## Color Palette

### Primary Colors
```scss
$primary-blue: #1976d2;     // Main brand color
$primary-dark: #1565c0;     // Hover states, active elements
$primary-light: #e3f2fd;    // Backgrounds, subtle highlights
```

### Neutral Colors
```scss
$white: #ffffff;            // Pure white backgrounds
$gray-50: #fafafa;         // Light backgrounds
$gray-100: #f5f5f5;        // Card backgrounds
$gray-300: #e0e0e0;        // Borders, dividers
$gray-500: #9e9e9e;        // Secondary text
$gray-700: #616161;        // Body text
$gray-900: #212121;        // Headlines, primary text
```

### Semantic Colors
```scss
$success: #4caf50;          // Success states
$warning: #ff9800;          // Warning states
$error: #f44336;            // Error states
$info: #2196f3;             // Informational content
```

### Usage Guidelines
- **Primary Blue**: Navigation, CTAs, links, and primary actions
- **Gray Scale**: Text hierarchy, backgrounds, and borders
- **Semantic Colors**: Status indicators and feedback

---

## Typography

### Font Families
```scss
$font-family-primary: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
$font-family-headings: 'Merriweather', Georgia, 'Times New Roman', serif;
```

### Font Scale
```scss
// Headings
$font-size-h1: 2.5rem;      // 40px - Page titles
$font-size-h2: 2rem;        // 32px - Section titles
$font-size-h3: 1.5rem;      // 24px - Subsection titles
$font-size-h4: 1.25rem;     // 20px - Component titles

// Body text
$font-size-large: 1.125rem; // 18px - Large body text
$font-size-base: 1rem;      // 16px - Default body text
$font-size-small: 0.875rem; // 14px - Small text, captions
$font-size-tiny: 0.75rem;   // 12px - Labels, metadata
```

### Font Weights
```scss
$font-weight-light: 300;
$font-weight-normal: 400;
$font-weight-medium: 500;
$font-weight-semibold: 600;
$font-weight-bold: 700;
```

### Line Heights
```scss
$line-height-tight: 1.2;    // Headlines
$line-height-normal: 1.4;   // UI text
$line-height-relaxed: 1.6;  // Body text
$line-height-loose: 1.8;    // Large blocks of text
```

### Typography Examples
```scss
// Page title
.page-title {
  font-family: $font-family-headings;
  font-size: $font-size-h1;
  font-weight: $font-weight-bold;
  line-height: $line-height-tight;
  color: $primary-blue;
}

// Article headline
.article-title {
  font-family: $font-family-headings;
  font-size: $font-size-h2;
  font-weight: $font-weight-bold;
  line-height: $line-height-tight;
  color: $gray-900;
}

// Body text
.body-text {
  font-family: $font-family-primary;
  font-size: $font-size-base;
  font-weight: $font-weight-normal;
  line-height: $line-height-relaxed;
  color: $gray-700;
}
```

---

## Layout & Spacing

### Container Widths
```scss
$container-sm: 576px;       // Small devices
$container-md: 768px;       // Medium devices
$container-lg: 992px;       // Large devices
$container-xl: 1200px;      // Extra large devices
$container-xxl: 1400px;     // Extra extra large devices
```

### Spacing Scale
```scss
$space-xs: 0.25rem;         // 4px
$space-sm: 0.5rem;          // 8px
$space-md: 1rem;            // 16px
$space-lg: 1.5rem;          // 24px
$space-xl: 2rem;            // 32px
$space-2xl: 3rem;           // 48px
$space-3xl: 4rem;           // 64px
```

### Grid System
```scss
// 12-column grid with flexbox
.container {
  max-width: $container-xl;
  margin: 0 auto;
  padding: 0 $space-md;
}

.grid {
  display: grid;
  gap: $space-lg;
  
  &.grid-auto {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  
  &.grid-2 {
    grid-template-columns: repeat(2, 1fr);
  }
  
  &.grid-3 {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### Breakpoints
```scss
$breakpoint-sm: 576px;
$breakpoint-md: 768px;
$breakpoint-lg: 992px;
$breakpoint-xl: 1200px;

// Mixins for responsive design
@mixin mobile {
  @media (max-width: #{$breakpoint-sm - 1px}) {
    @content;
  }
}

@mixin tablet {
  @media (min-width: #{$breakpoint-sm}) and (max-width: #{$breakpoint-lg - 1px}) {
    @content;
  }
}

@mixin desktop {
  @media (min-width: #{$breakpoint-lg}) {
    @content;
  }
}
```

---

## Components

### Buttons
```scss
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: $space-sm $space-md;
  border: none;
  border-radius: 6px;
  font-family: $font-family-primary;
  font-size: $font-size-base;
  font-weight: $font-weight-medium;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &.button-primary {
    background: $primary-blue;
    color: $white;
    
    &:hover {
      background: $primary-dark;
    }
  }
  
  &.button-secondary {
    background: $gray-100;
    color: $gray-700;
    
    &:hover {
      background: $gray-300;
    }
  }
  
  &.button-large {
    padding: $space-md $space-xl;
    font-size: $font-size-large;
  }
  
  &.button-small {
    padding: $space-xs $space-sm;
    font-size: $font-size-small;
  }
}
```

### Cards
```scss
.card {
  background: $white;
  border: 1px solid $gray-300;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }
  
  .card-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .card-content {
    padding: $space-md;
  }
  
  .card-title {
    margin: 0 0 $space-sm 0;
    font-size: $font-size-h4;
    font-weight: $font-weight-semibold;
    color: $gray-900;
  }
  
  .card-text {
    margin: 0;
    color: $gray-700;
    line-height: $line-height-relaxed;
  }
}
```

### Forms
```scss
.form-group {
  margin-bottom: $space-md;
}

.form-label {
  display: block;
  margin-bottom: $space-xs;
  font-size: $font-size-small;
  font-weight: $font-weight-medium;
  color: $gray-700;
}

.form-input {
  width: 100%;
  padding: $space-sm;
  border: 1px solid $gray-300;
  border-radius: 4px;
  font-size: $font-size-base;
  color: $gray-900;
  transition: border-color 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: $primary-blue;
    box-shadow: 0 0 0 2px rgba($primary-blue, 0.2);
  }
  
  &::placeholder {
    color: $gray-500;
  }
}
```

### Navigation
```scss
.navbar {
  background: $white;
  border-bottom: 1px solid $gray-300;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
  
  .navbar-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: $container-xl;
    margin: 0 auto;
    padding: $space-md;
  }
  
  .navbar-brand {
    display: flex;
    align-items: center;
    text-decoration: none;
    
    .navbar-logo {
      height: 40px;
      margin-right: $space-sm;
    }
    
    .navbar-title {
      font-size: $font-size-h3;
      font-weight: $font-weight-bold;
      color: $primary-blue;
    }
  }
  
  .navbar-nav {
    display: flex;
    gap: $space-lg;
    
    .nav-link {
      padding: $space-xs $space-sm;
      color: $gray-700;
      text-decoration: none;
      font-weight: $font-weight-medium;
      border-radius: 4px;
      transition: all 0.2s ease;
      
      &:hover,
      &.active {
        background: $primary-blue;
        color: $white;
      }
    }
  }
}
```

---

## Icons & Images

### Icon Guidelines
- Use consistent icon style (outline or filled)
- Standard sizes: 16px, 20px, 24px, 32px
- Maintain consistent stroke width
- Use semantic colors for status icons

### Image Guidelines
```scss
.image {
  max-width: 100%;
  height: auto;
  
  &.image-rounded {
    border-radius: 8px;
  }
  
  &.image-circle {
    border-radius: 50%;
  }
  
  &.image-cover {
    object-fit: cover;
  }
  
  &.image-contain {
    object-fit: contain;
  }
}

// Avatar sizes
.avatar {
  border-radius: 50%;
  
  &.avatar-sm { width: 24px; height: 24px; }
  &.avatar-md { width: 32px; height: 32px; }
  &.avatar-lg { width: 48px; height: 48px; }
  &.avatar-xl { width: 64px; height: 64px; }
}
```

---

## Animations

### Transition Timing
```scss
$transition-fast: 0.15s ease;
$transition-normal: 0.2s ease;
$transition-slow: 0.3s ease;
```

### Common Animations
```scss
// Fade in animation
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn $transition-normal;
}

// Hover effects
.hover-lift {
  transition: transform $transition-normal;
  
  &:hover {
    transform: translateY(-2px);
  }
}

.hover-scale {
  transition: transform $transition-normal;
  
  &:hover {
    transform: scale(1.02);
  }
}

// Loading animation
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.loading-spinner {
  animation: spin 1s linear infinite;
}
```

### Animation Guidelines
- Use subtle animations that enhance UX
- Keep animations fast (< 300ms) for interactions
- Provide `prefers-reduced-motion` support
- Use easing functions for natural movement

---

## Accessibility

### Focus States
```scss
.focusable {
  &:focus {
    outline: 2px solid $primary-blue;
    outline-offset: 2px;
  }
  
  &:focus:not(:focus-visible) {
    outline: none;
  }
}
```

### Color Contrast
- Ensure minimum 4.5:1 contrast ratio for normal text
- Ensure minimum 3:1 contrast ratio for large text
- Test with color blindness simulators

### Responsive Text
```scss
@mixin responsive-text {
  font-size: clamp(1rem, 2.5vw, 1.5rem);
}
```

This style guide ensures consistency across the News Blog application and provides a foundation for future design decisions.
