import User from "Models/user"
import News from "Models/news";
import data from "utils/data";
import db from "utils/db"

const handler = async (req, res) => {
    await db.connect();
    await User.deleteMany();
    await User.insertMany(data.users),
        await News.deleteMany();
    await News.insertMany(data.news),
        await db.disconnect();
    res.send({ message: 'seeded successfully' })
}

export default handler;