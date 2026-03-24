import { NextRequest, NextResponse } from 'next/server';

const SUPPORTED_LOCALES = ['en', 'vi'] as const;
const DEFAULT_LOCALE = 'en';
const NEXT_LOCALE_COOKIE = 'NEXT_LOCALE';

const getLocaleFromAcceptLanguage = (acceptLanguage: string | null): string | null => {
	if (!acceptLanguage) {
		return null;
	}

	const normalized = acceptLanguage.toLowerCase();
	if (normalized.includes('vi')) {
		return 'vi';
	}
	if (normalized.includes('en')) {
		return 'en';
	}

	return null;
};

const getPreferredLocale = (request: NextRequest): string => {
	const localeFromCookie = request.cookies.get(NEXT_LOCALE_COOKIE)?.value;
	if (localeFromCookie === 'en' || localeFromCookie === 'vi') {
		return localeFromCookie;
	}

	const localeFromHeader = getLocaleFromAcceptLanguage(
		request.headers.get('accept-language'),
	);

	return localeFromHeader ?? DEFAULT_LOCALE;
};

export function middleware(request: NextRequest) {
	const { pathname, search } = request.nextUrl;
	const hasLocalePrefix = SUPPORTED_LOCALES.some(
		(locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
	);

	if (hasLocalePrefix) {
		return NextResponse.next();
	}

	const target = request.nextUrl.clone();
	target.pathname = `/${getPreferredLocale(request)}${pathname}`;
	target.search = search;

	return NextResponse.redirect(target);
}

export const config = {
	matcher: [
		'/((?!api(?:/|$)|_next/static|_next/image|favicon.ico|.*\\..*).*)',
	],
};
