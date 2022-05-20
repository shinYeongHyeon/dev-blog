import React from 'react';
import { Box } from '@mui/material';
import Container from '@mui/material/Container';

export interface Props {
    children: React.ReactNode;
}

const DefaultLayout: React.FC<Props> = ({ children }) => {
    return (
        <Container>
            <Box pt={2}>{children}</Box>
        </Container>
    );
};

export default DefaultLayout;
