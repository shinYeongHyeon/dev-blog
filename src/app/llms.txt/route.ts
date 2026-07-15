import { NextResponse } from 'next/server'
import { parseKoreanDatetime } from 'lib/date'
import { allPosts } from 'posts/AllPosts'

export async function GET() {
  const baseUrl = 'https://shinyeonghyeon.co.kr'

  const byTag = new Map<string, typeof allPosts>()
  for (const post of allPosts) {
    const tag = post.tags[0] ?? 'Etc'
    byTag.set(tag, [...(byTag.get(tag) ?? []), post])
  }

  const sections = [...byTag.entries()].map(([tag, posts]) => {
    const items = posts.map((post) => {
      const updated = post.updatedDatetime ?? post.datetime
      const date = parseKoreanDatetime(updated)?.toISOString().slice(0, 10)
      return `- [${post.title}](${baseUrl}/${post.path})${date ? ` (${date})` : ''}: ${post.listContents.replace(/\s+/g, ' ').trim()}`
    }).join('\n')
    return `## ${tag}\n\n${items}`
  }).join('\n\n')

  const body = `# Den's Dev Blog

> 개발하며 만난 에러 해결법과 Golang, Docker, Svelte, NestJS 등 백엔드/프론트엔드 기술을 다루는 한국어 개발 블로그.
> 운영자: Den Shin (${baseUrl}/contact)

${sections}
`

  return new NextResponse(body, {
    headers: {
      'Content-Type': 'text/plain; charset=UTF-8',
    },
  })
}
