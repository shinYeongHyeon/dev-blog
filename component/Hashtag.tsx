import Box from '@mui/material/Box';
import React from 'react';

interface Props {
    tag: string;
}

const Hashtag: React.FC<Props> = ({ tag }) => {
    return (
        <Box mx={1}>
            <small>#{tag}</small>
        </Box>
    );
};

export default Hashtag;
