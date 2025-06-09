import Link from 'next/link'
import { Metadata } from 'next'
import { allPosts } from 'posts/AllPosts'
import PostList from 'component/PostList'
import HashtagList from 'component/HashtagList'
import SeriesList from 'component/SeriesList'

export const metadata: Metadata = {
  title: 'Den`s Dev Blog',
  description: 'Den Shin 의 블로그입니다.',
  openGraph: {
    title: 'Home | Den`s Dev Blog',
    description: 'Den Shin의 블로그입니다.',
  },
}

interface Props {
  searchParams: Promise<{ tag?: string; series?: string }>;
}

export default async function Home({ searchParams }: Props) {
  const { tag, series } = await searchParams;

  const posts = tag
    ? allPosts.filter(({ tags }) => tags.includes(tag))
    : series
    ? allPosts.filter(({ seriesId }) => seriesId === series)
    : allPosts

  const hashtags = [...new Set(allPosts.flatMap(({ tags }) => tags))]
  const seriesList = [...new Set(allPosts.map(({ seriesId }) => seriesId))].filter((series): series is string => series !== undefined)

  const postComponents = posts.map(({ path, title, listContents, datetime, tags }) => (
    <PostList
      key={path}
      path={path}
      title={title}
      contents={listContents}
      datetime={datetime}
      tags={tags}
    />
  ))

  const postCount = posts.length;

  const hashtagComponents = hashtags.map((tag) => (
    <div className="ml-2" key={`box-${tag}`}>
      <HashtagList key={tag} tag={tag} />
    </div>
  ))

  const seriesComponents = seriesList ? seriesList.map((aSeries: string) => (
    <div className="mx-2" key={`box-${aSeries}`}>
      <SeriesList key={aSeries} series={aSeries} />
    </div>
  )) : [];

  return (
    <div>
      <div className="flex items-baseline">
        <div className="grid grid-cols-12 gap-4 w-full">
          <div className="col-start-3 col-span-8 flex items-baseline">
            <h1 className="text-3xl text-white">게시글</h1>&nbsp;<span className="text-sm text-white">({postCount})</span>
          </div>
        </div>
        
      </div>
      <div className="py-4"/>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-2">
          <div className="sticky top-4 py-4 border-2 border-gray-600 rounded-lg shadow-lg shadow-gray-800/50 bg-gray-800/50 backdrop-blur-sm">
            <div className="flex justify-center mb-4">
              <h2 className="text-xl font-bold text-white">Tags</h2>
            </div>
            <Link 
              href="/"
              className="text-sm font-medium text-white hover:text-gray-300 block mb-2 ml-2"
            >
              #전체
            </Link>
            <div className="space-y-2">
              {hashtagComponents}
            </div>
          </div>
        </div>
        <div className="col-span-8">
          <div className="space-y-4">
            {postComponents}
          </div>
        </div>
        <div className="col-span-2">
          <div className="sticky top-4 py-4 border-2 border-gray-600 rounded-lg shadow-lg shadow-gray-800/50 bg-gray-800/50 backdrop-blur-sm">
            <div className="flex justify-center mb-4">
              <h2 className="text-xl font-bold text-white">Series</h2>
            </div>
            <div className="space-y-2">
              {seriesComponents}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 