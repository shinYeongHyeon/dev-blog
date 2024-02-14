import { NextPage } from 'next';
import GitHubIcon from '@mui/icons-material/GitHub';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import BookIcon from '@mui/icons-material/Book';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

import DefaultLayout from 'layout/DefaultLayout';
import HeadTitle from 'component/HeadTitle';

const Contact: NextPage = () => {
    return (
        <DefaultLayout>
            <HeadTitle title={'Den`s CONTACT'} />
            <Typography variant={'h1'}>CONTACT</Typography>
            <Box mt={2}>
                <Typography variant={'subtitle1'}>
                    <Box>
                        <Link
                            href={'https://github.com/shinYeongHyeon'}
                            underline={'none'}
                        >
                            <GitHubIcon /> https://github.com/shinYeongHyeon
                        </Link>
                    </Box>
                    <Box>
                        <Link
                            href={'mailto:den.shin.dev@gmail.com'}
                            underline={'none'}
                        >
                            <ContactMailIcon /> den.shin.dev@gmail.com
                        </Link>
                    </Box>
                    <Box>
                        <Link
                            href={'https://brunch.co.kr/@7dd32b1c9b814e9'}
                            underline={'none'}
                        >
                            <BookIcon /> https://brunch.co.kr/@7dd32b1c9b814e9
                        </Link>
                    </Box>
                </Typography>
            </Box>
        </DefaultLayout>
    );
};

export default Contact;
