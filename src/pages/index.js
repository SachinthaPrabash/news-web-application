import Layout from "@/components/Layout";

import Link from "next/link";
import data from "utils/data";

export default function Home() {
  return (
    <>

      <Layout title='Home page'  >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {data.news.map((news, i) => (
            <div key={i}>
              <Link href={`./News/${news.heading}`}>
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
