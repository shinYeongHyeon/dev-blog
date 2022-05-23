import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import map from 'lodash/map';
import { Typography } from '@mui/material';

import DefaultLayout from 'layout/DefaultLayout';
import DefaultHead from 'component/DefaultHead';
import { IPost } from 'posts/IPost';
import { allPosts } from 'posts/AllPosts';

interface Props {
    post: IPost;
}

const Post: NextPage<Props> = ({ post }) => {
    return (
        <DefaultLayout>
            <DefaultHead title={'Den`s POSTS'} />
            <Typography variant={'h1'}>POSTS</Typography>
            <ReactMarkdown
                children={post.contents}
                remarkPlugins={[remarkGfm]}
            />
        </DefaultLayout>
    );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    // @ts-ignore
    const post = (await import(`/posts/${params?.post}`))[params?.post];

    return {
        props: {
            post,
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
