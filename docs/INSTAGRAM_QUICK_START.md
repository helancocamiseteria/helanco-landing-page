# ⚡ Instagram API - Quick Setup Checklist

Complete these steps to activate your Instagram feed (30-40 minutes):

## 📋 Checklist

### Part 1: Facebook Developer Setup
- [ ] 1. Go to [developers.facebook.com](https://developers.facebook.com/)
- [ ] 2. Create new app → Choose "Consumer" type
- [ ] 3. Add "Instagram Basic Display" product
- [ ] 4. Add yourself as Instagram tester
- [ ] 5. Accept tester invitation on Instagram app/website
- [ ] 6. Generate access token
- [ ] 7. Copy the token (starts with "IGQV...")

### Part 2: Website Configuration
- [ ] 8. Create `.env` file in project root (if it doesn't exist)
- [ ] 9. Add this line to `.env`:
```bash
NUXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN=paste_your_token_here
```
- [ ] 10. Restart dev server: `npm run dev`
- [ ] 11. Visit site and check Instagram section - posts should load! ✨

### Part 3: Production Deployment
- [ ] 12. Add environment variable to your hosting platform:
  - **Vercel**: Project Settings → Environment Variables
  - **Netlify**: Site Settings → Environment Variables
  - **Other**: Add `NUXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN` to your deployment config
- [ ] 13. Redeploy site
- [ ] 14. Verify Instagram feed loads on live site

### Part 4: Maintenance
- [ ] 15. Set calendar reminder for 50 days from now
- [ ] 16. When reminded: regenerate token and update `.env`

## 🚨 Common Issues

**"Instagram access token not configured"**
→ Check `.env` file exists and has the token
→ Restart dev server after adding token

**"Invalid OAuth access token"**
→ Token expired - generate a new one
→ Make sure you copied the complete token

**Posts not showing**
→ Clear browser cache
→ Check browser console for errors
→ Verify Instagram account has public posts

## 📚 Full Documentation

For detailed step-by-step instructions with screenshots, see:
**`docs/INSTAGRAM_API_SETUP.md`**

## ⏱️ Time Estimate
- First time setup: 30-40 minutes
- Token refresh (every 60 days): 5 minutes

---

**Need Help?** Check the full setup guide or the troubleshooting section in `INSTAGRAM_API_SETUP.md`
