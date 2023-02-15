import { getSession } from 'next-auth/react';
import News from "../../../../../../Models/news";
import db from '../../../../../../utils/db';

const handler = async (req, res) => {
    const session = await getSession({ req });
    if (!session || !session.user.isAdmin) {
        return res.status(401).send('admin signin required');
    }
    // const { user } = session;
    if (req.method === 'GET') {
        return getHandler(req, res);
    } else if (req.method === 'POST') {
        return postHandler(req, res);
    } else {
        return res.status(400).send({ message: 'Method not allowed' });
    }
};
const postHandler = async (req, res) => {
    await db.connect();
    const newNews = new News({
        heading: 'sample name',
        slug: 'sample-name-' + Math.random(),
        discription: 'sample description',
        imgUrl: '/images/1675999466-International-Monetary-Fund--UN-financial-agency-L.jpg',

    });

    const news = await newNews.save();
    await db.disconnect();
    res.send({ message: 'news added successfully', news });
};
const getHandler = async (req, res) => {
    await db.connect();
    const news = await News.find({});
    await db.disconnect();
    res.send(news);
};
export default handler;