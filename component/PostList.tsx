import React from 'react';
import map from 'lodash/map';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Hashtag from './Hashtag';

interface Props {
    title: string;
    contents: string;
    path: string;
    datetime: string;
    tags: string[];
    // TODO: Add Thumbnail
}

const PostList: React.FC<Props> = ({
    title,
    contents,
    path,
    datetime,
    tags,
}) => {
    return (
        <Box>
            <Grid container>
                <Grid item>
                    <Link href={`/posts/${path}`} underline={'none'}>
                        <Typography variant={'h5'}>{title}</Typography>
                    </Link>
                </Grid>
                <Grid item ml={2}>
                    <Typography variant={'body2'}>
                        <small>{datetime}</small>
                    </Typography>
                </Grid>
            </Grid>
            <Box sx={{ whiteSpace: 'normal' }}>{contents}</Box>
            <Grid container justifyContent="flex-end">
                {map(tags, (tag) => (
                    <Hashtag key={tag} tag={tag} />
                ))}
            </Grid>
        </Box>
    );
};

export default PostList;
