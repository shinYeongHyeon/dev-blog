import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import map from 'lodash/map';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Typography } from '@mui/material';

import DefaultHead from 'component/DefaultHead';
import DefaultLayout from 'layout/DefaultLayout';
import { IPost } from 'posts/IPost';
import { postPaths } from 'posts/PostPaths';

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

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: map(postPaths, (postPath) => ({
            params: {
                post: postPath,
            },
        })),
        fallback: false,
    };
};

export default Post;
