import MarkdownCode from 'component/markdown/MarkdownCode'
import SeriesItem from 'component/SeriesItem'
import map from 'lodash/map'
import { Metadata } from 'next'
import { allPosts } from 'posts/AllPosts'
import { IPost } from 'posts/interfaces/IPost'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

interface Props {
  params: Promise<{ slug: string }>;
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
    openGraph: {
      title: post.title,
      description: post.listContents,
      type: 'article',
      publishedTime: post.datetime,
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

  return (
    <article className="prose prose-invert max-w-none">
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
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              code: ({ node, children, ...props }: any) => {
                const content = String(children);
                
                if (content.includes('\n')) {
                  return (
                    <MarkdownCode>
                      <code {...props}>{children}</code>
                    </MarkdownCode>
                  );
                }
                
                return (
                  <code className="px-1.5 py-0.5 bg-gray-800 rounded text-sm font-mono">
                    {children}
                  </code>
                );
              },
              a: ({ children, ...props }) => {
                  return (
                      <a
                          {...props}
                          className="text-blue-300 hover:text-blue-300 hover:underline"
                      >
                          {children}
                      </a>
                  );
              },
              strong: ({ children, ...props }) => {
                  return (
                      <b
                          {...props}
                          className="text-[105%]"
                      >{children}</b>
                  );
              },
            }}
          >
            {post.contents}
          </ReactMarkdown>
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