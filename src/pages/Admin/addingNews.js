import React, { useEffect } from 'react'
import Layout from '@/components/Layout'
import db from "../../../utils/db";
import News from "../../../Models/news";
import Link from 'next/link'
import { getError } from '../../../utils/error'
import { toast } from 'react-toastify';




const addingNews = ({ news }) => {




    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`/api/admin/products`);
            } catch (err) {
            }
        };
        fetchData();

    }, []);

    const deleteHandler = async (newsID) => {
        if (!window.confirm('Are you sure?')) {
            return;
        }
        try {
            await axios.delete(`/api/admin/news/${newsID}`);
            toast.success('Product deleted successfully');
        } catch (err) {
            toast.error(err);
        }
    };

    return (
        <Layout>
            <div className="overflow-x-auto md:col-span-3">
                <div className="flex justify-between">
                    <h1 className="mb-4 text-xl">News</h1>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className=" table-auto">
                    <thead className="border-b">
                        <tr>
                            <th className="px-5 text-left">ID</th>
                            <th className="p-5 text-left">Heading</th>
                            <th className="p-5 text-left">Slug</th>
                            <th className="p-5 text-left">discription</th>
                            <th className="p-5 text-left">imgUrl</th>

                        </tr>
                    </thead>
                    <tbody>
                        {news.map((news) => (
                            <tr key={news._id} className="border-b">
                                <td className=" p-5 ">{news._id.substring(20, 24)}</td>
                                <td className=" p-5 ">{news.heading}</td>
                                <td className=" p-5 ">${news.slug}</td>
                                <td className=" p-5 ">{news.discription}</td>
                                <td className=" p-5 ">{news.imgUrl}</td>
                                <td className=" p-5 flex">
                                    <Link href={`./${news._id}`} className='text-blue-400'>
                                        Edit
                                    </Link>
                                    &nbsp;
                                    <button
                                        onClick={() => deleteHandler(news._id)}
                                        className="default-button"
                                        type="button"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>



        </Layout>
    )
}

export default addingNews

