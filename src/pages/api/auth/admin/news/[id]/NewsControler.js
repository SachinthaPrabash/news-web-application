import { getSession } from 'next-auth/react';
import News from "../../../../../../../Models/news";
import db from '../../../../../../../utils/db';

const handler = async (req, res) => {
    const session = await getSession({ req });
    if (!session || (session && !session.user.isAdmin)) {
        return res.status(401).send('signin required');
    }

    const { user } = session;
    if (req.method === 'GET') {
        return getHandler(req, res, user);
    } else if (req.method === 'PUT') {
        return putHandler(req, res, user);
    } else if (req.method === 'DELETE') {
        return deleteHandler(req, res, user);
    } else {
        return res.status(400).send({ message: 'Method not allowed' });
    }
};
const getHandler = async (req, res) => {
    await db.connect();
    const news = await News.findById(req.query.id);
    await db.disconnect();
    res.send(product);
};
const putHandler = async (req, res) => {
    await db.connect();
    const news = await News.findById(req.query.id);
    if (news) {
        news.heading = req.body.heading;
        news.slug = req.body.slug;
        news.discription = req.body.discription;
        news.imgUrl = req.body.imgUrl;
        await product.save();
        await db.disconnect();
        res.send({ message: 'news updated successfully' });
    } else {
        await db.disconnect();
        res.status(404).send({ message: 'news not found' });
    }
};
const deleteHandler = async (req, res) => {
    await db.connect();
    const news = await News.findById(req.query.id);
    if (news) {
        await news.remove();
        await db.disconnect();
        res.send({ message: 'news deleted successfully' });
    } else {
        await db.disconnect();
        res.status(404).send({ message: 'news not found' });
    }
};
export default handler;