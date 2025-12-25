# 📸 Instagram Basic Display API Setup Guide

## Complete Step-by-Step Instructions

### Prerequisites
- Active Instagram account (personal or business)
- Facebook Developer account
- 30-40 minutes

---

## Part 1: Facebook Developer App Setup (15-20 min)

### Step 1: Create Facebook App

1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Click **"My Apps"** → **"Create App"**
3. Choose **"Consumer"** as app type
4. Fill in details:
   - **App Name**: `Helanco Website` (or any name)
   - **App Contact Email**: Your email
   - Click **"Create App"**

### Step 2: Add Instagram Basic Display Product

1. In your app dashboard, scroll to **"Add Products"**
2. Find **"Instagram Basic Display"**
3. Click **"Set Up"**
4. Click **"Create New App"** (if prompted)

### Step 3: Configure Basic Settings

1. Go to **Instagram Basic Display** → **"Basic Display"**
2. Scroll to **"User Token Generator"**
3. Click **"Add or Remove Instagram Testers"**
4. Add your Instagram account as a tester

### Step 4: Accept Tester Invitation

1. Log in to Instagram (on web or mobile)
2. Go to: **Settings** → **Apps and Websites** → **Tester Invites**
3. Accept the invitation from your Facebook app

### Step 5: Get Access Token

1. Go back to Facebook Developers
2. In **Instagram Basic Display** → **"Basic Display"**
3. Scroll to **"User Token Generator"**
4. Click **"Generate Token"** next to your Instagram account
5. Log in to Instagram and authorize the app
6. **Copy the Access Token** (long string starting with "IGQV...")
7. **Important**: Save this token immediately!

### Step 6: Configure OAuth Redirect URI

1. In **Instagram Basic Display** → **"Basic Display"**
2. Add these OAuth Redirect URIs:
   ```
   https://localhost:3000/
   https://yourdomain.com/
   ```
3. Add Valid OAuth Redirect URIs (same URLs)
4. Add Deauthorize Callback URL: `https://yourdomain.com/`
5. Add Data Deletion Request URL: `https://yourdomain.com/`
6. Click **"Save Changes"**

---

## Part 2: Configure Your Website (10 min)

### Step 1: Add Environment Variable

Create or update `.env` file in your project root:

```bash
# Instagram Basic Display API
NUXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN=your_access_token_here
```

Replace `your_access_token_here` with the token you copied.

### Step 2: Add to `.gitignore`

Make sure `.env` is in your `.gitignore`:

```
.env
.env.*
!.env.example
```

### Step 3: Create `.env.example`

Create a template for other developers:

```bash
# Instagram Basic Display API
NUXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN=
```

### Step 4: Update Runtime Config (Already Done!)

The `nuxt.config.ts` already includes:

```typescript
runtimeConfig: {
  public: {
    instagramAccessToken: ''
  }
}
```

### Step 5: Test the Integration

1. Restart your dev server:
   ```bash
   npm run dev
   ```

2. Visit your site and scroll to Instagram section
3. Posts should load automatically!

---

## Part 3: Token Refresh Setup (Important!)

### Understanding Token Expiration

- **Short-lived tokens** expire in 1 hour
- **Long-lived tokens** expire in 60 days
- You need to refresh tokens before they expire

### Option A: Manual Refresh (Simple)

Every 50-55 days:

1. Go to Facebook Developers
2. Navigate to your app → Instagram Basic Display
3. Generate a new token
4. Update your `.env` file
5. Redeploy your site

### Option B: Automatic Refresh (Advanced)

Create a server endpoint to refresh tokens automatically:

```typescript
// server/api/instagram/refresh-token.ts
export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const currentToken = config.public.instagramAccessToken
  
  const url = `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${currentToken}`
  
  const response = await fetch(url)
  const data = await response.json()
  
  // Save data.access_token to your environment
  // Set up a cron job to run this every 50 days
  
  return data
})
```

**Recommended**: Set up a monthly reminder to refresh manually until you implement automatic refresh.

---

## Troubleshooting

### Error: "Invalid OAuth access token"
- Token expired → Generate a new one
- Wrong token → Check you copied the full token
- App not approved → Make sure you added yourself as a tester

### Error: "Permissions error"
- Instagram account not connected as tester
- Check tester invitation was accepted
- Re-authorize the app

### No posts showing
- Check browser console for errors
- Verify token in `.env` file
- Make sure Instagram account has posts
- Check posts are not archived or deleted

### Rate Limiting
- Instagram limits: 200 calls per hour per token
- Your site fetches 6 posts → ~33 visitors/hour max
- Consider caching posts (see below)

---

## Performance Optimization

### Recommended: Cache Instagram Posts

Instead of fetching on every page load, cache the data:

```typescript
// server/api/instagram/posts.ts
import { InstagramPost } from '~/composables/useInstagramFeed'

let cachedPosts: InstagramPost[] = []
let lastFetch = 0
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes

export default defineEventHandler(async () => {
  const now = Date.now()
  
  if (cachedPosts.length && now - lastFetch < CACHE_DURATION) {
    return cachedPosts
  }
  
  // Fetch fresh posts
  const config = useRuntimeConfig()
  const token = config.public.instagramAccessToken
  
  const response = await fetch(
    `https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink,caption,timestamp,thumbnail_url&access_token=${token}&limit=6`
  )
  
  const data = await response.json()
  cachedPosts = data.data || []
  lastFetch = now
  
  return cachedPosts
})
```

Then update your component to fetch from your API instead of directly.

---

## Security Best Practices

✅ **Never commit** `.env` file to git
✅ **Use environment variables** for access tokens
✅ **Refresh tokens regularly** (every 50 days)
✅ **Monitor API usage** in Facebook Developer dashboard
✅ **Cache API responses** to reduce calls
✅ **Handle errors gracefully** with fallbacks

---

## Quick Start Checklist

- [ ] Create Facebook Developer account
- [ ] Create Facebook app (Consumer type)
- [ ] Add Instagram Basic Display product
- [ ] Add yourself as Instagram tester
- [ ] Accept tester invitation on Instagram
- [ ] Generate access token
- [ ] Copy token to `.env` file
- [ ] Restart dev server
- [ ] Test Instagram feed on site
- [ ] Set 50-day reminder to refresh token

---

## Support Resources

- [Instagram Basic Display API Docs](https://developers.facebook.com/docs/instagram-basic-display-api)
- [Facebook Developer Support](https://developers.facebook.com/support/)
- [Token Refresh Guide](https://developers.facebook.com/docs/instagram-basic-display-api/guides/long-lived-access-tokens)

---

**Estimated Total Time**: 30-40 minutes for initial setup
**Maintenance**: 5 minutes every 60 days for token refresh

Good luck! 🚀
