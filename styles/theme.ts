import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
    typography: {
        fontFamily:
            'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,' +
            " 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR'," +
            " 'Malgun Gothic', sans-serif",
        h1: {
            fontSize: '1.5rem',
            fontWeight: 'bold',
        },
        h2: {
            fontSize: '1.25rem',
            fontWeight: 'bold',
        },
        h3: {
            fontSize: '1.125rem',
            fontWeight: 'bold',
        },
        h4: {
            fontSize: '1.125rem',
            fontWeight: 'normal',
        },
        h5: {
            fontSize: '0.875rem',
            fontWeight: 'bold',
        },
        h6: {
            fontSize: '0.875rem',
            fontWeight: 'normal',
        },
        subtitle1: {
            fontSize: '0.8125rem',
            fontWeight: 'bold',
        },
        subtitle2: {
            fontSize: '0.8125rem',
            fontWeight: 'normal',
        },
        body1: {
            fontSize: '0.625rem',
            fontWeight: 'bold',
        },
        body2: {
            fontSize: '0.625rem',
            fontWeight: 'normal',
        },
        button: {
            fontSize: '0.8125',
            fontWeight: 'bold',
        },
    },
    palette: {
        mode: 'dark',
    },
});
