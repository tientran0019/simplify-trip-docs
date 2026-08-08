import { useRouter } from "nextra/hooks";

type SupportedLocale = 'en' | 'vi';

const getSupportedLocale = (value?: string): SupportedLocale | undefined => {
	const cleanValue = value?.split(/[?#]/)[0];
	const firstSegment = cleanValue?.split('/').filter(Boolean)[0] || cleanValue;

	if (firstSegment === 'en' || firstSegment === 'vi') {
		return firstSegment;
	}

	return undefined;
};

export default function useLocale() {
	const router = useRouter();

	return (
		getSupportedLocale(router.locale)
		?? getSupportedLocale(router.asPath)
		?? getSupportedLocale(router.pathname)
		?? 'en'
	);
}
