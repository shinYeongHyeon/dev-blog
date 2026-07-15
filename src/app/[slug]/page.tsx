import AdUnit from 'component/AdUnit'
import PostMarkdown from 'component/markdown/PostMarkdown'
import SeriesItem from 'component/SeriesItem'
import { parseKoreanDatetime } from 'lib/date'
import { splitMarkdownAtMidHeading } from 'lib/markdown'
import map from 'lodash/map'
import { Metadata } from 'next'
import { allPosts } from 'posts/AllPosts'
import { IPost } from 'posts/interfaces/IPost'

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post.path }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = allPosts.find((post) => post.path === slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested post could not be found.',
    }
  }

  return {
    title: post.title,
    description: post.listContents,
    keywords: post.keywords || [],
    alternates: {
      canonical: `/${post.path}`,
    },
    openGraph: {
      title: post.title,
      description: post.listContents,
      url: `/${post.path}`,
      type: 'article',
      publishedTime: parseKoreanDatetime(post.datetime)?.toISOString(),
      tags: post.keywords ? post.keywords : post.tags,
    },
  }
}

export default async function Post({ params }: Props) {
  const { slug } = await params;
  const post = allPosts.find((post) => post.path === slug)
  let series: IPost[] = [];

  if (!post) {
    return <div>Post not found</div>
  }

  if (post.seriesId) {
    series = allPosts.filter((otherPost) => post.seriesId === otherPost.seriesId)
  }

  const splitContents = splitMarkdownAtMidHeading(post.contents)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.listContents,
    datePublished: parseKoreanDatetime(post.datetime)?.toISOString(),
    author: {
      '@type': 'Person',
      name: 'Den Shin',
      url: 'https://shinyeonghyeon.co.kr',
    },
    mainEntityOfPage: `https://shinyeonghyeon.co.kr/${post.path}`,
    keywords: post.keywords?.join(', '),
  }

  return (
    <article className="prose prose-invert max-w-none">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="text-2xl font-bold text-white">{post.title}</h1>
      <div className="text-gray-400 mb-8">
        <time dateTime={post.datetime} className="text-xs text-gray-400">{post.datetime}</time>
        <div className="flex gap-2 mt-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-800 rounded-md text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4 my-4">
        <div className="col-span-10 text-gray-100">
          {splitContents ? (
            <>
              <PostMarkdown>{splitContents[0]}</PostMarkdown>
              <AdUnit slot="2571849670" format="fluid" layout="in-article" />
              <PostMarkdown>{splitContents[1]}</PostMarkdown>
            </>
          ) : (
            <PostMarkdown>{post.contents}</PostMarkdown>
          )}
          <div className="mt-8">
            <AdUnit slot="7632604665" fullWidthResponsive />
          </div>
        </div>
        <div className="col-span-2">
        {series.length > 0 && (
            <div className="sticky top-4 border-2 px-4 py-2 border-gray-600 rounded-lg shadow-lg shadow-gray-800/50 bg-gray-800/50 backdrop-blur-sm">
                <div className="flex justify-center mb-4">
                    <h2 className="text-sm font-bold text-white">
                        {post.seriesId}
                    </h2>
                </div>
                {map(series, ({ path, title }) => {
                    return (
                        <div className="mx-2 mb-2 text-xs flex items-center" key={`box-${path}`}>
                            <SeriesItem
                                key={path}
                                path={path}
                                title={title}
                            />
                        </div>
                    );
                })}
            </div>
        )}
        </div>
      </div>
    </article>
  )
} 