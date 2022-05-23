import React from 'react';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';

export interface Props {
    children: React.ReactNode;
}

const FullLayout: React.FC<Props> = ({ children }) => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Box px={1} pt={2}>
                    {children}
                </Box>
            </Grid>
        </Grid>
    );
};

export default FullLayout;
