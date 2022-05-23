import React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface Props {
    tag: string;
}

const HashtagList: React.FC<Props> = ({ tag }) => {
    return (
        <Box>
            <Link href={`/posts?tag=${tag}`}>
                <Typography variant={'h6'}>
                    <small>#{tag}</small>
                </Typography>
            </Link>
        </Box>
    );
};

export default HashtagList;
