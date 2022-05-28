import { NextPage } from 'next';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';

import DefaultLayout from 'layout/DefaultLayout';
import HeadTitle from 'component/HeadTitle';

const DenShinDev: NextPage = () => {
    return (
        <DefaultLayout>
            <HeadTitle />
            <Grid container spacing={1}>
                <Grid item xs={2}>
                    <Image
                        src={'/den.JPG'}
                        alt={'den.shin.dev'}
                        width={200}
                        height={290}
                    />
                </Grid>
                <Grid item xs={10}>
                    <Typography variant={'h1'}>Den`s DEV Blog</Typography>
                    <Typography variant={'subtitle1'}>
                        어제 보다 조금이라도 나아지기 위해, 머리가 좋지 않은
                        나는 자잘한 것들이라도 기록하며,,
                    </Typography>
                    <Box my={2}>
                        <Divider />
                    </Box>
                    <Typography variant={'body1'}>
                        16년도 부터{' '}
                        <Link href={'https://teamo2.kr'} underline={'none'}>
                            TeamO2
                        </Link>{' '}
                        에 근무중인 신영현(a.k.a Den) 입니다.
                        <br /> 백엔드 개발자로 근무 중이지만, 프론트엔드도 나름
                        꾸준히 하는 중이고, 어제보다 나은 저를 위해 매일매일
                        공부하며 기억력이 좋지 못한 저를 위해 블로그를
                        운영중입니다. <br />
                        조금이라도 도움이 되는 글이 있다면 좋겠네요. <br />
                        그럼, 살펴가세요 :)
                    </Typography>
                </Grid>
            </Grid>
        </DefaultLayout>
    );
};

export default DenShinDev;
