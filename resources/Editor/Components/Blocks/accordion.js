import {ACCORDION} from "../../Configuration/Types/blockTypes";
import {accentTitle} from "../Titles/accentTitle";
import {BLOCKS_CATEGORY} from "../../Configuration/Types/categoryTypes";

const accordionCss = `
	.accordion {
		width: 100%;
		margin-top: 32px;
		background: white;
	}
	
	.accordion__head{
		width: 100%;
		border: none;
		background: white;
		display: flex;
		justify-content: space-between;
		align-items: center;
		min-height: 50px;
		padding: 20px;
		gap: 40px;
	}
	
	.accordion__head-svg{
		border: none;
		min-width: 28px;
		max-width: 28px;
		height: 28px;
		border-radius: 50%;
		background: white;
		box-shadow: 0px 2px 10px rgba(130, 124, 118, 0.1); 
		margin-left: auto;
		
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.accordion__head-title{
		font-style: normal;
		font-weight: normal;
		font-size: 42px;
		line-height: 52px;
		color: #94002A;
		margin: 0;
	}
	
	.accordion__content{
		min-height: 200px;
		padding: 20px;
	}
	
	${accentTitle.styles}
`;

const accordionHtml = `
	<div class="accordion">
	
		<div class="accordion__head">
			${accentTitle.components}
			
			<div class="accordion__head-svg"  draggable="false">
				<svg width="16" height="10" viewBox="0 0 16 10" fill="none">
					<path d="M1 9C5.55814 7.09091 7.83721 2 7.83721 2C7.83721 2 10.4419 7.09091 15 9" stroke="#827C76"/>
				</svg>
			</div>
		</div>
		
		<div class="accordion__content"></div>
	</div>
`;

const accordionLabel = 'Акордеон<br/><svg width="30px" height="30px" style="margin-top: 10px;" viewBox="0 0 700 700"><g><path d="m120.45 250.59h459.11c21.672 0 39.246-17.574 39.246-39.246v-161.68c0-21.672-17.574-39.246-39.246-39.246h-459.11c-21.672 0-39.246 17.566-39.246 39.246v161.68c0 21.672 17.574 39.242 39.246 39.242zm-1.1758-200.93c0-0.64844 0.52734-1.1758 1.1758-1.1758h459.11c0.64844 0 1.1758 0.52734 1.1758 1.1758v161.68c0 0.64844-0.52734 1.1758-1.1758 1.1758h-459.11c-0.64844 0-1.1758-0.52734-1.1758-1.1758z"/><path d="m206.37 160.55c4.3398 5.0273 10.645 7.9141 17.289 7.9141 6.6406 0 12.941-2.8828 17.289-7.9141l33.281-38.539c6.8711-7.957 5.9883-19.977-1.9648-26.848-7.957-6.875-19.977-5.9922-26.848 1.9648l-21.762 25.195-21.762-25.195c-6.8711-7.957-18.891-8.8438-26.848-1.9648-7.957 6.8711-8.8359 18.891-1.9648 26.848z"/><path d="m618.8 348.65c0-21.672-17.574-39.246-39.246-39.246h-459.11c-21.672 0-39.246 17.57-39.246 39.246v161.68c0 21.672 17.574 39.246 39.246 39.246h459.11c21.672 0 39.246-17.574 39.246-39.246zm-38.07 161.68c0 0.64844-0.52734 1.1758-1.1758 1.1758h-459.11c-0.64844 0-1.1758-0.52734-1.1758-1.1758v-161.68c0-0.64844 0.52734-1.1758 1.1758-1.1758h459.11c0.64844 0 1.1758 0.52734 1.1758 1.1758z"/><path d="m245.42 396.12-21.762 25.195-21.762-25.195c-6.8711-7.957-18.891-8.8438-26.848-1.9648-7.957 6.8711-8.8359 18.891-1.9648 26.848l33.281 38.543c4.3398 5.0273 10.645 7.9141 17.289 7.9141 6.6406 0 12.941-2.8828 17.289-7.9141l33.281-38.539c6.8711-7.957 5.9883-19.977-1.9648-26.848-7.957-6.8828-19.977-5.9961-26.84 1.9609z"/></g></svg>'

export const accordion = {
	id: ACCORDION,
	category: BLOCKS_CATEGORY,
	content: {type: ACCORDION},
	label: accordionLabel,

	type: ACCORDION,
	components: accordionHtml,
	styles: accordionCss,
	highlightable: false,
}