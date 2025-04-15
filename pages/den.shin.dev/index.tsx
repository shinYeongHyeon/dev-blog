import React from 'react';
import map from 'lodash/map';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import DefaultLayout from 'layout/DefaultLayout';
import HeadTitle from 'component/HeadTitle';
import PostList from 'component/PostList';
import { allPosts } from 'posts/AllPosts';

const RECENT_STANDARD = 10;

const useDenShinDev = () => {
    const latestPostComponents = map(
        allPosts.slice(0, RECENT_STANDARD),
        ({ path, title, listContents, datetime, tags }) => (
            <div className="my-4 "
                 key={`box-${path}`}>
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

    return {
        models: {
            latestPostComponents,
        },
    };
}

const DenShinDev: NextPage = () => {
    const { models } = useDenShinDev();

    return (
        <DefaultLayout>
            <HeadTitle />
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-2">
                    <Image
                        src={'/den.JPG'}
                        alt={'den.shin.dev'}
                        width={200}
                        height={290}
                        className="rounded-lg"
                    />
                </div>
                <div className="col-span-10">
                    <h1 className="text-3xl font-bold mb-4">Den`s DEV Blog</h1>
                    <p className="text-lg text-gray-300 mb-8">
                        어제 보다 조금이라도 나아지기 위해, 머리가 좋지 않은
                        나는 자잘한 것들이라도 기록하며,,
                    </p>

                    <div className="space-y-4">
                        <div className="border border-gray-700 rounded-lg">
                            <details className="group">
                                <summary className="flex items-center justify-between p-4 cursor-pointer list-none">
                                    <span className="text-lg">
                                        2010.03 ~ 2016.12&nbsp;&nbsp;&nbsp;&nbsp;
                                        <Link 
                                            href={'https://www.cau.ac.kr/index.do'}
                                            className="text-blue-400 hover:text-blue-300"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            중앙대학교 컴퓨터공학부
                                        </Link>
                                    </span>
                                    <span className="transition group-open:rotate-180">
                                        <svg fill="none" height="24" width="24">
                                            <path
                                                d="M6 9l6 6 6-6"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                            />
                                        </svg>
                                    </span>
                                </summary>
                                <div className="p-4 pt-0 text-gray-300">
                                    - 2011년도 학생회 선전부장
                                </div>
                            </details>
                        </div>

                        <div className="border border-gray-700 rounded-lg">
                            <details className="group">
                                <summary className="flex items-center justify-between p-4 cursor-pointer list-none">
                                    <span className="text-lg">
                                        2016.06 ~ 2023.07&nbsp;&nbsp;&nbsp;&nbsp;
                                        <Link 
                                            href={'https://teamo2.kr'}
                                            className="text-blue-400 hover:text-blue-300"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            TeamO2
                                        </Link>
                                    </span>
                                    <span className="transition group-open:rotate-180">
                                        <svg fill="none" height="24" width="24">
                                            <path
                                                d="M6 9l6 6 6-6"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                            />
                                        </svg>
                                    </span>
                                </summary>
                                <div className="p-4 pt-0 text-gray-300">
                                    - 2016.06 ~ 2016.12 : 인턴 및 계약직 <br />
                                    - 2016.12 ~ 2019 : 서비스팀 개발파트 대리  <br />
                                    - 2019 ~ 2021 : 서비스팀 개발파트 파트장  <br />
                                    - 2021 ~ 2022.07 : 개발팀 부팀장  <br />
                                    - 2022.07 ~ 2023.07 : 백엔드개발팀 팀장  <br />
                                </div>
                            </details>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">최근 게시물</h2>
                <div className="space-y-4">
                    {models.latestPostComponents}
                </div>
            </div>
        </DefaultLayout>
    );
};

export default DenShinDev;
