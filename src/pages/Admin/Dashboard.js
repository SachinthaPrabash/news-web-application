import Layout from '@/components/Layout'
import Link from 'next/link'
import React from 'react'

const Dashboard = () => {
    return (
        <Layout title='Admin Dashboard'>
            <div className="grid  md:grid-cols-4 md:gap-5">
                <div>
                    <ul>
                        <li>
                            <Link href="./Admin/Dashboard" className="font-bold">
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link href="./addingNews">Adding News</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </Layout>
    )
}

Dashboard.auth = { adminOnly: true }
export default Dashboard