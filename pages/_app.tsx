import { NextPage } from 'next';
import React from 'react';
import { useMemo, useState } from 'react';
import type { AppProps } from 'next/app';
import map from 'lodash/map';
import Link from 'next/link';

import 'styles/global.css';

interface Menu {
    icon?: React.ReactNode;
    label: string;
    path: string;
}

const menus: Menu[] = [
    {
        label: 'DEN.SHIN.DEV',
        path: '/den.shin.dev',
    },
    {
        label: 'POSTS',
        path: '/posts',
    },
    {
        label: 'CONTACT',
        path: '/contact',
    },
];

const useApp = () => {
    const [activeTab, setActiveTab] = useState(0);

    const onTabClick = (index: number) => {
        setActiveTab(index);
    };

    return {
        model: {
            activeTab,
        },
        operations: {
            onTabClick,
        },
    };
};

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
    const { model, operations } = useApp();

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <nav className="bg-gray-800 shadow-lg">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex space-x-4">
                        {menus.map((menu, index) => (
                            <Link
                                key={menu.label}
                                href={menu.path}
                                className={`px-3 py-2 rounded-md text-sm font-medium ${
                                    model.activeTab === index
                                        ? 'bg-gray-900 text-white'
                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                }`}
                                onClick={() => operations.onTabClick(index)}
                            >
                                {menu.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
            <main className="max-w-7xl mx-auto px-4 py-6">
                <Component {...pageProps} />
            </main>
        </div>
    );
};

export default App;
