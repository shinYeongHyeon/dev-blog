import React from 'react';
import Link from 'next/link';

interface Props {
    tag: string;
}

const HashtagList: React.FC<Props> = ({ tag }) => {
    return (
        <div>
            <Link 
                href={`/?tag=${tag}`}
                className="text-sm font-medium text-white hover:text-gray-300"
            >
                <span>#{tag}</span>
            </Link>
        </div>
    );
};

export default HashtagList;
