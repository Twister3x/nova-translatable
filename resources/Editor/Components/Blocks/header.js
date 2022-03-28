import {HEADER} from "../../Configuration/Types/blockTypes";
import {BLOCKS_CATEGORY} from "../../Configuration/Types/categoryTypes";

const headerCss = `
	.header {
		width: 100%;
		padding: 120px 0px;
		text-align: center;
	}
	
	.header__title{
		font-family: Forum;
		font-style: normal;
		font-weight: normal;
		font-size: 60px;
		line-height: 70px;
		text-align: center;
		text-transform: uppercase;
    margin-bottom: 80px;
    position: relative;
    z-index: 1;
	}
	
	.header__text{
		font-family: Roboto;
		font-style: normal;
		font-weight: normal;
		font-size: 16px;
		line-height: 150%;
		color: #827C76;
	}
	
`;

const headerHtml = `
	<div class="header">
		<h1 class="header__title">Title</h1>
		<p class="header__text">Lorem ipsum</p>
	</div>
`;

const headerLabel = 'Начало страницы<br/><svg width="30" height="30" viewBox="0 0 122.88 85.36" style="margin-top: 10px;enable-background:new 0 0 122.88 85.36"><g><path d="M6.12,12.23C2.74,12.23,0,9.49,0,6.12C0,2.74,2.74,0,6.12,0h110.65c3.38,0,6.12,2.74,6.12,6.12c0,3.38-2.74,6.12-6.12,6.12 H6.12L6.12,12.23z M26.25,85.36c-3.38,0-6.12-2.74-6.12-6.12c0-3.38,2.74-6.12,6.12-6.12h70.38c3.38,0,6.12,2.74,6.12,6.12 c0,3.38-2.74,6.12-6.12,6.12H26.25L26.25,85.36z M6.12,60.99C2.74,60.99,0,58.25,0,54.87c0-3.38,2.74-6.12,6.12-6.12h110.65 c3.38,0,6.12,2.74,6.12,6.12c0,3.38-2.74,6.12-6.12,6.12H6.12L6.12,60.99z M26.25,36.61c-3.38,0-6.12-2.74-6.12-6.12 c0-3.38,2.74-6.12,6.12-6.12h70.38c3.38,0,6.12,2.74,6.12,6.12c0,3.38-2.74,6.12-6.12,6.12H26.25L26.25,36.61z"/></g></svg>'

export const header = {
	id: HEADER,
	category: BLOCKS_CATEGORY,
	content: {type: HEADER},
	label: headerLabel,

	type: HEADER,
	components: headerHtml,
	styles: headerCss,
	highlightable: false,

}