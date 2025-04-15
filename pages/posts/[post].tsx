import React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import map from 'lodash/map';
import filter from 'lodash/filter';

import DefaultLayout from 'layout/DefaultLayout';
import FullLayout from 'layout/FullLayout';
import HeadTitle from 'component/HeadTitle';
import SeriesItem from 'component/SeriesItem';
import { IPost } from 'posts/interfaces/IPost';
import { allPosts } from 'posts/AllPosts';
import MarkdownCode from '../../component/markdown/MarkdownCode';

interface Props {
    post: IPost;
    series?: IPost[];
}

const Post: NextPage<Props> = ({ post, series }) => {
    return (
        <FullLayout>
            <HeadTitle title={'Den`s POSTS'} />
            <DefaultLayout>
                <div className="flex justify-center py-4">
                    <h1 className="text-3xl font-bold">{post.title}</h1>
                </div>
            </DefaultLayout>
            <hr className="border-gray-700 my-4" />
            <div className="grid grid-cols-12 gap-4 my-4">
                <div className="col-span-10">
                    <ReactMarkdown
                        children={post.contents}
                        remarkPlugins={[remarkGfm]}
                        components={{
                            code: ({ node, children, ...props }) => {
                                return (
                                    <MarkdownCode>
                                        <code {...props}>{children}</code>
                                    </MarkdownCode>
                                );
                            },
                            a: ({ children, ...props }) => {
                                return (
                                    <a
                                        {...props}
                                        className="text-blue-400 hover:text-blue-300"
                                    >
                                        {children}
                                    </a>
                                );
                            },
                            strong: ({ children, ...props }) => {
                                return (
                                    <b
                                        {...props}
                                        className="text-[137%]"
                                    >{children}</b>
                                );
                            }
                        }}
                    />
                </div>
                {series && (
                    <div className="col-span-2">
                        <div className="flex justify-center mb-4">
                            <h2 className="text-xl font-semibold">
                                {post.seriesId}
                            </h2>
                        </div>
                        {map(series, ({ path, title }) => {
                            return (
                                <div className="mx-4 mb-2" key={`box-${path}`}>
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
        </FullLayout>
    );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    // @ts-ignore
    const post = filter(allPosts, { path: params?.post })[0];
    const series = post?.seriesId
        ? filter(allPosts, { seriesId: post.seriesId })
        : undefined;

    return {
        props: {
            post,
            series,
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => ({
    paths: map(allPosts, (post) => ({
        params: {
            post: post.path,
        },
    })),
    fallback: false,
});

export default Post;
