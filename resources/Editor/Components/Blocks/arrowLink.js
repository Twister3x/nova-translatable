import {ARROW_LINK} from "../../Configuration/Types/blockTypes";
import {BLOCKS_CATEGORY} from "../../Configuration/Types/categoryTypes";

const arrowLinkCss = `
	.arrow__link {
		max-width: 560px;
		margin-top: 18px;
		padding-bottom: 15px;
		border-bottom: 1px solid #BDB6AE;
		display: flex;
		align-items: center;
		justify-content: space-between;
		text-decoration: none;
	}
	
	.arrow__link-title{
		color: black;
		font-family: Roboto;
		font-style: normal;
		font-weight: normal;
		font-size: 18px;
		line-height: 28px;
		margin: 0;
		padding: 5px 30px 5px 0px;
	}
`;

const arrowLinkHtml = `
	<a href=""  class="arrow__link">
		<p class="arrow__link-title">Title</p>
		<div class="arrow__link-svg">
			<svg width="21" height="13" viewBox="0 0 21 13" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M0 6.5H20M20 6.5C18.2292 6.38889 14.25 5.03333 12.5 0.5M20 6.5C18.2292 6.61111 14.25 7.96667 12.5 12.5" stroke="#BB3300"/>
			</svg>
		</div>
	</a>
`;

const arrowLabel ='Ссылка со стрелкой<br/><svg width="20" height="20" style="margin-top: 10px" viewBox="0 0 122.88 108.06"><path d="M58.94,24.28a14.27,14.27,0,0,1,20.35-20l39.49,40.16a14.28,14.28,0,0,1,0,20L80.09,103.79a14.27,14.27,0,1,1-20.35-20L74.82,68.41l-60.67-.29a14.27,14.27,0,0,1,.24-28.54l59.85.28L58.94,24.28Z"/></svg>'

export const arrowLink = {
	id: ARROW_LINK,
	category: BLOCKS_CATEGORY,
	content: {type: ARROW_LINK},
	label: arrowLabel,

	type: ARROW_LINK,
	components: arrowLinkHtml,
	styles: arrowLinkCss,
	highlightable: false,

}