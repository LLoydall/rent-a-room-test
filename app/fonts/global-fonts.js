import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
	@font-face {
		font-family: 'Museo Sans';
		src: url('museosans_500-webfont.woff2') format('woff2'),
					url('museosans_500-webfont.woff') format('woff');
		font-weight: normal;
		font-style: normal;
	}
	@font-face {
		font-family: 'Museo Sans';
		src: url('museosans_500_italic-webfont.woff2') format('woff2'),
					url('museosans_500_italic-webfont.woff') format('woff');
		font-weight: normal;
		font-style: italic;
	}
	@font-face {
		font-family: 'Museo Sans';
		src: url('museosans_700-webfont.woff2') format('woff2'),
					url('museosans_700-webfont.woff') format('woff');
		font-weight: bold;
		font-style: normal;
	}
	@font-face {
		font-family: 'Museo Sans';
		src: url('museosans-700italic-webfont.woff2') format('woff2'),
					url('museosans-700italic-webfont.woff') format('woff');
		font-weight: bold;
		font-style: italic;
	}
`;
