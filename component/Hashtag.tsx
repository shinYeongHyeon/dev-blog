import React from 'react';

interface Props {
    tag: string;
}

const Hashtag: React.FC<Props> = ({ tag }) => {
    return (
        <span className="mx-1 text-sm text-gray-400">
            #{tag}
        </span>
    );
};

export default Hashtag;
