# Image Assets Directory

## Structure

### `/gallery/`
Workplace photos (6-8 images recommended):
- `corte.jpg` - Área de Corte (cutting area)
- `costura.jpg` - Costura (sewing)
- `qualidade.jpg` - Controle de Qualidade (quality control)
- `bordado.jpg` - Bordado (embroidery)
- `embalagem.jpg` - Embalagem (packaging)
- `equipe.jpg` - Nossa Equipe (our team)
- Additional workspace photos as needed

### `/hero/`
Hero section visuals:
- `hero-main.jpg` or `hero-main.mp4` - Main hero visual
- `hero-bg.jpg` - Optional background image

### `/og/`
Social media images (Open Graph):
- `og-image.jpg` - 1200x630px - For social media sharing
- `favicon.ico` - Site favicon

## Image Specifications

### Gallery Images
- **Format**: JPG/WebP (automatically converted by Nuxt Image)
- **Dimensions**: 800x600px (4:3 aspect ratio)
- **Max file size**: 200KB per image
- **Quality**: 80-85%

### Hero Image
- **Format**: JPG/WebP or MP4 for video
- **Dimensions**: 1920x1440px (4:3 aspect ratio)
- **Max file size**: 500KB for images, 2MB for video
- **Quality**: 85-90%

### OG Image
- **Format**: JPG/PNG
- **Dimensions**: 1200x630px (exact)
- **Max file size**: 300KB
- **Quality**: 90%

## Optimization Tips

Before adding images:
1. Resize to recommended dimensions using tools like:
   - [Squoosh](https://squoosh.app/)
   - [TinyPNG](https://tinypng.com/)
   - [ImageOptim](https://imageoptim.com/)

2. Convert to WebP if possible (Nuxt Image will handle fallbacks)

3. Compress for web (target 80-85% quality)

4. Use descriptive filenames (lowercase, hyphens instead of spaces)

## Auto-Optimization

Nuxt Image module is configured to:
- ✅ Auto-convert to WebP/AVIF
- ✅ Generate responsive sizes
- ✅ Lazy load images below the fold
- ✅ Add blur-up placeholders
- ✅ Optimize quality (80% default)

Just drop your images here and they'll be automatically optimized!
