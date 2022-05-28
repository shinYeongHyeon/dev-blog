import Head from 'next/head';
import { NextPage } from 'next';

export interface Props {
    title?: string;
}

const HeadTitle: NextPage<Props> = ({ title }) => {
    return (
        <Head>
            <title>{title}</title>
        </Head>
    );
};

HeadTitle.defaultProps = {
    title: 'Den`s Dev Blog',
};

export default HeadTitle;
