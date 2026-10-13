import { readFile } from 'node:fs/promises'
import path from 'node:path'

const sections = [
	['products', 'Product API'],
	['country', 'Country API'],
	['region', 'Region API'],
	['order', 'Order API'],
	['return-request', 'Return request API'],
	['accounts', 'Payment Accounts API'],
	['retrieve', 'Information retrieval API'],
]

// MDX's JSX normalization has already run when this transformer inserts a new
// parsed tree. Apply it to the inserted content too: JSX-only paragraphs must
// not wrap table cells, and explicit HTML must retain its original styling.
function normalizeIncludedJsx(node) {
	if (node.type === 'mdxJsxFlowElement' || node.type === 'mdxJsxTextElement') {
		node.data = { ...node.data, _mdxExplicitJsx: true }
	}
	if (!node.children) return
	node.children = node.children.flatMap(child => {
		if (child.type === 'paragraph' &&
			child.children.some(item => item.type === 'mdxJsxTextElement' || item.type === 'mdxTextExpression') &&
			child.children.every(item => item.type === 'mdxJsxTextElement' || item.type === 'mdxTextExpression' ||
				(item.type === 'text' && !item.value.trim()))) {
			return child.children.filter(item => item.type !== 'text').map(item => {
				item.type = item.type === 'mdxJsxTextElement' ? 'mdxJsxFlowElement' : 'mdxFlowExpression'
				normalizeIncludedJsx(item)
				return item
			})
		}
		normalizeIncludedJsx(child)
		return [child]
	})
}

// Expand before Code Hike and Nextra collect headings, so examples and the TOC
// behave exactly like content authored directly on the overview page.
export default function remarkApiList() {
	return async (tree, file) => {
		const filename = file.path && path.resolve(file.path)
		if (!['en', 'vi'].some(locale => filename === path.resolve(`pages/${locale}/api-list.mdx`))) return

		const marker = tree.children.findIndex(node =>
			node.type === 'paragraph' && node.children.length === 1 &&
			node.children[0].value === 'API_REFERENCE_SECTIONS'
		)
		if (marker === -1) return

		const children = []
		for (const [slug] of sections) {
			const source = await readFile(path.join(path.dirname(filename), 'api-list', `${slug}.mdx`), 'utf8')
			// Each source page has its own front matter, imports and API list label.
			let content = source.slice(source.indexOf('\n# ') + 1)
			content = content.replace(/\]\(\/api-list\/([\w-]+)(#[^)]+)?\)/g,
				(match, target, hash) => sections.some(([name]) => name === target)
					? `](${hash || `#${target}`})` : match)
			const section = this.parse(content)
			normalizeIncludedJsx(section)
			for (const node of section.children) {
				if (node.type !== 'heading') continue
				if (node.depth === 1) {
					node.children.push({ type: 'text', value: ` [#${slug}]` })
				} else if (['Errors and HTTP status', 'Lỗi và HTTP status'].includes(node.children[0]?.value)) {
					node.children[0].value += ` [#${slug}-errors-and-http-status]`
				}
				node.depth = Math.min(node.depth + 1, 6)
			}
			children.push(...section.children)
		}
		tree.children.splice(marker, 1, {
			type: 'mdxJsxFlowElement',
			name: 'div',
			attributes: [{ type: 'mdxJsxAttribute', name: 'className', value: 'api-list-reference' }],
			children,
		})
	}
}
