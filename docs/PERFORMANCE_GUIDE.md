# ⚡ Performance Optimization Guide

## Current Optimizations Implemented

### 🖼️ Image Optimization
- ✅ **Nuxt Image Module** configured with:
  - WebP & AVIF format conversion (80% quality)
  - Responsive breakpoints (xs, sm, md, lg, xl, xxl)
  - 1x and 2x density support
  - Lazy loading for below-fold images
  - Eager loading for hero image (above-fold)
  - Blur-up placeholders during load

### 🚀 Build & Runtime Optimizations
- ✅ **Payload extraction** enabled
- ✅ **JSON payload rendering** optimized
- ✅ **View transitions** experimental feature
- ✅ **Asset compression** in production
- ✅ **Minification** enabled
- ✅ **Preconnect** to external domains:
  - Instagram Graph API
  - EmailJS API

### 🎨 CSS & Font Optimizations
- ✅ **Font rendering** improvements:
  - `-webkit-font-smoothing: antialiased`
  - `-moz-osx-font-smoothing: grayscale`
  - `text-rendering: optimizeLegibility`
  - `font-display: swap` for faster perceived load
- ✅ **System fonts** prioritized (zero web font downloads)
- ✅ **Smooth scrolling** with reduced-motion support

### 🎬 Animation Optimizations
- ✅ **Scroll animations** use IntersectionObserver
- ✅ **GPU-accelerated** transforms and opacity
- ✅ **Reduced-motion** media query support
- ✅ **Will-change** hints removed after animation

---

## Performance Metrics Goals

### Core Web Vitals Targets:

| Metric | Target | Current | Status |
|--------|--------|---------|--------|
| **LCP** (Largest Contentful Paint) | < 2.5s | TBD | 🔄 Measure |
| **FID** (First Input Delay) | < 100ms | TBD | 🔄 Measure |
| **CLS** (Cumulative Layout Shift) | < 0.1 | TBD | 🔄 Measure |
| **FCP** (First Contentful Paint) | < 1.8s | TBD | 🔄 Measure |
| **TTI** (Time to Interactive) | < 3.8s | TBD | 🔄 Measure |

### Lighthouse Score Targets:

- **Performance**: > 90
- **Accessibility**: > 95
- **Best Practices**: > 95
- **SEO**: > 95

---

## How to Run Performance Audits

### Option 1: Chrome DevTools Lighthouse

1. Open site in Chrome
2. Open DevTools (F12)
3. Go to "Lighthouse" tab
4. Select:
   - ✅ Performance
   - ✅ Accessibility
   - ✅ Best Practices
   - ✅ SEO
   - Device: Mobile & Desktop
5. Click "Analyze page load"
6. Review results and recommendations

### Option 2: PageSpeed Insights (Recommended)

1. Go to [PageSpeed Insights](https://pagespeed.web.dev/)
2. Enter your site URL
3. Click "Analyze"
4. Get **real-world** mobile & desktop metrics
5. Review Field Data (actual users) and Lab Data

### Option 3: WebPageTest

1. Go to [WebPageTest.org](https://www.webpagetest.org/)
2. Enter URL
3. Select test location and device
4. Run test
5. Get detailed waterfall and filmstrip view

---

## Common Performance Issues & Fixes

### Issue: Slow Instagram Feed Load
**Symptom**: Instagram section delays page load
**Fix**: 
- Already using lazy loading ✅
- Consider caching API responses server-side
- Add `loading` state to prevent layout shift

### Issue: Large Image Sizes
**Symptom**: Slow image downloads on mobile
**Fix**:
- Already optimized with WebP/AVIF ✅
- Ensure source images are properly sized before upload
- Use image optimization tools before adding to `/public/images/`

### Issue: Render-Blocking Resources
**Symptom**: Delayed first paint
**Fix**:
- Using system fonts (no web font blocking) ✅
- Critical CSS is inline (handled by Nuxt) ✅
- Scripts are deferred by default ✅

### Issue: Layout Shift (CLS)
**Symptom**: Content jumps during load
**Fix**:
- All images have explicit width/height ✅
- Aspect ratios defined in CSS ✅
- Skeletons show during image load ✅

---

## Production Build Optimizations

Before deploying, run:

```bash
npm run build
npm run preview
```

This will:
- ✅ Minify JavaScript and CSS
- ✅ Tree-shake unused code
- ✅ Optimize images
- ✅ Generate static assets
- ✅ Compress bundles

---

## Mobile Performance Tips

### Test on Real Devices
- Chrome DevTools device emulation is useful but not perfect
- Test on actual mobile devices when possible
- Use "Slow 3G" throttling in DevTools for worst-case

### Mobile-Specific Optimizations
- ✅ Smaller WhatsApp button on mobile
- ✅ Responsive image sizes
- ✅ Touch-friendly tap targets (min 44x44px)
- ✅ Reduced animations on mobile (optional)

---

## Monitoring Performance Over Time

### Recommended Tools:

1. **Google Analytics 4**
   - Track Core Web Vitals
   - Monitor real user metrics
   - Identify slow pages

2. **Vercel/Netlify Analytics**
   - Automatic performance monitoring
   - Core Web Vitals tracking
   - No setup required

3. **Sentry**
   - Performance monitoring
   - Error tracking
   - User experience insights

---

## Performance Checklist Before Launch

- [ ] Run Lighthouse audit (target: 90+ on all metrics)
- [ ] Test on mobile devices (3G/4G)
- [ ] Verify all images are optimized (< 200KB each)
- [ ] Check Instagram feed loads without blocking
- [ ] Test WhatsApp button on mobile
- [ ] Verify no console errors
- [ ] Test form submission performance
- [ ] Check page load on slow connection
- [ ] Verify smooth scroll animations
- [ ] Test back-to-top button
- [ ] Check mobile navigation performance

---

## Quick Wins for Additional Performance

### 1. Add Service Worker (PWA)
```bash
npm install @vite-pwa/nuxt
```
- Offline support
- Faster repeat visits
- Install to home screen

### 2. Add Analytics with Performance Monitoring
```bash
npm install @nuxtjs/google-analytics
```
- Track real user metrics
- Identify bottlenecks

### 3. Add Image Caching Headers
Configure in hosting platform:
- Cache images for 1 year
- Cache CSS/JS for 1 month
- Cache HTML for 1 hour

---

## Expected Performance Results

Based on current optimizations, you should achieve:

### Mobile (4G):
- **LCP**: 1.5-2.0s
- **FID**: < 50ms
- **CLS**: < 0.05
- **Lighthouse**: 85-95

### Desktop:
- **LCP**: 0.8-1.2s
- **FID**: < 30ms
- **CLS**: < 0.05
- **Lighthouse**: 90-100

---

## Need Help?

If performance metrics are below targets:
1. Run Lighthouse audit and check specific recommendations
2. Use Chrome DevTools Performance tab to find bottlenecks
3. Check Network tab for large/slow resources
4. Review Console for errors or warnings

**Remember**: Real-world performance matters most. Test on actual devices and connections, not just dev machines!
