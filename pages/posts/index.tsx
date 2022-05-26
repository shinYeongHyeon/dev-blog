import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import uniq from 'lodash/uniq';
import map from 'lodash/map';
import filter from 'lodash/filter';
import findIndex from 'lodash/findIndex';
import flattenDeep from 'lodash/flattenDeep';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

import DefaultLayout from 'layout/DefaultLayout';
import FullLayout from 'layout/FullLayout';
import DefaultHead from 'component/DefaultHead';
import PostList from 'component/PostList';
import HashtagList from 'component/HashtagList';
import SeriesList from 'component/SeriesList';
import { allPosts } from 'posts/AllPosts';

const usePosts = (
    searchTag?: string | undefined,
    searchSeries?: string | undefined,
) => {
    const posts = searchTag
        ? filter(
              allPosts,
              ({ tags }) => findIndex(tags, (tag) => tag === searchTag) !== -1,
          )
        : searchSeries
        ? filter(allPosts, ({ seriesId }) => seriesId === searchSeries)
        : allPosts;
    const hashtags = uniq(flattenDeep(map(allPosts, ({ tags }) => tags)));
    const series = uniq(map(allPosts, ({ seriesId }) => seriesId));

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
    const seriesComponents = map(series, (aSeries: string) => (
        <Box mx={1} key={`box-${aSeries}`}>
            <SeriesList key={aSeries} series={aSeries} />
        </Box>
    ));

    return {
        models: {
            postComponents,
            hashtagComponents,
            seriesComponents,
        },
    };
};

const Posts: NextPage = () => {
    const router = useRouter();
    const { tag, series } = router.query;
    const { models } = usePosts(tag as string, series as string);

    return (
        <FullLayout>
            <DefaultHead title={'Den`s POSTS'} />
            <DefaultLayout>
                <Typography variant={'h1'}>POSTS</Typography>
            </DefaultLayout>
            <Box py={5}>
                <Divider />
            </Box>
            <Grid container spacing={1}>
                <Grid item xs={2}>
                    <Box display={'flex'} justifyContent={'center'}>
                        <Typography variant={'h6'}>Tags</Typography>
                    </Box>
                    <Link href={`/posts/`}>
                        <Typography variant={'h6'}>전체 보기</Typography>
                    </Link>
                    {models.hashtagComponents}
                </Grid>
                <Grid item xs={8}>
                    <Box>{models.postComponents}</Box>
                </Grid>
                <Grid item xs={2}>
                    <Box display={'flex'} justifyContent={'center'}>
                        <Typography variant={'h6'}>Series</Typography>
                    </Box>
                    <Link href={`/posts/`}>
                        <Typography variant={'h6'}>전체 보기</Typography>
                    </Link>
                    {models.seriesComponents}
                </Grid>
            </Grid>
        </FullLayout>
    );
};

export default Posts;
