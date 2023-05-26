export function InViewAction(
	node: HTMLElement,
	{
		onview = (target: Element) => console.log('i ❤️ slots'),
		once = true,
		vanilla = false,
		root = undefined,
		threshold = 0,
		margin = '0px'
	}
) {
	const observer = new IntersectionObserver(handleIntersect, {
		root,
		threshold,
		rootMargin: margin
	});

	// when vanilla, this action should be attached to the body of the document, say
	if (vanilla) {
		document.querySelectorAll('vanilla').forEach((el) => observer.observe(el));
	} else {
		observer.observe(node);
	}

	function handleIntersect(ENTRIES: IntersectionObserverEntry[], OBSERVER: IntersectionObserver) {
		for (const entry of ENTRIES) {
			if (entry.isIntersecting) {
				onview(entry.target);
				once && OBSERVER.unobserve(entry.target);
			}
		}
	}

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
