import { NextRequest, NextResponse } from 'next/server';

const SUPPORTED_LOCALES = ['en', 'vi'] as const;

export function middleware(request: NextRequest) {
	const { pathname, search } = request.nextUrl;
	const hasLocalePrefix = SUPPORTED_LOCALES.some(
		(locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
	);

	if (hasLocalePrefix) {
		return NextResponse.next();
	}

	const target = request.nextUrl.clone();
	target.pathname = `/en${pathname}`;
	target.search = search;

	return NextResponse.redirect(target);
}

export const config = {
	matcher: [
		'/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
	],
};
