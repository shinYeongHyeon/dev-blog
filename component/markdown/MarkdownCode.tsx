import React from 'react';

interface Props {
    children: React.ReactNode | React.ReactNode[];
}

const MarkdownCode: React.FC<Props> = ({ children }) => {
    return (
        <div className="w-full">
            <div className="pl-4">
                <div className="p-2 bg-gray-700 text-sm font-normal whitespace-pre-wrap rounded-lg">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default MarkdownCode;
