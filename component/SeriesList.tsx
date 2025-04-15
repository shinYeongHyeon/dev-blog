import React from 'react';
import Link from 'next/link';

interface Props {
    series: string;
}

const SeriesList: React.FC<Props> = ({ series }) => {
    return (
        <div>
            <Link 
                href={`/posts?series=${series}`}
                className="text-lg font-medium text-white hover:text-gray-300"
            >
                <span className="text-sm">{series}</span>
            </Link>
        </div>
    );
};

export default SeriesList;
