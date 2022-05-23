import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import uniq from 'lodash/uniq';
import map from 'lodash/map';
import filter from 'lodash/filter';
import findIndex from 'lodash/findIndex';
import flattenDeep from 'lodash/flattenDeep';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { Typography } from '@mui/material';

import DefaultLayout from 'layout/DefaultLayout';
import FullLayout from 'layout/FullLayout';
import DefaultHead from 'component/DefaultHead';
import PostList from 'component/PostList';
import HashtagList from 'component/HashtagList';
import { allPosts } from 'posts/AllPosts';

const usePosts = (searchTag?: string | undefined) => {
    const posts = searchTag
        ? filter(
              allPosts,
              ({ tags }) => findIndex(tags, (tag) => tag === searchTag) !== -1,
          )
        : allPosts;
    const hashtags = uniq(flattenDeep(map(allPosts, ({ tags }) => tags)));

    const postComponents = map(
        posts,
        ({ path, title, listContents, datetime, tags }) => (
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
        ),
    );
    const hashtagComponents = map(hashtags, (tag) => (
        <Box ml={1} key={`box-${tag}`}>
            <HashtagList key={tag} tag={tag} />
        </Box>
    ));

    return {
        models: {
            postComponents,
            hashtagComponents,
        },
    };
};

const Posts: NextPage = () => {
    const router = useRouter();
    const { tag } = router.query;
    const { models } = usePosts(tag as string);

    return (
        <FullLayout>
            <DefaultHead title={'Den`s POSTS'} />
            <DefaultLayout>
                <Typography variant={'h1'}>POSTS</Typography>
            </DefaultLayout>
            <Box py={5}>
                <Divider />
            </Box>
            <Grid container>
                <Grid item xs={2}>
                    <Link href={`/posts/`}>
                        <Typography variant={'h6'}>전체 보기</Typography>
                    </Link>
                    {models.hashtagComponents}
                </Grid>
                <Grid item xs={8}>
                    {models.postComponents}
                </Grid>
            </Grid>
        </FullLayout>
    );
};

export default Posts;
