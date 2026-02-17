import nextra from "nextra"
import * as codeHike from "@code-hike/mdx"

/** @type {import('codehike/mdx').CodeHikeConfig} */
const chConfig = {
	// components: { code: "Code" },
	syntaxHighlighting: {
		theme: "material-default",
	},
	showCopyButton: true,
	lineNumbers: true,
	theme: "material-default",
	skipLanguages: ["mermaid"],
	staticMediaQuery: "not screen, (max-width: 768px)",
	autoImport: true,
	autoLink: false,
}

const withNextra = nextra({
	theme: "nextra-theme-docs",
	themeConfig: "./theme.config.tsx",
	defaultShowCopyCode: true,
	mdxOptions: {
		remarkPlugins: [
		  [
			codeHike.remarkCodeHike,
			chConfig
		  ]
		]
	  }
})

export default withNextra({
	i18n: {
		locales: ['en', 'vi'],
		defaultLocale: 'en',
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	typescript: {
		ignoreBuildErrors: true,
	},
});
