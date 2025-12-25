export interface InstagramPost {
  id: string
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM'
  media_url: string
  permalink: string
  caption?: string
  timestamp: string
  thumbnail_url?: string
}

export interface InstagramFeedOptions {
  limit?: number
  accessToken?: string
}

export const useInstagramFeed = () => {
  const config = useRuntimeConfig()
  const posts = ref<InstagramPost[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const fetchInstagramPosts = async (options: InstagramFeedOptions = {}) => {
    const { limit = 6, accessToken } = options
    
    // Get access token from runtime config or parameter
    const token = accessToken || config.public.instagramAccessToken
    
    if (!token) {
      error.value = 'Instagram access token not configured'
      return
    }

    loading.value = true
    error.value = null

    try {
      const fields = 'id,media_type,media_url,permalink,caption,timestamp,thumbnail_url'
      const url = `https://graph.instagram.com/me/media?fields=${fields}&access_token=${token}&limit=${limit}`
      
      const response = await fetch(url)
      
      if (!response.ok) {
        throw new Error(`Instagram API error: ${response.status}`)
      }
      
      const data = await response.json()
      
      if (data.error) {
        throw new Error(data.error.message || 'Failed to fetch Instagram posts')
      }
      
      posts.value = data.data || []
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Failed to load Instagram feed'
      if (import.meta.dev) {
        console.error('Instagram API Error:', e)
      }
    } finally {
      loading.value = false
    }
  }

  return {
    posts: readonly(posts),
    loading: readonly(loading),
    error: readonly(error),
    fetchInstagramPosts
  }
}
