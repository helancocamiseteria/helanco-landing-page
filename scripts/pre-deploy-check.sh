#!/bin/bash

# ========================================
# PRE-DEPLOY VERIFICATION SCRIPT
# Helanco Landing Page
# ========================================
# 
# Execute antes de fazer deploy para produção
# Verifica se tudo está configurado corretamente
#
# Uso: bash scripts/pre-deploy-check.sh
# ========================================

set -e

echo "🚀 Helanco Landing Page - Pre-Deploy Verification"
echo "=================================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

ERRORS=0
WARNINGS=0

# ========================================
# 1. Check Node.js version
# ========================================
echo "📦 Checking Node.js version..."
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -ge 18 ]; then
  echo -e "${GREEN}✓${NC} Node.js version: $(node -v)"
else
  echo -e "${RED}✗${NC} Node.js version too old. Need 18+, got $(node -v)"
  ERRORS=$((ERRORS + 1))
fi
echo ""

# ========================================
# 2. Check if .env exists
# ========================================
echo "🔐 Checking environment variables..."
if [ -f .env ]; then
  echo -e "${GREEN}✓${NC} .env file exists"
  
  # Check required variables
  REQUIRED_VARS=("NUXT_PUBLIC_EMAILJS_SERVICE_ID" "NUXT_PUBLIC_EMAILJS_TEMPLATE_ID" "NUXT_PUBLIC_EMAILJS_PUBLIC_KEY")
  
  for VAR in "${REQUIRED_VARS[@]}"; do
    if grep -q "^$VAR=" .env; then
      VALUE=$(grep "^$VAR=" .env | cut -d'=' -f2)
      if [[ "$VALUE" != "your_"* ]] && [ -n "$VALUE" ]; then
        echo -e "${GREEN}✓${NC} $VAR is configured"
      else
        echo -e "${RED}✗${NC} $VAR is not configured (still has placeholder value)"
        ERRORS=$((ERRORS + 1))
      fi
    else
      echo -e "${RED}✗${NC} $VAR is missing from .env"
      ERRORS=$((ERRORS + 1))
    fi
  done
  
  # Check Instagram token (warning only)
  if grep -q "^NUXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN=" .env; then
    VALUE=$(grep "^NUXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN=" .env | cut -d'=' -f2)
    if [[ "$VALUE" != "your_"* ]] && [ -n "$VALUE" ]; then
      echo -e "${GREEN}✓${NC} Instagram token is configured"
    else
      echo -e "${YELLOW}⚠${NC} Instagram token not configured (Instagram feed won't work)"
      WARNINGS=$((WARNINGS + 1))
    fi
  else
    echo -e "${YELLOW}⚠${NC} Instagram token missing (Instagram feed won't work)"
    WARNINGS=$((WARNINGS + 1))
  fi
else
  echo -e "${RED}✗${NC} .env file not found!"
  echo -e "${YELLOW}→${NC} Copy .env.example to .env and configure it"
  ERRORS=$((ERRORS + 1))
fi
echo ""

# ========================================
# 3. Check dependencies
# ========================================
echo "📚 Checking dependencies..."
if [ -d node_modules ]; then
  echo -e "${GREEN}✓${NC} node_modules exists"
else
  echo -e "${RED}✗${NC} node_modules not found. Run: npm install"
  ERRORS=$((ERRORS + 1))
fi
echo ""

# ========================================
# 4. Check gallery images
# ========================================
echo "🖼️  Checking gallery images..."
GALLERY_IMAGES=("corte.jpg" "costura.jpg" "qualidade.jpg" "bordado.jpg" "embalagem.jpg" "equipe.jpg")
MISSING_IMAGES=0

for IMG in "${GALLERY_IMAGES[@]}"; do
  if [ -f "public/images/gallery/$IMG" ]; then
    echo -e "${GREEN}✓${NC} $IMG found"
  else
    echo -e "${YELLOW}⚠${NC} $IMG missing (will show placeholder)"
    MISSING_IMAGES=$((MISSING_IMAGES + 1))
    WARNINGS=$((WARNINGS + 1))
  fi
done

if [ $MISSING_IMAGES -eq 6 ]; then
  echo -e "${YELLOW}→${NC} All gallery images missing. Add them to public/images/gallery/"
fi
echo ""

# ========================================
# 5. Check SEO assets
# ========================================
echo "🔍 Checking SEO assets..."

if [ -f "public/og-image.jpg" ]; then
  echo -e "${GREEN}✓${NC} Open Graph image exists"
else
  echo -e "${YELLOW}⚠${NC} og-image.jpg missing (social sharing won't have image)"
  WARNINGS=$((WARNINGS + 1))
fi

if [ -f "public/logo.png" ]; then
  echo -e "${GREEN}✓${NC} Logo exists"
else
  echo -e "${YELLOW}⚠${NC} logo.png missing (structured data won't have logo)"
  WARNINGS=$((WARNINGS + 1))
fi

if [ -f "public/sitemap.xml" ]; then
  echo -e "${GREEN}✓${NC} Sitemap exists"
else
  echo -e "${RED}✗${NC} sitemap.xml missing"
  ERRORS=$((ERRORS + 1))
fi

if [ -f "public/robots.txt" ]; then
  echo -e "${GREEN}✓${NC} robots.txt exists"
else
  echo -e "${RED}✗${NC} robots.txt missing"
  ERRORS=$((ERRORS + 1))
fi
echo ""

# ========================================
# 6. Check for placeholder domain
# ========================================
echo "🌐 Checking for placeholder domains..."
PLACEHOLDER_FOUND=0

if grep -r "https://helanco.com" pages/ >/dev/null 2>&1; then
  echo -e "${YELLOW}⚠${NC} Found 'https://helanco.com' in pages/"
  echo -e "${YELLOW}→${NC} Update to your real domain before deploying"
  PLACEHOLDER_FOUND=$((PLACEHOLDER_FOUND + 1))
  WARNINGS=$((WARNINGS + 1))
fi

if grep "https://helanco.com" public/sitemap.xml >/dev/null 2>&1; then
  echo -e "${YELLOW}⚠${NC} Found placeholder domain in sitemap.xml"
  PLACEHOLDER_FOUND=$((PLACEHOLDER_FOUND + 1))
  WARNINGS=$((WARNINGS + 1))
fi

if [ $PLACEHOLDER_FOUND -eq 0 ]; then
  echo -e "${GREEN}✓${NC} No placeholder domains found"
fi
echo ""

# ========================================
# 7. Try to build
# ========================================
echo "🔨 Testing build..."
if npm run build >/dev/null 2>&1; then
  echo -e "${GREEN}✓${NC} Build successful"
else
  echo -e "${RED}✗${NC} Build failed!"
  echo -e "${YELLOW}→${NC} Run 'npm run build' to see errors"
  ERRORS=$((ERRORS + 1))
fi
echo ""

# ========================================
# 8. Check for console.logs in production
# ========================================
echo "🔍 Checking for debug code..."
DEBUG_FOUND=0

# Skip check in node_modules and .nuxt
if grep -r "console.log" --include="*.vue" --include="*.ts" --exclude-dir=node_modules --exclude-dir=.nuxt components/ pages/ composables/ 2>/dev/null | grep -v "import.meta.dev" >/dev/null; then
  echo -e "${YELLOW}⚠${NC} Found console.log in source code"
  echo -e "${YELLOW}→${NC} Consider removing or wrapping in if (import.meta.dev)"
  DEBUG_FOUND=$((DEBUG_FOUND + 1))
  WARNINGS=$((WARNINGS + 1))
fi

if [ $DEBUG_FOUND -eq 0 ]; then
  echo -e "${GREEN}✓${NC} No debug code found"
fi
echo ""

# ========================================
# Summary
# ========================================
echo "=================================================="
echo "📊 VERIFICATION SUMMARY"
echo "=================================================="

if [ $ERRORS -eq 0 ] && [ $WARNINGS -eq 0 ]; then
  echo -e "${GREEN}✓ ALL CHECKS PASSED!${NC}"
  echo ""
  echo "🎉 Ready to deploy!"
  echo ""
  echo "Next steps:"
  echo "1. Commit and push changes to Git"
  echo "2. Deploy to Vercel/Netlify/etc."
  echo "3. Add environment variables in hosting dashboard"
  echo "4. Verify deployment works correctly"
  exit 0
elif [ $ERRORS -eq 0 ]; then
  echo -e "${YELLOW}⚠ Passed with $WARNINGS warning(s)${NC}"
  echo ""
  echo "You can deploy, but consider fixing warnings for best results."
  exit 0
else
  echo -e "${RED}✗ FAILED with $ERRORS error(s) and $WARNINGS warning(s)${NC}"
  echo ""
  echo "❌ Please fix errors before deploying!"
  echo ""
  echo "See docs/ folder for setup guides:"
  echo "- docs/EMAILJS_SETUP.md"
  echo "- docs/INSTAGRAM_QUICK_START.md"
  echo "- docs/IMAGE_SETUP.md"
  echo "- docs/SEO_GUIDE.md"
  exit 1
fi
