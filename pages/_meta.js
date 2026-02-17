export default {
	'*': {
		theme: {
			// layout: 'full',
			toc: true,
		},
	},
	index: {
		title: 'Giới thiệu',
	},
	'sing-up': {
		title: 'Đăng ký tài khoản',
	},
	'create-institution': {
		title: 'Tạo tổ chức',
	},
	'institution': {
		title: 'Quản lý tổ chức',
	},
	'developers': {
		title: 'Developers',
		// theme: {
		// 	typesetting: 'article',
		// },
	},
	'api-list': {
		title: 'Danh sách APIs',
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
		title: 'Các câu hỏi thường gặp',
	},
	'signature-generator': {
		title: 'Trình tạo Signature',
	},
	company: {
		title: 'SimplifyTrip',
		type: 'menu',
		items: {
			web: {
				title: 'Trang chủ ↗',
				'type': 'page',
				'href': `${process.env.NEXT_PUBLIC_WEB_URL}`,
				'newWindow': true,
			},
			partners: {
				title: 'Trang đối tác ↗',
				'type': 'page',
				'href': `${process.env.NEXT_PUBLIC_PARTNERS_URL}`,
				'newWindow': true,
			},
			contact: {
				title: 'Hỗ trợ ↗',
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
		theme: {
			timestamp: false,
			typesetting: 'article',
		},
	},
};
