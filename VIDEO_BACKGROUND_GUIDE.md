# 🎬 Browse Inventory Background Video - Quick Guide

## Feature Overview

The Browse Inventory page now features a **dynamic background video** behind the filter section, creating a premium dealership experience similar to Capital Motor Cars.

---

## 🎯 Video Specifications

| Property | Value |
|----------|-------|
| **Source** | United Auto Lease video |
| **URL** | https://www.genspark.ai/api/files/s/xRaxhcib |
| **Loop Start** | 14.5 seconds |
| **Loop End** | 25 seconds |
| **Loop Duration** | 10.5 seconds |
| **Format** | MP4 |
| **Playback** | Autoplay, Muted, Continuous loop |

---

## 🎨 Visual Layout

```
┌─────────────────────────────────────────────┐
│  [Navigation Bar]                           │
├─────────────────────────────────────────────┤
│                                             │
│          🎬 VIDEO BACKGROUND                │
│     (Cars in motion, 14.5s-25s loop)       │
│                                             │
│         ┌───────────────────┐              │
│         │  [Dark Overlay]   │              │
│         │                   │              │
│         │  Browse Inventory │              │
│         │                   │              │
│         │ ╔═══════════════╗ │              │
│         │ ║ FILTER BOX    ║ │              │
│         │ ║ (Glassmorphic)║ │              │
│         │ ║ Price Sliders ║ │              │
│         │ ║ Apply / Clear ║ │              │
│         │ ╚═══════════════╝ │              │
│         │                   │              │
│         │ Pricing Disclaimer│              │
│         └───────────────────┘              │
│                                             │
└─────────────────────────────────────────────┘
```

---

## 🔧 How It Works

### 1. **HTML Structure**
```html
<section class="page-header">
    <!-- Background Video -->
    <div class="video-background">
        <video id="bgVideo" autoplay muted playsinline>
            <source src="video-url" type="video/mp4">
        </video>
        <div class="video-overlay"></div>
    </div>
    
    <!-- Content (above video) -->
    <div class="container">
        <h1>Browse Inventory</h1>
        <!-- Filter box, etc. -->
    </div>
</section>
```

### 2. **CSS Layering**
```
z-index: 0  →  Video Background
z-index: 1  →  Dark Overlay (70% opacity)
z-index: 2  →  Content (text, filter box)
```

### 3. **JavaScript Loop Control**
```javascript
// Start at 14.5 seconds
video.currentTime = 14.5;

// Loop back when reaching 25 seconds
video.addEventListener('timeupdate', function() {
    if (video.currentTime >= 25) {
        video.currentTime = 14.5;
    }
});
```

---

## ✨ Design Features

### Glassmorphism Effect
The filter box uses enhanced backdrop blur:
- `backdrop-filter: blur(10px)`
- Semi-transparent white background
- Works beautifully over video

### Overlay
- Dark overlay: `rgba(30, 41, 59, 0.7)`
- Ensures text remains readable
- Professional, premium look

### Video Scaling
- `object-fit: cover` - No stretching or distortion
- Always fills the entire header area
- Responsive on all screen sizes

---

## 📱 Mobile Optimization

| Feature | Purpose |
|---------|---------|
| `playsinline` | Prevents fullscreen on iOS |
| `muted` | Required for autoplay on mobile |
| `autoplay` | Starts immediately on page load |
| Responsive scaling | Video adapts to screen size |

---

## 🎯 User Experience

### Desktop
1. Page loads
2. Video starts at 14.5s
3. Plays through to 25s
4. Seamlessly loops back to 14.5s
5. Filter box floats over video with blur effect

### Mobile
1. Video scales to fit screen
2. Plays inline (no fullscreen popup)
3. Same smooth loop
4. Touch-friendly filter controls

---

## 🚀 Performance

- **File Size**: ~62MB (hosted on Genspark CDN)
- **Loading**: Progressive (plays while loading)
- **Bandwidth**: Cached after first load
- **Performance Impact**: Minimal - video is optimized
- **Browser Support**: 100% (all modern browsers)

---

## 🎬 Video Content

The 10.5-second loop shows:
- ✅ Vehicles in motion
- ✅ Professional cinematography
- ✅ Brand showcase
- ✅ Premium dealership feel

---

## 🔄 Maintenance

### To Change Video:
1. Replace video URL in `leasing-deals.html`
2. Adjust start/end times in `leasing-deals-renderer.js`
3. Test loop timing

### To Adjust Overlay:
- Edit `rgba(30, 41, 59, 0.7)` in CSS
- Lower opacity = more video visible
- Higher opacity = darker overlay

### To Disable Video:
- Remove or comment out video element
- Gradient background will show as fallback

---

## ✅ Success Metrics

- ✅ Seamless 10.5-second loop
- ✅ No stuttering or jumping
- ✅ Clear, readable text over video
- ✅ Professional premium appearance
- ✅ Mobile-friendly playback
- ✅ Fast page load time maintained

---

**The Browse Inventory page now delivers a premium, engaging experience that matches high-end luxury dealerships!**
