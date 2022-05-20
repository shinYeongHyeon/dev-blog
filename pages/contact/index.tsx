import { NextPage } from 'next';
import GitHubIcon from '@mui/icons-material/GitHub';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

import DefaultLayout from 'layout/DefaultLayout';
import DefaultHead from 'component/DefaultHead';

const Contact: NextPage = () => {
    return (
        <DefaultLayout>
            <DefaultHead title={'Den`s CONTACT'} />
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
                </Typography>
            </Box>
        </DefaultLayout>
    );
};

export default Contact;
