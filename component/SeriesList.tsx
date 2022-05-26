import React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface Props {
    series: string;
}

const SeriesList: React.FC<Props> = ({ series }) => {
    return (
        <Box>
            <Link href={`/posts?series=${series}`}>
                <Typography variant={'h6'}>
                    <small>{series}</small>
                </Typography>
            </Link>
        </Box>
    );
};

export default SeriesList;
