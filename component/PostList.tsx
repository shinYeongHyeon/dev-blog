import React from 'react';
import map from 'lodash/map';
import Link from 'next/link';
import Hashtag from './Hashtag';

interface Props {
    title: string;
    contents: string;
    path: string;
    datetime: string;
    tags: string[];
    // TODO: Add Thumbnail
}

const PostList: React.FC<Props> = ({
    title,
    contents,
    path,
    datetime,
    tags,
}) => {
    return (
        <div className="mb-8">
            <div className="flex items-center mb-2">
                <Link 
                    href={`/${path}`}
                    className="text-xl font-semibold text-white hover:text-gray-300"
                >
                    {title}
                </Link>
                <span className="ml-2 text-sm text-gray-400">
                    {datetime}
                </span>
            </div>
            <div className="whitespace-normal text-gray-300 mb-4">
                {contents}
            </div>
            <div className="flex justify-end space-x-2">
                {map(tags, (tag) => (
                    <Hashtag key={tag} tag={tag} />
                ))}
            </div>
        </div>
    );
};

export default PostList;
