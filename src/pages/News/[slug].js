import Layout from '@/components/Layout';
import News from 'Models/news';
import { useRouter } from 'next/router'
import React from 'react'
import data from 'utils/data';
import db from 'utils/db';

const NewsScreen = (props) => {

    const { news } = props;
    if (!news) {
        return <Layout title="Product not Found">News not found</Layout>
    }

    return (
        <Layout title={news.heading}>
            <img className="w-70 h-80 bg-contain" src={news.imgUrl} alt={news.heading} />
            <h1 className="text-2xl font-extrabold mt-10">{news.heading}</h1>
            <p className='mt-5'>{news.discription}</p>

        </Layout>
    )
}

export async function getServerSideProps(context) {
    const { params } = context;
    const { slug } = params;
    await db.connect();
    const news = await News.findOne({ slug }).lean();
    await db.disconnect();
    return {
        props: {
            news: news ? db.convertDoctoObj(news) : null,
        }
    }

}

export default NewsScreen