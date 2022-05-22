import ReactMarkdown from 'react-markdown';
import { NextPage } from 'next';
import remarkGfm from 'remark-gfm';
import { Typography } from '@mui/material';

import DefaultHead from 'component/DefaultHead';
import DefaultLayout from 'layout/DefaultLayout';
import { abcd } from 'posts/abcd';

const Posts: NextPage = () => {
    console.log('nextpage');
    return (
        <DefaultLayout>
            <DefaultHead title={'Den`s POSTS'} />
            <Typography variant={'h1'}>POSTS</Typography>
            <ReactMarkdown
                children={abcd.contents}
                remarkPlugins={[remarkGfm]}
            />
        </DefaultLayout>
    );
};

export default Posts;
