import React from 'react';
import Link from 'next/link';

interface Props {
    title: string;
    path: string;
}

const SeriesItem: React.FC<Props> = ({ title, path }) => {
    return (
        <div>
            <Link 
                href={`/posts/${path}`}
                className="text-lg font-medium text-white hover:text-gray-300"
            >
                <span className="text-sm">{title}</span>
            </Link>
        </div>
    );
};

export default SeriesItem;
