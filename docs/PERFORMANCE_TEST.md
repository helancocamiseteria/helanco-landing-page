# 🚀 Quick Performance Test

Run this after deploying to test performance:

## Before Testing
1. Build the production version:
   ```bash
   npm run build
   npm run preview
   ```
2. Open site in **Incognito/Private** mode (fresh cache)

## Tests to Run

### ✅ Desktop Performance
1. Open Chrome DevTools (F12)
2. Go to Lighthouse tab
3. Select:
   - Performance
   - Desktop
4. Run audit
5. **Target**: > 90 score

### ✅ Mobile Performance
1. Open Chrome DevTools (F12)
2. Go to Lighthouse tab  
3. Select:
   - Performance
   - Mobile
4. Run audit
5. **Target**: > 85 score

### ✅ Network Throttling Test
1. Open DevTools → Network tab
2. Select "Slow 3G" from throttling dropdown
3. Hard refresh (Ctrl+Shift+R)
4. Check:
   - [ ] Page loads in < 5s
   - [ ] Hero image visible in < 3s
   - [ ] No layout shifts
   - [ ] Smooth animations

### ✅ Image Loading Test
1. Scroll slowly through page
2. Watch Network tab
3. Verify:
   - [ ] Gallery images load as you scroll (lazy)
   - [ ] Instagram images load when section appears
   - [ ] Images are WebP format
   - [ ] No large (>500KB) images

### ✅ WhatsApp Button Test
1. Check WhatsApp button appears
2. Verify:
   - [ ] Pulse animation smooth
   - [ ] No lag on hover
   - [ ] Doesn't block content
   - [ ] Tap on mobile works

### ✅ Core Web Vitals
Go to: https://pagespeed.web.dev/

Enter your URL and check:
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms  
- **CLS** (Cumulative Layout Shift): < 0.1

---

## Results Template

### Desktop Lighthouse Score
- Performance: ___ / 100
- Accessibility: ___ / 100
- Best Practices: ___ / 100
- SEO: ___ / 100

### Mobile Lighthouse Score
- Performance: ___ / 100
- Accessibility: ___ / 100
- Best Practices: ___ / 100
- SEO: ___ / 100

### Core Web Vitals
- LCP: ___ seconds
- FID: ___ milliseconds
- CLS: ___ score

### Notes:
(Any issues or observations)

---

## Common Issues & Quick Fixes

**Low Performance Score?**
- Check Network tab for large files
- Verify images are < 200KB each
- Check Console for errors

**Layout Shift?**
- Make sure images have width/height
- Check aspect ratios in CSS
- Verify skeletons/placeholders

**Slow Instagram Load?**
- API might be slow (external dependency)
- Already using lazy loading
- Consider caching responses

**Mobile Score Lower?**
- Normal - mobile is stricter
- Target 85+ on mobile
- Test on real device too

---

Good luck! 🎯
