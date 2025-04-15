import React from 'react';
import Link from 'next/link';

interface Props {
    tag: string;
}

const HashtagList: React.FC<Props> = ({ tag }) => {
    return (
        <div>
            <Link 
                href={`/posts?tag=${tag}`}
                className="text-lg font-medium text-white hover:text-gray-300"
            >
                <span className="text-sm">#{tag}</span>
            </Link>
        </div>
    );
};

export default HashtagList;
