import Layout from '@/components/Layout'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { signIn, useSession } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { getError } from '../../utils/error'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import { redirect } from 'next/dist/server/api-utils'

const login = () => {

    const { data: session } = useSession();

    const router = useRouter();
    const { redirect } = router.query

    useEffect(() => {
        if (session?.user) {
            router.push(redirect || './')
        }
    }, [router, session, redirect])


    const {
        handleSubmit, register, formState: { errors },
    } = useForm();

    const submitHandler = async ({ email, password }) => {
        try {
            const result = await signIn('credentials', {
                redirect: false,
                email,
                password
            });
            if (result.error) {
                toast.error(result.error)
            }
        } catch (error) {
            toast.error(getError(err))
        }
    }

    return (

        <Layout title='login'>
            <form className='mx-auto max-w-screen-md' onSubmit={handleSubmit(submitHandler)}>
                <h1 className='font-extrabold text-3xl '>Login</h1>
                <div className='mb-4 mt-5'>
                    <label htmlFor='email'>Email</label>
                    <input className='border border-black w-full rounded-xl max-h-min p-2'
                        {...register('email', {
                            required: 'Plaease enter email',
                            pattern: {
                                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-.]+$/i,
                                message: 'Plese enter valid email',
                            },
                        })}
                        type='email' id='email' />
                    {errors.email && <div className='text-red-600'>{errors.email.message}</div>}
                </div>
                <div className='mb-4'>
                    <label htmlFor='password'>password</label>
                    <input className='border border-black w-full rounded-xl max-h-min p-2'
                        {...register('password', {
                            required: 'Plaease enter password',
                            minLength: { value: 4, message: 'password is more than 5 chars' }
                        })}
                        type='password' id='password' />
                    {errors.password && <div className='text-red-600'>{errors.password.message}</div>}
                </div>
                <div className='mb-4'>
                    <button className='max-w-min max-h-min rounded-xl p-4 bg-cyan-500'>Login</button>
                </div>
                <div className='mb-4'>
                    Don&apos;t have an account? &nbsp;
                    <Link href={`./Register?redirect=${redirect || '/'}`}>Register</Link>
                </div>
            </form>
        </Layout>
    )
}

export default login