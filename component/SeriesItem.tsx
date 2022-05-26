import React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface Props {
    title: string;
    path: string;
}

const SeriesItem: React.FC<Props> = ({ title, path }) => {
    return (
        <Box>
            <Link href={`/posts/${path}`}>
                <Typography variant={'h6'}>
                    <small>{title}</small>
                </Typography>
            </Link>
        </Box>
    );
};

export default SeriesItem;
