# Security Badges - Visual Reference Guide
## Quick Visual Overview

## 🎨 Desktop View (>768px)

```
═══════════════════════════════════════════════════════════════
                    United Auto Lease
───────────────────────────────────────────────────────────────

                    [👤 Large Icon]

            Personal Credit Application
    
    Complete the form below to apply for auto leasing.
        All information is secure and confidential.

    ┌──────────────┐  ┌──────────────┐  ┌──────────────┐
    │ 🔒           │  │ 🛡️           │  │ 👤           │
    │ 256-Bit SSL  │  │ Secure       │  │ Privacy      │
    │ Encrypted    │  │ Processing   │  │ Protected    │
    └──────────────┘  └──────────────┘  └──────────────┘
           ↑                 ↑                  ↑
       NEW BADGES - Glassmorphic pill design


    [Personal]     [Business]     [Joint]
    ─────────────────────────────────────
         Application Type Selection

═══════════════════════════════════════════════════════════════
```

**Spacing**:
- Badges margin-top: 2rem from description
- Gap between badges: 1.5rem
- Padding per badge: 0.75rem × 1.25rem

**Colors**:
- Background: `rgba(255, 255, 255, 0.15)` (semi-transparent)
- Border: `rgba(255, 255, 255, 0.3)`
- Icons: `#00d4ff` (cyan)
- Text: `white`

---

## 📱 Tablet View (768px)

```
═══════════════════════════════════════════════════
              United Auto Lease
───────────────────────────────────────────────────

              [👤 Medium Icon]

        Personal Credit Application
    
    Complete the form below to apply for 
      auto leasing. All information is
          secure and confidential.

   ┌───────────┐  ┌───────────┐  ┌───────────┐
   │ 🔒        │  │ 🛡️        │  │ 👤        │
   │ 256-Bit   │  │ Secure    │  │ Privacy   │
   │ SSL       │  │ Process   │  │ Protected │
   └───────────┘  └───────────┘  └───────────┘
         ↑              ↑              ↑
    Slightly smaller but still horizontal


   [Personal]  [Business]  [Joint]
   ──────────────────────────────

═══════════════════════════════════════════════════
```

**Adjustments**:
- Gap: 1rem (reduced from 1.5rem)
- Padding: 0.6rem × 1rem
- Font size: 0.85rem
- Icon size: 1.1rem

---

## 📱 Mobile View (<480px)

```
════════════════════════════════
      United Auto Lease
────────────────────────────────

       [👤 Small Icon]

   Personal Credit
      Application

   Complete the form below
   to apply for auto leasing.
   All information is secure
        and confidential.

   ┌──────────────────────┐
   │ 🔒                   │
   │ 256-Bit SSL          │
   │ Encrypted            │
   └──────────────────────┘
            ↑
   ┌──────────────────────┐
   │ 🛡️                   │
   │ Secure Processing    │
   └──────────────────────┘
            ↑
   ┌──────────────────────┐
   │ 👤                   │
   │ Privacy Protected    │
   └──────────────────────┘
      Stacked Vertically
      Max-width: 280px


   ┌────────────────────┐
   │     Personal       │
   └────────────────────┘
   ┌────────────────────┐
   │     Business       │
   └────────────────────┘
   ┌────────────────────┐
   │      Joint         │
   └────────────────────┘

════════════════════════════════
```

**Adjustments**:
- Stack: flex-direction column
- Gap: 0.75rem
- Padding: 0.5rem × 0.875rem
- Font size: 0.8rem
- Full width with 280px max
- Centered alignment

---

## 🎨 Badge Styling Details

### Normal State
```
┌─────────────────────────────────┐
│                                 │
│  🔒   256-Bit SSL Encrypted    │
│                                 │
└─────────────────────────────────┘

Background: rgba(255, 255, 255, 0.15)
Border: 2px solid rgba(255, 255, 255, 0.3)
Border-radius: 50px
Backdrop-filter: blur(10px)
```

### Hover State
```
┌─────────────────────────────────┐
│                                 │  ↑ Lifts 2px
│  🔒   256-Bit SSL Encrypted    │
│                                 │
└─────────────────────────────────┘
   ╰───────────────────────────╯
      Cyan glow shadow

Background: rgba(255, 255, 255, 0.25) ← Brighter
Border: 2px solid #00d4ff ← Cyan
Transform: translateY(-2px) ← Lift
Shadow: 0 4px 15px rgba(0, 212, 255, 0.3)
```

---

## 🔢 Size Specifications

### Desktop (>768px)
```
Badge Height: ~43px
Badge Width: Auto (content-based)
Icon Size: 1.25rem (20px)
Text Size: 0.9rem (14.4px)
Padding: 0.75rem × 1.25rem (12px × 20px)
Gap between badges: 1.5rem (24px)
```

### Tablet (768px)
```
Badge Height: ~38px
Badge Width: Auto (content-based)
Icon Size: 1.1rem (17.6px)
Text Size: 0.85rem (13.6px)
Padding: 0.6rem × 1rem (9.6px × 16px)
Gap between badges: 1rem (16px)
```

### Mobile (<480px)
```
Badge Height: ~34px
Badge Width: 100% (max 280px)
Icon Size: 1.25rem (20px)
Text Size: 0.8rem (12.8px)
Padding: 0.5rem × 0.875rem (8px × 14px)
Gap between badges: 0.75rem (12px)
```

---

## 🎭 Animation Timing

### Hover Transition
```
Property: all
Duration: 0.3s
Easing: ease

Transforms:
- Background opacity: 0.15 → 0.25
- Border: transparent → cyan
- Position: 0 → -2px (up)
- Shadow: none → cyan glow
```

### Visual Flow
```
Rest State → Mouse Over → Hover State
   (0s)         (0.15s)        (0.3s)

[Badge]  →   [Badge↗]   →   [Badge↗✨]
           Starting lift    Full effect
```

---

## 🌈 Color Palette

### Badge Colors
```css
/* Background */
Normal: rgba(255, 255, 255, 0.15)  /* 15% white */
Hover:  rgba(255, 255, 255, 0.25)  /* 25% white */

/* Border */
Normal: rgba(255, 255, 255, 0.3)   /* 30% white */
Hover:  #00d4ff                     /* Cyan (brand) */

/* Icon */
Always: #00d4ff                     /* Cyan (brand) */

/* Text */
Always: #ffffff                     /* White */

/* Shadow (hover only) */
Hover:  rgba(0, 212, 255, 0.3)     /* 30% cyan */
```

### Hero Section Background
```css
background: linear-gradient(135deg, #0a2540 0%, #00d4ff 100%);
             Dark Navy Blue → Cyan
```

---

## 📐 Layout Grid

### Desktop Layout
```
Container: 1200px max-width, centered
┌─────────────────────────────────────────────┐
│                                             │
│  Application Header (centered)              │
│  ├─ Icon (4rem)                            │
│  ├─ Title (2.5rem)                         │
│  ├─ Description (1.125rem)                 │
│  └─ Security Badges                        │
│      ├─ [Badge 1] ◄─ 1.5rem gap ─► [Badge 2]
│      └─ [Badge 3]                          │
│                                             │
│  Application Types (centered)               │
│  [Personal] [Business] [Joint]              │
│                                             │
└─────────────────────────────────────────────┘
```

---

## 🖱️ Interactive States

### Badge State Machine
```
┌──────────┐
│   Rest   │ ◄─┐
└──────────┘   │
     │         │
     │ hover   │ leave
     ▼         │
┌──────────┐   │
│  Hover   │ ──┘
└──────────┘
```

### Visual Changes Per State
```
Rest:
├─ Background: 15% white opacity
├─ Border: 30% white opacity
├─ Position: 0px
└─ Shadow: none

Hover:
├─ Background: 25% white opacity
├─ Border: Cyan solid
├─ Position: -2px (up)
└─ Shadow: Cyan glow (15px blur)
```

---

## 📊 Responsive Breakpoints

```
Mobile First Approach:

┌─────────────────────────────────────────┐
│                                         │
│  Base Styles (Mobile <480px)           │
│  - Vertical stack                      │
│  - Full width badges                   │
│  - Small fonts                         │
│                                         │
└─────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────┐
│                                         │
│  @media (min-width: 481px)             │
│  Tablet (481px - 768px)                │
│  - Still vertical or horizontal        │
│  - Medium fonts                        │
│                                         │
└─────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────┐
│                                         │
│  @media (min-width: 769px)             │
│  Desktop (>768px)                      │
│  - Horizontal layout                   │
│  - Full size fonts                     │
│  - Maximum spacing                     │
│                                         │
└─────────────────────────────────────────┘
```

---

## ✅ Component Checklist

### HTML Elements
- [x] `.security-badges` container div
- [x] Three `.security-badge` child divs
- [x] Font Awesome icons (`<i>`)
- [x] Text spans (`<span>`)
- [x] Semantic structure

### CSS Styling
- [x] Flexbox layout
- [x] Glassmorphism effect
- [x] Hover transitions
- [x] Responsive breakpoints
- [x] Brand color integration
- [x] Touch-friendly sizing

### Responsive Design
- [x] Desktop (>768px)
- [x] Tablet (768px)
- [x] Mobile (<480px)
- [x] Flexible wrapping
- [x] Proper stacking

### Consistency
- [x] Personal application
- [x] Business application
- [x] Joint application
- [x] Identical styling
- [x] Same messaging

---

## 🎯 Quick Reference Card

```
╔═══════════════════════════════════════════╗
║     SECURITY BADGES QUICK REFERENCE       ║
╠═══════════════════════════════════════════╣
║                                           ║
║  Icons: lock, shield-alt, user-shield     ║
║  Color: #00d4ff (cyan)                    ║
║  Shape: Pill (50px border-radius)         ║
║  Effect: Glassmorphism + hover lift       ║
║                                           ║
║  Desktop: 3 in a row, 1.5rem gap          ║
║  Tablet:  3 in a row, 1rem gap            ║
║  Mobile:  Stacked vertical, 0.75rem gap   ║
║                                           ║
║  Files: personal/business/joint-app.html  ║
║  CSS:   css/applications.css              ║
║                                           ║
╚═══════════════════════════════════════════╝
```

---

**Version**: 3.8.2  
**Status**: Complete ✅  
**Pages**: 3 (All credit applications)  
**Visual Style**: Modern glassmorphism  
**Responsive**: Yes (mobile-first)  
**Browser Support**: All modern browsers
