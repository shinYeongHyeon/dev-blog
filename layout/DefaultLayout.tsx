import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export interface Props {
    children: React.ReactNode;
}

const DefaultLayout: React.FC<Props> = ({ children }) => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <Container>
                    <Box pt={2}>{children}</Box>
                </Container>
            </Grid>
        </Grid>
    );
};

export default DefaultLayout;
