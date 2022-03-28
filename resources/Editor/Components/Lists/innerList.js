import {INNER_LIST} from "../../Configuration/Types/blockTypes";
import {LISTS_CATEGORY} from "../../Configuration/Types/categoryTypes";

const innerListCss = `
	.inner-list{
		padding: 0px 0px 20px 35px;
		font-size: 16px;
		line-height: 26px;
		margin-top: -10px;
		margin-bottom: 10px;
		list-style-type: none;
		background: white;
	}
`;

const innerListHtml = `
	<ul class="inner-list">Lorem</ul>
`;
const innerListLabel = 'Вложенный список<br><svg width="20" height="20" viewBox="0 0 122.88 112.5" style="margin-top: 10px; enable-background:new 0 0 122.88 112.5"><g><path class="st0" d="M12.56,87.39c6.93,0,12.56,5.62,12.56,12.56c0,6.93-5.62,12.56-12.56,12.56C5.62,112.5,0,106.88,0,99.95 C0,93.01,5.62,87.39,12.56,87.39L12.56,87.39z M35.07,88.24h86.38c0.79,0,1.43,0.64,1.43,1.43v19.93c0,0.79-0.64,1.43-1.43,1.43 H35.07c-0.79,0-1.43-0.64-1.43-1.43V89.67C33.64,88.88,34.29,88.24,35.07,88.24L35.07,88.24z M35.07,44.7h86.38 c0.79,0,1.43,0.64,1.43,1.43v19.93c0,0.79-0.64,1.43-1.43,1.43H35.07c-0.79,0-1.43-0.64-1.43-1.43V46.13 C33.64,45.34,34.29,44.7,35.07,44.7L35.07,44.7z M35.07,1.16h86.38c0.79,0,1.43,0.64,1.43,1.43v19.93c0,0.79-0.64,1.43-1.43,1.43 H35.07c-0.79,0-1.43-0.64-1.43-1.43V2.59C33.64,1.8,34.29,1.16,35.07,1.16L35.07,1.16z M12.56,43.69c6.93,0,12.56,5.62,12.56,12.56 c0,6.93-5.62,12.56-12.56,12.56C5.62,68.81,0,63.19,0,56.25C0,49.32,5.62,43.69,12.56,43.69L12.56,43.69z M12.56,0 c6.93,0,12.56,5.62,12.56,12.56c0,6.93-5.62,12.56-12.56,12.56C5.62,25.11,0,19.49,0,12.56C0,5.62,5.62,0,12.56,0L12.56,0z"/></g></svg>'

export const innerList = {
	id: INNER_LIST,
	category: LISTS_CATEGORY,
	content: {type: INNER_LIST},
	label: innerListLabel,

	type: INNER_LIST,
	components: innerListHtml,
	styles: innerListCss,
	highlightable: false,

}