import Head from 'next/head';
import { NextPage } from 'next';

export interface Props {
    title?: string;
}

const DefaultHead: NextPage<Props> = ({ title }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content="Den`s Dev Blog" charSet="utf-8" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
};

DefaultHead.defaultProps = {
    title: 'Den`s Dev Blog',
};

export default DefaultHead;
