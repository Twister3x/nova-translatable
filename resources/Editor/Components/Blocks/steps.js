import {STEPS} from "../../Configuration/Types/blockTypes";
import {BLOCKS_CATEGORY} from "../../Configuration/Types/categoryTypes";

const stepsCss = `
	.steps {
		max-width: 560px;
		background: white;
		padding: 24px 40px;
		margin-bottom: 32px;
	}
	
	.steps__title{
		font-family: Roboto;
		font-style: normal;
		font-weight: 500;
		font-size: 18px;
		line-height: 155%;
		color: #94002A;
	}
	
	.steps__line{
		margin-top: 16px;
		margin-bottom: 20px;
		width: 98px;
		height: 1px;
		background: #A09A92;
	}
	
	.outer-list{
		padding: 0px 0px 0px 20px;
		font-size: 16px;
		line-height: 26px;
		margin-top: 0px;
		margin-bottom: 10px;
		list-style-type: none;
		color: #827C76;
	}
	
	.outer-list div{
		margin-bottom: 12px;
		position: relative;
	}
	
	.outer-list div::before{
		content: '•';
		position: absolute;
		left: -20px;
	}
`;

const stepsHtml = `
	<div class="steps">
		<h3 class="steps__title">Title</h3>
		<div class="steps__line"></div>
		
		<ul class="outer-list">Lorem</ul>
	</div>
`;

const stepsLabel = 'Список с заголовком<br/><svg width="20" height="20" style="margin-top: 10px" viewBox="0 0 122.88 118.96"><path d="M3.27,0H119.61a3.26,3.26,0,0,1,3.27,3.27V115.69a3.26,3.26,0,0,1-3.27,3.27H3.27A3.26,3.26,0,0,1,0,115.69V3.27A3.26,3.26,0,0,1,3.27,0ZM116.34,44H6.54v68.41h109.8V44ZM6.54,6.54V37.47h109.8V6.54Z"/></svg>'

export const steps = {
	id: STEPS,
	category: BLOCKS_CATEGORY,
	content: {type: STEPS},
	label: stepsLabel,

	type: STEPS,
	components: stepsHtml,
	styles: stepsCss,
	highlightable: false
}