const injectCSS = (href: string) => {
	const ss = document.createElement("link");

	ss.rel = "stylesheet";

    ss.href = href;

	window.document.head.appendChild(ss);
}

export default injectCSS;