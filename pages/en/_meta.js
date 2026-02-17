export default {
	'*': {
		theme: {
			// layout: 'full',
			toc: true,
		},
	},
	index: {
		title: 'Introduction',
	},
	'sing-up': {
		title: 'Sign up',
	},
	'create-institution': {
		title: 'Create institution',
	},
	'institution': {
		title: 'Institution management',
	},
	'developers': {
		title: 'Developers',
		// theme: {
		// 	typesetting: 'article',
		// },
	},
	'api-list': {
		title: 'API list',
		theme: {
			"layout": "default",
			breadcrumb: true,
			// "toc": false,
			// "sidebar": false
		}
	},
	'---': {
		type: 'separator',
		//  title: 'Khác',
	},
	'errors': {
		title: 'Errors',
	},
	'rate-limit': {
		title: 'Request Rate Limit',
	},
	'frequently-questions': {
		title: 'Frequently asked questions',
	},
	'signature-generator': {
		title: 'Signature generator',
	},
	company: {
		title: 'SimplifyTrip',
		type: 'menu',
		items: {
			web: {
				title: 'Website ↗',
				'type': 'page',
				'href': `${process.env.NEXT_PUBLIC_WEB_URL}`,
				'newWindow': true,
			},
			partners: {
				title: 'Partner portal ↗',
				'type': 'page',
				'href': `${process.env.NEXT_PUBLIC_PARTNERS_URL}`,
				'newWindow': true,
			},
			contact: {
				title: 'Support ↗',
				'type': 'page',
				'href': 'https://support.simplifytrip.com/',
				'newWindow': true,
			},
			apis: {
				title: 'APIs ↗',
				'type': 'page',
				'href': `${process.env.NEXT_PUBLIC_PARTNERS_API_URL}/api`,
				'newWindow': true,
			},
		}
	},
	404: {
		type: 'page',
		display: 'hidden',
		theme: {
			sidebar: false
		}
	},
};
