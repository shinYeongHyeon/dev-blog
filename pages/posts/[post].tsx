import React from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import map from 'lodash/map';
import filter from 'lodash/filter';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import DefaultLayout from 'layout/DefaultLayout';
import FullLayout from 'layout/FullLayout';
import HeadTitle from 'component/HeadTitle';
import SeriesItem from 'component/SeriesItem';
import { IPost } from 'posts/IPost';
import { allPosts } from 'posts/AllPosts';
import MarkdownCode from '../../component/markdown/MarkdownCode';
import { darkTheme } from '../../styles/theme';

interface Props {
    post: IPost;
    series?: IPost[];
}

const Post: NextPage<Props> = ({ post, series }) => {
    return (
        <FullLayout>
            <HeadTitle title={'Den`s POSTS'} />
            <DefaultLayout>
                <Box display={'flex'} justifyContent={'center'} py={1}>
                    <Typography variant={'h1'}>{post.title}</Typography>
                </Box>
            </DefaultLayout>
            <Divider />
            <Grid container spacing={1} my={1}>
                <Grid item xs={10}>
                    <ReactMarkdown
                        children={post.contents}
                        remarkPlugins={[remarkGfm]}
                        components={{
                            code({ node, children, ...props }) {
                                return (
                                    <MarkdownCode>
                                        <code {...props}>{children}</code>
                                    </MarkdownCode>
                                );
                            },
                            a({ children, ...props }) {
                                return (
                                    <a
                                        {...props}
                                        style={{
                                            color: darkTheme.palette.info.main,
                                        }}
                                    >
                                        {children}
                                    </a>
                                );
                            },
                        }}
                    />
                </Grid>
                {series && (
                    <Grid item xs={2}>
                        <Box display={'flex'} justifyContent={'center'}>
                            <Typography variant={'h6'}>
                                {post.seriesId}
                            </Typography>
                        </Box>
                        {map(series, ({ path, title }) => {
                            return (
                                <Box mx={1} key={`box-${path}`}>
                                    <SeriesItem
                                        key={path}
                                        path={path}
                                        title={title}
                                    />
                                </Box>
                            );
                        })}
                    </Grid>
                )}
            </Grid>
        </FullLayout>
    );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    // @ts-ignore
    const post = (await import(`/posts/${params?.post}`))[params?.post];
    const series = filter(
        allPosts,
        ({ seriesId }) => seriesId && seriesId === post.seriesId,
    );

    return {
        props: {
            post,
            series,
        },
    };
};

export const getStaticPaths: GetStaticPaths = async () => ({
    paths: map(
        map(allPosts, ({ path }) => path),
        (postPath) => ({
            params: {
                post: postPath,
            },
        }),
    ),
    fallback: false,
});

export default Post;
