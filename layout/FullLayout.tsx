import React from 'react';

export interface Props {
    children: React.ReactNode;
}

const FullLayout: React.FC<Props> = ({ children }) => {
    return (
        <div className="w-full">
            <div className="px-4 pt-4">
                {children}
            </div>
        </div>
    );
};

export default FullLayout;
