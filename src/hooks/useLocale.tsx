import { useRouter } from "nextra/hooks";

export default function useLocale() {
	const router = useRouter();

    const { pathname } = router;
    
	const cleanPath = pathname?.split(/[?#]/)[0];
	const firstSegment = cleanPath?.split('/').filter(Boolean)[0]; 

	if (firstSegment === 'en' || firstSegment === 'vi') {
		return firstSegment;
	}

	return 'en';
}