import { satteri } from "@astrojs/markdown-satteri";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import { calloutDirective } from "./src/lib/callout";
import {
	blockExpressiveCode,
	inlineExpressiveCode,
} from "./src/lib/expressive-code";
import { externalLinks } from "./src/lib/external-links";
import { headingAnchors } from "./src/lib/heading-anchors";
import { headingNamespace } from "./src/lib/heading-namespace";
import { temmlMath } from "./src/lib/math";

export default defineConfig({
	site: "https://astro-erudite.vercel.app",
	compressHTML: true,
	prefetch: { prefetchAll: true },
	integrations: [
		sitemap({
			filter: (page) =>
				!/\/blog\/[^/]+\/[^/]+\/?$/.test(page) &&
				!/\/authors\/[^/]+\/?$/.test(page) &&
				!page.includes("/tags/"),
		}),
	],
	markdown: {
		syntaxHighlight: false,
		processor: satteri({
			features: { directive: true, math: true },
			mdastPlugins: [calloutDirective, inlineExpressiveCode, temmlMath],
			hastPlugins: [
				externalLinks,
				blockExpressiveCode,
				headingNamespace,
				headingAnchors,
			],
		}),
	},
});
