'use client'

import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Props {
    children: React.ReactNode | React.ReactNode[];
}

const MarkdownCode: React.FC<Props> = ({ children }) => {
    const getCodeContent = () => {
        const codeElement = React.Children.toArray(children)[0] as React.ReactElement<{ children: string }>;
        return codeElement.props.children;
    };

    return (
        <div className="w-full my-4">
            <div className="relative">
                <div 
                    className="absolute -top-3 left-2 px-2 py-1 bg-gray-600 text-gray-300 text-xs rounded-t-lg cursor-pointer"
                    onClick={() => {
                        navigator.clipboard.writeText(getCodeContent());
                        
                        toast.success('Copied!', {
                            position: "bottom-center",
                            autoClose: 2000,
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                        });
                    }}
                >
                    Code
                </div>
                <div className="p-4 bg-gray-800 z-20 text-gray-200 rounded-lg text-sm font-mono border border-gray-700 shadow-lg">
                    <div className="overflow-x-auto">
                        <code>{children}</code>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarkdownCode;
