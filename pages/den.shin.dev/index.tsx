import React from 'react';
import map from 'lodash/map';
import { NextPage } from 'next';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import DefaultLayout from 'layout/DefaultLayout';
import HeadTitle from 'component/HeadTitle';
import PostList from 'component/PostList';
import { allPosts } from 'posts/AllPosts';

const RECENT_STANDARD = 10;

const useDenShinDev = () => {
    const latestPostComponents = map(
        allPosts.slice(0, RECENT_STANDARD),
        ({ path, title, listContents, datetime, tags }) => (
            <Box my={2} key={`box-${path}`}>
                <PostList
                    key={path}
                    title={title}
                    contents={listContents}
                    path={path}
                    datetime={datetime}
                    tags={tags}
                />
            </Box>
        ),
    );

    return {
        models: {
            latestPostComponents,
        },
    };
}

const DenShinDev: NextPage = () => {
    const { models } = useDenShinDev();

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
                    <Typography variant={'subtitle1'} marginBottom={2}>
                        어제 보다 조금이라도 나아지기 위해, 머리가 좋지 않은
                        나는 자잘한 것들이라도 기록하며,,
                    </Typography>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>2010.03 ~ 2016.12&nbsp;&nbsp;&nbsp;&nbsp;<Link href={'https://www.cau.ac.kr/index.do'} underline={'none'}>중앙대학교 컴퓨터공학부</Link></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                - 2011년도 학생회 선전부장
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>2016.06 ~ 2023.07&nbsp;&nbsp;&nbsp;&nbsp;<Link href={'https://teamo2.kr'} underline={'none'}>TeamO2</Link></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                - 2016.06 ~ 2016.12 : 인턴 및 계약직 <br />
                                - 2016.12 ~ 2019 : 서비스팀 개발파트 대리  <br />
                                - 2019 ~ 2021 : 서비스팀 개발파트 파트장  <br />
                                - 2021 ~ 2022.07 : 개발팀 부팀장  <br />
                                - 2022.07 ~ 2023.07 : 백엔드개발팀 팀장  <br />
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>2023.07 (예정)&nbsp;&nbsp;&nbsp;&nbsp;<Link href={'https://www.bbodek.com'} underline={'none'}>뽀득</Link></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                7월 17일 입사 예정
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <br />
                </Grid>
            </Grid>
            <Grid container
                  spacing={1}
                  marginY={2}
                  display="flex"
                  alignItems="center"
            >
                <Typography variant={'body1'}>
                    백엔드 개발자가 메인이지만, 프론트엔드도 나름 꾸준히 하는 중이고 <br />
                    어제보다 나은 저를 위해 매일매일 공부하며 기억력이 좋지 못한 저를 위해 블로그를 운영중입니다. <br /> <br />
                    조금이라도 도움이 되는 글이 있다면 좋겠네요. <br />
                    그럼, 살펴가세요 :)
                </Typography>
            </Grid>
            <Divider />
            <Grid container
                  marginTop={3}
                  spacing={1}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
            >
                <Typography variant={'h2'}>Recent {RECENT_STANDARD} Post</Typography>
                <Grid item xs={12}>
                    {models.latestPostComponents}
                </Grid>
            </Grid>
        </DefaultLayout>
    );
};

export default DenShinDev;
