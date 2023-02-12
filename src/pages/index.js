import Layout from "@/components/Layout";
import News from "Models/news";

import Link from "next/link";
import data from "utils/data";
import db from "utils/db";

export default function Home({ news }) {
  return (
    <>

      <Layout title='Home page'  >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {news.map((news, i) => (
            <div key={i}>
              <Link href={`./News/${news.slug}`}>
                <h1 className="">{news.heading}</h1>
                <img className="w-20 h-20 bg-contain" src={news.imgUrl} alt={news.heading} />
                <p>{news.discription}</p>
              </Link>
            </div>
          ))}
        </div>

      </Layout>
    </>
  )
}

export async function getServerSideProps() {
  await db.connect();
  const news = await News.find().lean();
  return {
    props: {
      news: news.map(db.convertDoctoObj)
    }
  }
}
