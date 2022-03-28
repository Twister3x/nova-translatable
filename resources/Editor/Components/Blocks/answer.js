import {ANSWER} from "../../Configuration/Types/blockTypes";
import {BLOCKS_CATEGORY} from "../../Configuration/Types/categoryTypes";

const answerCss = `
	.answer {
		width: 100%;
		border: 1px solid #D1CAC2;
		border-radius: 4px;
		padding: 20px;
		margin-bottom: 24px;
	}
	
	.answer__title{
		font-weight: bold;
		margin-bottom: 24px;
	}
`;

const answerHtml = `
	<div class="answer">
		<p class="answer__title">Title</p>
		<p class="answer__text">Lorem</p>
	</div>
`;

const answerLabel = 'Вопрос - ответ<br/><svg width="40px" height="40px" style="margin-top: 10px" viewBox="0 0 700 700"><g><path d="m116.8 46.668v513.33h46.668v-513.33z"/><path d="m256.67 233.37c0-0.023438 93.316-0.039063 279.95-0.039063 0.019531 0 0.039062-31.121 0.050781-93.371 0 0.027343-93.316 0.039062-279.95 0.039062-0.019532 0-0.035156 31.125-0.046875 93.371zm-46.668-93.414c0-25.75 20.871-46.625 46.715-46.625h279.9c25.801 0 46.715 20.871 46.715 46.625v93.422c0 25.746-20.871 46.621-46.715 46.621h-279.9c-25.801 0-46.715-20.871-46.715-46.621z"/><path d="m256.67 466.67h140v-93.336h-140zm-46.668-93.379c0-25.75 20.914-46.621 46.656-46.621h140.02c25.77 0 46.656 20.867 46.656 46.621v93.422c0 25.75-20.91 46.621-46.656 46.621h-140.02c-25.766 0-46.656-20.867-46.656-46.621z"/></svg>'

export const answer = {
	id: ANSWER,
	category: BLOCKS_CATEGORY,
	content: {type: ANSWER},
	label: answerLabel,

	type: ANSWER,
	components: answerHtml,
	styles: answerCss,
	highlightable: false,

}