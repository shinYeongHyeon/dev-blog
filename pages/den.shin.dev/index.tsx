import { NextPage } from 'next';
import { Typography } from '@mui/material';

import DefaultLayout from 'layout/DefaultLayout';
import DefaultHead from '../../component/DefaultHead';

const DenShinDev: NextPage = () => {
    return (
        <DefaultLayout>
            <DefaultHead />
            <Typography variant={'h1'}>Den</Typography>
        </DefaultLayout>
    );
};

export default DenShinDev;
