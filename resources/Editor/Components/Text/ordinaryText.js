import {TEXT} from "../../Configuration/Types/blockTypes";
import {TEXT_CATEGORY} from "../../Configuration/Types/categoryTypes";

const ordinaryTextCss = `
	.ordinary-text {
		font-family: Roboto;
		font-style: normal;
		font-weight: normal;
		font-size: 16px;
		line-height: 26px;
	}
`;

const ordinaryTextHtml = `
	<p class="ordinary-text">Lorem ipsum</p>
`;

const ordinaryTextLabel = 'Текст <br><svg width="30" height="30" viewBox="0 0 122.88 85.32" style="margin-top: 10px; enable-background:new 0 0 122.88 85.32"><g><path d="M6.15,12.23c-3.38,0-6.11-2.74-6.11-6.11S2.77,0,6.15,0h110.59c3.38,0,6.11,2.74,6.11,6.11s-2.74,6.11-6.11,6.11H6.15 L6.15,12.23z M6.11,85.32C2.74,85.32,0,82.58,0,79.2c0-3.38,2.74-6.11,6.11-6.11h110.65c3.38,0,6.11,2.74,6.11,6.11 c0,3.38-2.74,6.11-6.11,6.11H6.11L6.11,85.32z M6.15,60.95c-3.38,0-6.11-2.74-6.11-6.11s2.74-6.11,6.11-6.11h110.59 c3.38,0,6.11,2.74,6.11,6.11s-2.74,6.11-6.11,6.11H6.15L6.15,60.95z M6.11,36.59C2.74,36.59,0,33.85,0,30.48s2.74-6.11,6.11-6.11 h110.65c3.38,0,6.11,2.74,6.11,6.11s-2.74,6.11-6.11,6.11H6.11L6.11,36.59z"/></g></svg>';

export const ordinaryText = {
	id: TEXT,
	category: TEXT_CATEGORY,
	content: {type: TEXT},
	label: ordinaryTextLabel,

	type: TEXT,
	components: ordinaryTextHtml,
	styles: ordinaryTextCss,
	highlightable: false,

};

