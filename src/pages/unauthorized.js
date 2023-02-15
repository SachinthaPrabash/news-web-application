import Layout from '@/components/Layout'
import { useRouter } from 'next/router'
import React from 'react'

const unauthorized = () => {

    const router = useRouter();
    const { message } = router.query;

    return (
        <Layout title='unauthorized'>
            <h1 className='text-xl text-red-700 font-extrabold'> Access Denied</h1>
            {message && <p >{message}</p>}
        </Layout>
    )

}

export default unauthorized