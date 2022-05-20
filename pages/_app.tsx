import { NextPage } from 'next';
import React from 'react';
import { useMemo, useState } from 'react';
import type { AppProps } from 'next/app';
import map from 'lodash/map';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import FeedIcon from '@mui/icons-material/Feed';
import ContactsIcon from '@mui/icons-material/Contacts';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import 'styles/global.css';
import { darkTheme } from 'styles/theme';

interface Menu {
    icon?: any;
    label: string;
    path: string;
}

const menus: Menu[] = [
    {
        label: 'DEN.SHIN.DEV',
        path: '/den.shin.dev',
    },
    {
        icon: <FeedIcon />,
        label: 'POSTS',
        path: '/posts',
    },
    {
        icon: <ContactsIcon />,
        label: 'CONTACT',
        path: '/contact',
    },
];

const useApp = () => {
    const [tabValue, setTabValue] = useState(0);
    const tabs = useMemo(
        () =>
            map(menus, (menu: Menu) => (
                <Tab
                    key={menu.label}
                    icon={menu?.icon}
                    label={menu.label}
                    href={menu.path}
                    disableRipple={true}
                />
            )),
        [],
    );
    const onTabClick = (e: React.SyntheticEvent, v: any) => {
        setTabValue(v);
    };

    return {
        model: {
            tabValue,
            tabs,
        },
        operations: {
            onTabClick,
        },
    };
};

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
    const { model, operations } = useApp();

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <AppBar position="static">
                <Tabs value={model.tabValue} onChange={operations.onTabClick}>
                    {model.tabs}
                </Tabs>
            </AppBar>
            <Component {...pageProps} />
        </ThemeProvider>
    );
};

export default App;
