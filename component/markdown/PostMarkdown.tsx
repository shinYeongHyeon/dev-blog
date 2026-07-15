import MarkdownCode from 'component/markdown/MarkdownCode'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

export default function PostMarkdown({ children }: { children: string }) {
  return (
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
      {children}
    </ReactMarkdown>
  )
}
