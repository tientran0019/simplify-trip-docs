/* eslint-disable react/function-component-definition */

import '@code-hike/mdx/styles';
import './global.css';

import Head from 'next/head';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta property="og:title" content="SimplifyTrip Docs" />
				<meta property="og:description" content="Tài liệu dành cho đối tác của SimplifyTrip" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}
