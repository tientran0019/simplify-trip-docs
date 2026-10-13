import { useEffect } from 'react';

export default function TocActiveParent() {
	useEffect(() => {
		const toc = document.querySelector('.nextra-toc');
		if (!toc) return;
		const update = () => {
			const links = Array.from(toc.querySelectorAll<HTMLAnchorElement>('li > a'));
			let parent: HTMLAnchorElement | undefined;
			let activeParent: HTMLAnchorElement | undefined;
			for (const link of links) {
				const hidden = ['_ms-8', '_ms-12', '_ms-16'].some(name => link.classList.contains(name));
				if (!hidden) parent = link;
				if (link.classList.contains('_text-primary-600') && hidden) activeParent = parent;
			}
			for (const link of links) {
				if (link === activeParent) link.setAttribute('data-active-parent', 'true');
				else link.removeAttribute('data-active-parent');
			}
		};
		update();
		// Follow Nextra's active heading, including changes caused by scrolling
		// and anchor navigation, without installing a second scroll tracker.
		const observer = new MutationObserver(update);
		observer.observe(toc, { subtree: true, childList: true, attributes: true, attributeFilter: ['class'] });
		return () => {
			observer.disconnect();
			toc.querySelectorAll('[data-active-parent]').forEach(link => link.removeAttribute('data-active-parent'));
		};
	}, []);
	return null;
}
