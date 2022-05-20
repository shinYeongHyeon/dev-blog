import { Typography } from '@mui/material';
import { NextPage } from 'next';
import DefaultHead from '../../component/DefaultHead';
import DefaultLayout from '../../layout/DefaultLayout';

const Posts: NextPage = () => {
    return (
        <DefaultLayout>
            <DefaultHead title={'Den`s POSTS'} />
            <Typography variant={'h1'}>POSTS</Typography>
        </DefaultLayout>
    );
};

export default Posts;
