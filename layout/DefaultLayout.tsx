import React from 'react';

export interface Props {
    children: React.ReactNode;
}

const DefaultLayout: React.FC<Props> = ({ children }) => {
    return (
        <div className="w-full">
            <div className="max-w-7xl mx-auto px-4">
                <div className="pt-4">{children}</div>
            </div>
        </div>
    );
};

export default DefaultLayout;
