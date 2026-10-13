import { useEffect, useRef, useSyncExternalStore } from 'react';

const sectionIds = ['products', 'country', 'region', 'order', 'return-request', 'accounts', 'retrieve'];
const listeners = new Set<() => void>();
let activeSection = '';
let frame = 0;
let stopWatching: (() => void) | undefined;

function subscribe(listener: () => void) {
	listeners.add(listener);
	if (listeners.size === 1) {
		const update = () => {
			frame = 0;
			const navbar = document.querySelector('.nextra-nav-container');
			const readingLine = (navbar?.getBoundingClientRect().bottom ?? 64) + 40;
			let next = '';
			if (/^\/(en|vi)\/api-list\/?$/.test(window.location.pathname)) {
				for (const id of sectionIds) {
					const heading = document.getElementById(id);
					if (heading && heading.getBoundingClientRect().top <= readingLine) next = id;
				}
			}
			if (next !== activeSection) {
				activeSection = next;
				listeners.forEach(notify => notify());
			}
		};
		const schedule = () => {
			if (!frame) frame = window.requestAnimationFrame(update);
		};
		window.addEventListener('scroll', schedule, { passive: true });
		window.addEventListener('resize', schedule);
		window.addEventListener('hashchange', schedule);
		const observer = new ResizeObserver(schedule);
		observer.observe(document.body);
		schedule();
		stopWatching = () => {
			window.removeEventListener('scroll', schedule);
			window.removeEventListener('resize', schedule);
			window.removeEventListener('hashchange', schedule);
			observer.disconnect();
			window.cancelAnimationFrame(frame);
			frame = 0;
			activeSection = '';
		};
	}
	return () => {
		listeners.delete(listener);
		if (!listeners.size) stopWatching?.();
	};
}

export default function SectionTitle({ id, children }: { id: string; children: React.ReactNode }) {
	const active = useSyncExternalStore(subscribe, () => activeSection, () => '');
	const titleRef = useRef<HTMLSpanElement>(null);
	useEffect(() => {
		const anchor = titleRef.current?.closest('a');
		if (!anchor) return;
		const navigate = (event: MouseEvent) => {
			if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
			if (!/^\/(en|vi)\/api-list\/?$/.test(window.location.pathname)) return;
			const heading = document.getElementById(id);
			if (!heading) return;
			event.preventDefault();
			window.history.replaceState(window.history.state, '', `#${id}`);
			window.scrollTo({ top: heading.getBoundingClientRect().top + window.scrollY - 64, behavior: 'auto' });
		};
		anchor.addEventListener('click', navigate);
		return () => anchor.removeEventListener('click', navigate);
	}, [id]);
	return <span ref={titleRef} className="api-section-title" data-active={active === id} aria-current={active === id ? 'location' : undefined}>{children}</span>;
}
