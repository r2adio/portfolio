import type { SvgComponent } from "astro/types";
import Email from "@/assets/icons/email.svg";
import GitHub from "@/assets/icons/github.svg";
import RSS from "@/assets/icons/rss.svg";
import Twitter from "@/assets/icons/twitter.svg";

export const SITE = {
	title: "r2adio",
	description: "Personal blogging and portfolio website.",
	locale: "en-US",
	dir: "ltr",
	defaultPageImage: "/static/opengraph-image.png",
	defaultPostImage: "/static/1200x630.png",
} as const;

export const NAVIGATION = [
	{ href: "/blog", label: "Blog" },
	{ href: "/projects", label: "Projects" },
	{ href: "/authors", label: "Authors" },
];

export const SOCIALS: { href: string; label: string; icon: SvgComponent }[] = [
	{ href: "/rss.xml", label: "RSS", icon: RSS },
	{ href: "https://github.com/r2adio", label: "GitHub", icon: GitHub },
	{ href: "mailto:miyamusashimoto1645@gmail.com", label: "Email", icon: Email },
	{ href: "https://twitter.com/zeke_r2", label: "Twitter", icon: Twitter },
];
