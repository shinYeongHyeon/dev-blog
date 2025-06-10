import { MetadataRoute } from 'next'
import { allPosts } from 'posts/AllPosts'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://shinyeonghyeon.co.kr'
  
  // 기본 페이지들
  const routes = [
    '',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // 블로그 포스트 페이지들
  const postRoutes = allPosts.map((post) => {
    // 날짜 파싱 시도
    let lastModified: string
    try {
      lastModified = new Date(post.datetime).toISOString()
    } catch (e) {
      // 날짜 파싱 실패 시 현재 시간 사용
      lastModified = new Date().toISOString()
    }

    return {
      url: `${baseUrl}/${post.path}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }
  })

  return [...routes, ...postRoutes]
} 