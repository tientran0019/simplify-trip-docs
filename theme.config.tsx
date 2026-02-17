/* eslint-disable no-nested-ternary */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useConfig, ThemeSwitch, DocsThemeConfig } from 'nextra-theme-docs';

import Image from 'next/image';
import { useRouter } from 'nextra/hooks';

import Footer from 'src/components/Footer';
import Button from 'src/components/Button';

const isEnglishLocale = (locale?: string): boolean => locale === 'en';

function Logo() {
	const { locale } = useRouter();
	const isEnglish = isEnglishLocale(locale);

	return (
		<div className="flex flex-row items-center">
			<Image src="/logo-full.png" width={105} height={0} quality={100} alt="logo" />
			<span className="mx-2">|</span>
			<span>{isEnglish ? 'API Integration' : 'Tích hợp API'}</span>
		</div>
	);
}

function NavbarActions() {
	const { locale } = useRouter();
	const isEnglish = isEnglishLocale(locale);

	return (
		<div className="flex !h-12 items-center md:gap-4 lg:-translate-x-4">
			<div className="ml-4 hidden lg:block">
				<a
					href={`${process.env.NEXT_PUBLIC_PARTNERS_URL}/login`}
					target="_blank"
				>
					<Button>{isEnglish ? 'Sign in' : 'Dang nhap'}</Button>
				</a>
				<a
					href={`${process.env.NEXT_PUBLIC_PARTNERS_URL}/sign-up`}
					target="_blank"
				>
					<Button variant="outline" className=" ml-4 ">{isEnglish ? 'Sign up' : 'Dang ky'}</Button>
				</a>
			</div>
			<ThemeSwitch
				lite
				className="!bg-transparent p-0 *:justify-center *:gap-0 [&_span]:hidden [&_svg]:size-4"
			/>
		</div>
	);
}

const config: DocsThemeConfig = {
	logo: <Logo />,
	logoLink: '/',
	i18n: [
		{ locale: 'vi', name: 'Tiếng Việt' },
		{ locale: 'en', name: 'English' },
	],
	nextThemes: {
		defaultTheme: 'light',
	},
	backgroundColor: {
		dark: '25, 25, 25',
	},
	components: {
		// a: (props: ChildrenProps) => <Link href="" {...props} />,
		// Code,
	},
	darkMode: true,
	color: {
		hue: {
			light: 134,
			dark: 134,
		},
		saturation: {
			light: 40,
			dark: 40,
		},
		lightness: {
			dark: 40,
			light: 40
		}
	},
	navbar: {
		extraContent: <NavbarActions />,
	},
	sidebar: {
		defaultMenuCollapseLevel: 1,
	},
	head: () => {
		const { asPath, locale } = useRouter();
		const isEnglish = isEnglishLocale(locale);
		const { frontMatter } = useConfig();
		const url = `${process.env.NEXT_PUBLIC_DOCS_URL}${asPath}`;

		const lastPathParam = asPath?.split('/').at(-1)?.replaceAll('-', ' ');
		const capitalizedPathTitle = lastPathParam?.replace(/\b\w/g, (l) => l.toUpperCase());

		const title: string = frontMatter.title as string
			? `${frontMatter.title as string} | SimplifyTrip Docs`
			: capitalizedPathTitle
				? `${capitalizedPathTitle} | SimplifyTrip Docs`
				: `${isEnglish ? 'Partner Documentation' : 'Tai lieu danh cho doi tac'} | SimplifyTrip Docs`;

		return (
			<>
				<link
					rel="icon"
					href="/favicon-32x32.png"
					sizes="32x32"
					type="image/png"
				/>
				<link
					rel="icon"
					href="/favicon-16x16.png"
					sizes="16x16"
					type="image/png"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>{title}</title>
				<meta name="apple-mobile-web-app-title" content="SimplifyTrip Docs" />
				<meta httpEquiv="Content-Language" content={locale || 'vi'} />
				<meta property="og:url" content={url} />
				<meta property="og:title" content={title} />
				<meta
					property="og:description"
					content={frontMatter.description as string || (isEnglish ? 'Partner documentation' : 'Tai lieu danh cho doi tac')}
				/>
				<meta
					property="og:image"
					content={`${process.env.NEXT_PUBLIC_DOCS_URL}/api/og?title=${encodeURIComponent(
						title,
					)}`}
				/>
			</>
		);
	},
	editLink: {
		content: null,
	},
	feedback: {
		content: null,
	},
	footer: {
		component: <Footer />,
	},
};

export default config;
