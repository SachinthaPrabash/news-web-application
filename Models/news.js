import mongoose from "mongoose";

const newsSchema = new mongoose.Schema(
    {
        heading: { type: String, required: true },
        slug: { type: String },
        discription: { type: String, required: true },
        imgUrl: { type: String },
    }, {
    timestamps: true,
}
);

const News = mongoose.models.News || mongoose.model('News', newsSchema);
export default News;