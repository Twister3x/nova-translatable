import {ACCENT_TITLE} from "../../Configuration/Types/blockTypes";
import {TITLES_CATEGORY} from "../../Configuration/Types/categoryTypes";

const accentTitleCss = `
	.accent-title {
		font-family: Forum;
		font-style: normal;
		font-weight: normal;
		font-size: 42px;
		line-height: 52px;
		color: #94002A;
		margin: 0;
	}
`;


const accentTitleHtml = `
	<h2 class="accent-title">Title</h2>
`;

const accentTitleLabel = 'Акцентированный заголовок<br><svg width="20" height="20" viewBox="0 0 122.88 120.26" style="margin-top: 10px; enable-background:new 0 0 122.88 120.26"><g><polygon points="0,14.54 0,0 49.81,0 49.81,14.54 36.93,17.03 36.93,51.7 85.98,51.7 85.98,17.03 73.1,14.54 73.1,0 85.98,0 110,0 122.88,0 122.88,14.54 110,17.03 110,103.31 122.88,105.79 122.88,120.26 73.1,120.26 73.1,105.79 85.98,103.31 85.98,70.3 36.93,70.3 36.93,103.31 49.81,105.79 49.81,120.26 0,120.26 0,105.79 12.8,103.31 12.8,17.03 0,14.54"/></g></svg>'

export const accentTitle = {
	id: ACCENT_TITLE,
	category: TITLES_CATEGORY,
	content: {type: ACCENT_TITLE},
	label: accentTitleLabel,

	type: ACCENT_TITLE,
	components: accentTitleHtml,
	styles: accentTitleCss,
	highlightable: false,

};