import React from 'react'
import SectionTitle from '../../../src/components/ApiReference/SectionTitle'

export default {
	'*': {
		theme: { breadcrumb: true },
	},
	'products-section': {
		title: React.createElement(SectionTitle, { id: 'products' }, 'Mặt hàng'),
		href: '/vi/api-list#products',
	},
	'country-section': {
		title: React.createElement(SectionTitle, { id: 'country' }, 'Quốc gia'),
		href: '/vi/api-list#country',
	},
	'region-section': {
		title: React.createElement(SectionTitle, { id: 'region' }, 'Khu vực'),
		href: '/vi/api-list#region',
	},
	'order-section': {
		title: React.createElement(SectionTitle, { id: 'order' }, 'Đơn hàng'),
		href: '/vi/api-list#order',
	},
	'return-request-section': {
		title: React.createElement(SectionTitle, { id: 'return-request' }, 'Trả hàng'),
		href: '/vi/api-list#return-request',
	},
	'accounts-section': {
		title: React.createElement(SectionTitle, { id: 'accounts' }, 'Tài khoản thanh toán'),
		href: '/vi/api-list#accounts',
	},
	'retrieve-section': {
		title: React.createElement(SectionTitle, { id: 'retrieve' }, 'Truy xuất thông tin'),
		href: '/vi/api-list#retrieve',
	},
	// Preserve existing URLs without duplicate sidebar entries.
	'products': { title: 'Mặt hàng', display: 'hidden' },
	'country': { title: 'Quốc gia', display: 'hidden' },
	'region': { title: 'Khu vực', display: 'hidden' },
	'order': { title: 'Đơn hàng', display: 'hidden' },
	'return-request': { title: 'Trả hàng', display: 'hidden' },
	'accounts': { title: 'Tài khoản thanh toán', display: 'hidden' },
	'retrieve': { title: 'Truy xuất thông tin', display: 'hidden' },
}
