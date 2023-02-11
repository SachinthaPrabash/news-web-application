import Layout from '@/components/Layout';
import { useRouter } from 'next/router'
import React from 'react'
import data from 'utils/data';

const NewsScreen = () => {

    const { query } = useRouter();
    const { heading } = query;
    const news = data.news.find(x => x.heading === heading);
    if (!news) {
        return <div>News not found</div>
    }

    return (
        <Layout title={news.heading}>
            <img className="w-70 h-80 bg-contain" src={news.imgUrl} alt={news.heading} />
            <h1 className="text-2xl font-extrabold mt-10">{news.heading}</h1>
            <p className='mt-5'>{news.discription}</p>

        </Layout>
    )
}

export default NewsScreen