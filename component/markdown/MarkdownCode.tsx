import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { darkTheme } from '../../styles/theme';

interface Props {
    children: React.ReactNode | React.ReactNode[];
}

const MarkdownCode: React.FC<Props> = ({ children }) => {
    return (
        <Grid container>
            <Grid item pl={2} xs={12}>
                <Box
                    sx={{ whiteSpace: 'normal' }}
                    p={1}
                    bgcolor={darkTheme.palette.grey['700']}
                    fontSize={darkTheme.typography.body2.fontSize}
                    fontWeight={darkTheme.typography.body2.fontWeight}
                >
                    {children}
                </Box>
            </Grid>
        </Grid>
    );
};

export default MarkdownCode;
