import { signOut, useSession } from 'next-auth/react'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { ToastContainer } from 'react-toastify'
import { Menu } from '@headlessui/react'



const Layout = ({ title, children }) => {

    const { status, data: session } = useSession();

    const logOutClickHandler = () => {
        signOut({ callbackUrl: '/' })
    }

    return (
        <>
            <Head>
                <title>{title ? title + '-Ada Derana' : 'Ada Derana'}</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <ToastContainer position='bottom-center' limit={1} />

            <div className='flex min-h-screen flex-col justify-between'>
                <header>
                    <nav className='flex h-12 justify-between p-4 shadow-md'>
                        <Link href='/' className='text-lg font-bold'>
                            Ada Drana
                        </Link>
                        <div>
                            {status === 'loading' ? (
                                'Loading'
                            ) : session?.user ? (
                                <Menu as='div' className='relative inline-block'>
                                    <Menu.Button className='text-blue-400'>
                                        {session.user.name}
                                    </Menu.Button>
                                    <Menu.Items className='absolute right-0 w-56 origin-top-right shadow-lg bg-white'>

                                        <Menu.Item>
                                            <Link className='flex p-2 hover:bg-gray-200' href='#' onClick={logOutClickHandler}>
                                                LogOut
                                            </Link>

                                        </Menu.Item>
                                    </Menu.Items>
                                </Menu>
                            ) :
                                (
                                    <Link href='./Login'>
                                        Login
                                    </Link>
                                )}

                        </div>
                    </nav>
                </header>
                <main className='container m-auto mt-6  px-6 lg:px-32  '>
                    {children}
                </main>
                <footer className='flex justify-center h-10 shadow-inner items-center'>Copyright ©2023 Ada Derana. All rights reserved. </footer>
            </div>
        </>
    )
}

export default Layout