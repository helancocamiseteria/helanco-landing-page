# SEO Setup Guide - Helanco Landing Page

## Overview
This guide covers the SEO enhancements implemented for the Helanco landing page.

## What Was Implemented

### 1. Meta Tags (Pages)

#### Homepage (`/pages/index.vue`)
- **Title**: "Helanco — Fabricação Premium de Vestuário | Corte, Costura e Bordado"
- **Description**: Comprehensive description of services
- **Keywords**: Targeted industry keywords
- **Open Graph**: Full OG tags for Facebook/LinkedIn sharing
- **Twitter Card**: Large image card format
- **Canonical URL**: Proper canonical reference
- **JSON-LD Structured Data**: Organization schema

#### Shop Page (`/pages/loja.vue`)
- **Title**: "Loja em Breve — Helanco"
- **Description**: Coming soon message
- **Robots**: `noindex, follow` (don't index placeholder page)
- **Open Graph**: Basic social sharing tags
- **Twitter Card**: Summary format
- **Canonical URL**: Proper canonical reference

### 2. Structured Data (JSON-LD)

Added Schema.org Organization markup on homepage:
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Helanco",
  "description": "...",
  "url": "https://helanco.com",
  "logo": "https://helanco.com/logo.png",
  "foundingDate": "1995",
  "address": { ... },
  "sameAs": ["https://instagram.com/helancocamiseteria"],
  "contactPoint": { ... }
}
```

### 3. Robots.txt

Enhanced `/public/robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://helanco.com/sitemap.xml
```

### 4. Sitemap

Created `/public/sitemap.xml`:
- Homepage (priority 1.0, weekly updates)
- Shop page (priority 0.8, monthly updates)
- Proper lastmod dates
- XML format following sitemap protocol

## TODO: Before Going Live

### Required Updates

1. **Update Domain URLs**
   - Replace `https://helanco.com` with actual domain in:
     - `/pages/index.vue` (siteUrl constant)
     - `/pages/loja.vue` (siteUrl constant)
     - `/public/sitemap.xml` (all URLs)
     - `/public/robots.txt` (sitemap URL)

2. **Add Open Graph Image**
   - Create OG image: 1200x630px
   - Save as `/public/og-image.jpg`
   - Update reference in `/pages/index.vue`

3. **Add Logo**
   - Create/add company logo
   - Save as `/public/logo.png`
   - Recommended size: 512x512px or larger

4. **Update Company Info**
   - Add complete address in JSON-LD if desired
   - Add phone number to contactPoint if desired
   - Update social media links (add more platforms)

5. **Update Sitemap Dates**
   - Change lastmod dates to actual content update dates
   - Set up automatic sitemap generation (optional)

### Optional Enhancements

1. **Google Search Console**
   - Add site verification meta tag
   - Submit sitemap
   - Monitor indexing and search performance

2. **Analytics**
   - Add Google Analytics or Plausible
   - Track conversions on contact form

3. **Performance**
   - Add preconnect hints for external resources
   - Optimize images with proper alt text

4. **Additional Meta Tags**
   - Add geo-targeting if local business
   - Add language alternatives if multilingual

## Meta Tags Reference

### Primary Meta Tags
- `title` - Page title (50-60 chars)
- `description` - Page description (150-160 chars)
- `keywords` - Comma-separated keywords
- `author` - Site author/owner
- `robots` - Indexing instructions

### Open Graph (Facebook/LinkedIn)
- `og:type` - Content type (website, article, etc.)
- `og:url` - Canonical URL
- `og:title` - Share title
- `og:description` - Share description
- `og:image` - Share image (1200x630px recommended)
- `og:site_name` - Site name
- `og:locale` - Language/region

### Twitter Card
- `twitter:card` - Card type (summary, summary_large_image)
- `twitter:url` - Page URL
- `twitter:title` - Tweet title
- `twitter:description` - Tweet description
- `twitter:image` - Tweet image

## Testing Your SEO

### Tools to Use
1. **Facebook Debugger**: https://developers.facebook.com/tools/debug/
2. **Twitter Card Validator**: https://cards-dev.twitter.com/validator
3. **Google Rich Results Test**: https://search.google.com/test/rich-results
4. **SEO Checker**: https://www.seoptimer.com/

### What to Check
- [ ] All meta tags render correctly
- [ ] Open Graph preview looks good
- [ ] Twitter Card preview looks good
- [ ] JSON-LD validates without errors
- [ ] Sitemap is accessible
- [ ] Robots.txt is accessible
- [ ] Mobile-friendly test passes
- [ ] Page speed is good (Lighthouse score)

## Maintenance

### Regular Updates
- Update sitemap lastmod dates when content changes
- Keep structured data current
- Monitor Google Search Console for issues
- Review and update keywords quarterly

---

Last updated: November 28, 2025
