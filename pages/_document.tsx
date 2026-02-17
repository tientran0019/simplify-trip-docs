import Document, { Html, Head, Main, NextScript } from 'next/document';
import { SkipNavLink } from 'nextra-theme-docs';

class MyDocument extends Document {
	render(): JSX.Element {
		return (
			<Html>
				<Head />
				<body>
					<SkipNavLink styled />
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
