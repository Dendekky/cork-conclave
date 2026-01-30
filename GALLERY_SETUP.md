# Gallery Setup Guide

## Image Organization

Your gallery is now set up with beautiful slideshow functionality! Here's how to organize your event photos:

### Folder Structure

Create folders in `/public/images/` for each event with the following names:

```
/public/images/
├── pour-perspective/
│   ├── 1.jpg
│   ├── 2.jpg
│   ├── 3.jpg
│   └── ... (up to 10.jpg or more)
├── clink-and-chill/
│   ├── 1.jpg
│   ├── 2.jpg
│   └── ...
├── uncorked-a-love-affair/
│   ├── 1.jpg
│   ├── 2.jpg
│   └── ...
├── escandalo/
│   ├── 1.jpg
│   ├── 2.jpg
│   └── ...
├── 4-1-9/
│   ├── 1.jpg
│   ├── 2.jpg
│   └── ...
├── sips-dont-lie/
│   ├── 1.jpg
│   ├── 2.jpg
│   └── ...
├── scarlet-accord/
│   ├── 1.jpg
│   ├── 2.jpg
│   └── ...
├── grape-outdoor/
│   ├── 1.jpg
│   ├── 2.jpg
│   └── ...
├── lollapalooza/
│   ├── 1.jpg
│   ├── 2.jpg
│   └── ...
├── trivia-night/
│   ├── 1.jpg
│   ├── 2.jpg
│   └── ...
├── amebo-lounge/
│   ├── 1.jpg
│   ├── 2.jpg
│   └── ...
├── from-palette-to-palate/
│   ├── 1.jpg
│   ├── 2.jpg
│   └── ...
└── the-grape-reset/
    ├── 1.jpg
    ├── 2.jpg
    └── ...
```

### Image Naming Convention

- Name your images numerically: `1.jpg`, `2.jpg`, `3.jpg`, etc.
- The system automatically loads up to 10 images per event
- Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`

### To Add More Images Per Event

If you have more than 10 images for an event, edit `/src/app/gallery/page.tsx`:

```typescript
// Change the count parameter (default is 10)
photos: generateEventPhotos("event-name", 15),  // For 15 images
```

### Image Recommendations

- **Aspect Ratio**: 16:9 works best for the carousel
- **Resolution**: 1920x1080px or higher
- **File Size**: Optimize to under 500KB per image for fast loading
- **Format**: Use `.jpg` for photos, `.webp` for smaller file sizes

## Slideshow Features

### User Controls

- **Previous/Next Buttons**: Navigate through images manually
- **Play/Pause Button**: Control autoplay
- **Dot Indicators**: Jump to specific images
- **Counter**: Shows current position (e.g., "3 / 10")

### Settings

- **Autoplay**: Enabled by default (4 seconds per slide)
- **Transition**: Smooth slide animation
- **Responsive**: Adapts beautifully to all screen sizes

## Customization

To change autoplay speed, edit the carousel components:

```typescript
// In page.tsx
<EventCarousel images={photos} autoplay={true} autoplayInterval={5000} />
// 5000 = 5 seconds per slide
```

---

Need help? Check the carousel component at `/src/components/EventCarousel.tsx`
