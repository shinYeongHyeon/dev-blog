import { NextResponse } from 'next/server'
import { allPosts } from 'posts/AllPosts'

export async function GET() {
  const baseUrl = 'https://shinyeonghyeon.co.kr'

  const items = allPosts.map(post => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${baseUrl}/${post.path}</link>
      <guid>${baseUrl}/${post.path}</guid>
      <pubDate>${new Date(post.datetime).toUTCString()}</pubDate>
      <description><![CDATA[${post.listContents}]]></description>
    </item>
  `).join('')

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>Den's Dev Blog</title>
      <link>${baseUrl}</link>
      <description>개발 관련 지식과 경험을 공유하는 기술 블로그입니다.</description>
      <language>ko</language>
      ${items}
    </channel>
  </rss>`

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=UTF-8',
    },
  })
} 