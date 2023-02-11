import Layout from '@/components/Layout'
import { Html, Head, Main, NextScript } from 'next/document'
import { Children } from 'react'

export default function Document({ Children }) {
    return (
        <Html lang="en">
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
