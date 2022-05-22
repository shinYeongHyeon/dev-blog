import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import React from 'react';
import { NextPage } from 'next';
import map from 'lodash/map';
import { Typography } from '@mui/material';

import DefaultHead from 'component/DefaultHead';
import DefaultLayout from 'layout/DefaultLayout';
import { allPosts } from 'posts/AllPosts';
import PostList from '../../component/PostList';

const Posts: NextPage = () => {
    const posts = map(
        allPosts,
        ({ path, title, listContents, datetime, tags }) => {
            return (
                <Box my={2} key={`box-${path}`}>
                    <PostList
                        key={path}
                        title={title}
                        contents={listContents}
                        path={path}
                        datetime={datetime}
                        tags={tags}
                    />
                </Box>
            );
        },
    );

    return (
        <DefaultLayout>
            <DefaultHead title={'Den`s POSTS'} />
            <Typography variant={'h1'}>POSTS</Typography>
            <Box py={5}>
                <Divider />
            </Box>
            {posts}
        </DefaultLayout>
    );
};

export default Posts;
