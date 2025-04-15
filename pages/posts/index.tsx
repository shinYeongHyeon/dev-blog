import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import uniq from 'lodash/uniq';
import map from 'lodash/map';
import filter from 'lodash/filter';
import findIndex from 'lodash/findIndex';
import flattenDeep from 'lodash/flattenDeep';
import Link from 'next/link';

import DefaultLayout from 'layout/DefaultLayout';
import FullLayout from 'layout/FullLayout';
import HeadTitle from 'component/HeadTitle';
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
            <div className="my-4" key={`box-${path}`}>
                <PostList
                    key={path}
                    title={title}
                    contents={listContents}
                    path={path}
                    datetime={datetime}
                    tags={tags}
                />
            </div>
        ),
    );
    const hashtagComponents = map(hashtags, (tag) => (
        <div className="ml-2" key={`box-${tag}`}>
            <HashtagList key={tag} tag={tag} />
        </div>
    ));
    const seriesComponents = map(series, (aSeries: string) => (
        <div className="mx-2" key={`box-${aSeries}`}>
            <SeriesList key={aSeries} series={aSeries} />
        </div>
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
            <HeadTitle title={'Den`s POSTS'} />
            <DefaultLayout>
                <h1 className="text-3xl font-bold">POSTS</h1>
            </DefaultLayout>
            <div className="py-8">
                <hr className="border-gray-700" />
            </div>
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-2">
                    <div className="flex justify-center mb-4">
                        <h2 className="text-xl font-semibold">Tags</h2>
                    </div>
                    <Link 
                        href="/posts"
                        className="block text-center text-xl font-semibold text-white hover:text-gray-300 mb-4"
                    >
                        전체 보기
                    </Link>
                    <div className="space-y-2">
                        {models.hashtagComponents}
                    </div>
                </div>
                <div className="col-span-8">
                    <div className="space-y-4">
                        {models.postComponents}
                    </div>
                </div>
                <div className="col-span-2">
                    <div className="flex justify-center mb-4">
                        <h2 className="text-xl font-semibold">Series</h2>
                    </div>
                    <div className="space-y-2">
                        {models.seriesComponents}
                    </div>
                </div>
            </div>
        </FullLayout>
    );
};

export default Posts;
