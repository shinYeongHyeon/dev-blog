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
                href={`/${path}`}
                className="font-medium text-white hover:text-gray-300 underline"
            >
                <span className="text-xs">{title}</span>
            </Link>
        </div>
    );
};

export default SeriesItem;
