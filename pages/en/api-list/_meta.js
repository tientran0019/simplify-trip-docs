import React from 'react'
import SectionTitle from '../../../src/components/ApiReference/SectionTitle'

export default {
	'*': {
		theme: { breadcrumb: true },
	},
	'products-section': {
		title: React.createElement(SectionTitle, { id: 'products' }, 'Products'),
		href: '/en/api-list#products',
	},
	'country-section': {
		title: React.createElement(SectionTitle, { id: 'country' }, 'Country'),
		href: '/en/api-list#country',
	},
	'region-section': {
		title: React.createElement(SectionTitle, { id: 'region' }, 'Region'),
		href: '/en/api-list#region',
	},
	'order-section': {
		title: React.createElement(SectionTitle, { id: 'order' }, 'Order'),
		href: '/en/api-list#order',
	},
	'return-request-section': {
		title: React.createElement(SectionTitle, { id: 'return-request' }, 'Return request'),
		href: '/en/api-list#return-request',
	},
	'accounts-section': {
		title: React.createElement(SectionTitle, { id: 'accounts' }, 'Payment accounts'),
		href: '/en/api-list#accounts',
	},
	'retrieve-section': {
		title: React.createElement(SectionTitle, { id: 'retrieve' }, 'Retrieve information'),
		href: '/en/api-list#retrieve',
	},
	// Keep existing URLs available without showing duplicate sidebar entries.
	'products': { title: 'Products', display: 'hidden' },
	'country': { title: 'Country', display: 'hidden' },
	'region': { title: 'Region', display: 'hidden' },
	'order': { title: 'Order', display: 'hidden' },
	'return-request': { title: 'Return request', display: 'hidden' },
	'accounts': { title: 'Payment accounts', display: 'hidden' },
	'retrieve': { title: 'Retrieve information', display: 'hidden' },
}
