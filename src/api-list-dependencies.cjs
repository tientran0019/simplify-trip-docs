const path = require('node:path');

// Let webpack invalidate the combined page when an included API page changes.
module.exports = function apiListDependencies(source) {
	for (const name of ['products', 'country', 'region', 'order', 'return-request', 'accounts', 'retrieve']) {
		this.addDependency(path.join(path.dirname(this.resourcePath), 'api-list', `${name}.mdx`));
	}
	return source;
};
