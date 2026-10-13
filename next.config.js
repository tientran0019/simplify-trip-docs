import nextra from "nextra"
import * as codeHike from "@code-hike/mdx"
import remarkApiList from './src/remark-api-list.js'
import path from 'node:path'

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
			remarkApiList,
			[
				codeHike.remarkCodeHike,
				chConfig
			]
		]
	}
})

export default withNextra({
	webpack(config) {
		config.module.rules.push({
			test: /pages[\\/](en|vi)[\\/]api-list\.mdx$/,
			use: [path.resolve('src/api-list-dependencies.cjs')],
		})
		return config
	},
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
