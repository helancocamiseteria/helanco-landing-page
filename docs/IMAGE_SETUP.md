# 🖼️ Quick Image Setup Guide

## How to Add Your Images

### Option 1: Simple Drag & Drop
1. Open `/public/images/gallery/` folder
2. Drag your 6 workplace photos and rename them:
   - `corte.jpg`
   - `costura.jpg` 
   - `qualidade.jpg`
   - `bordado.jpg`
   - `embalagem.jpg`
   - `equipe.jpg`

3. Open `/public/images/hero/` folder
4. Add your hero image as `hero-main.jpg`

5. Refresh the page - images will appear automatically! ✨

### Option 2: Use These Terminal Commands

```bash
# From project root
cd public/images/gallery/

# Copy your images here and rename them
cp ~/Downloads/your-cutting-photo.jpg corte.jpg
cp ~/Downloads/your-sewing-photo.jpg costura.jpg
cp ~/Downloads/your-quality-photo.jpg qualidade.jpg
cp ~/Downloads/your-embroidery-photo.jpg bordado.jpg
cp ~/Downloads/your-packaging-photo.jpg embalagem.jpg
cp ~/Downloads/your-team-photo.jpg equipe.jpg

# Add hero image
cd ../hero/
cp ~/Downloads/your-hero-image.jpg hero-main.jpg
```

## Image Requirements

### Gallery Photos (6 images)
- **Names**: `corte.jpg`, `costura.jpg`, `qualidade.jpg`, `bordado.jpg`, `embalagem.jpg`, `equipe.jpg`
- **Size**: Recommended 800x600px (4:3 ratio)
- **Format**: JPG, PNG (will auto-convert to WebP)
- **Max file size**: ~200KB each

### Hero Image (1 image)
- **Name**: `hero-main.jpg`
- **Size**: Recommended 1920x1440px (4:3 ratio)
- **Format**: JPG, PNG (will auto-convert to WebP)
- **Max file size**: ~500KB

## What Happens Automatically

✅ **Auto-conversion to WebP** for better performance
✅ **Responsive sizes** generated for mobile/tablet/desktop
✅ **Lazy loading** for images below the fold
✅ **Blur placeholder** while loading
✅ **80% quality compression** for optimal balance

## No Images Yet?

The site will show elegant gradient placeholders with helpful hints until you add images. Everything is ready to go!

## Testing

After adding images:
1. Clear browser cache (Ctrl+Shift+R / Cmd+Shift+R)
2. Images should load with smooth blur-up effect
3. Check mobile responsiveness
4. Verify alt text in browser inspector

## Image Optimization Tools (Optional)

If your images are too large:
- **Squoosh**: https://squoosh.app/ (browser-based, free)
- **TinyPNG**: https://tinypng.com/ (easy compression)
- **ImageOptim**: https://imageoptim.com/ (Mac app)

Resize to recommended dimensions first, then compress to 80-85% quality.
