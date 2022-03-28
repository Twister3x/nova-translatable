import {MAIN_CONTAINER} from "../../Configuration/Types/blockTypes";
import {BLOCKS_CATEGORY} from "../../Configuration/Types/categoryTypes";

const mainContainerCss = `
	.container {
		max-width: 1160px;
		min-height: 100vh;
		margin: auto;
		padding: 50px 0px;
		background: #e5e5e5;
	}
`;

const mainContainerHtml = `
	<div  class="container"></div>
`;

const mainContainerLabel = 'Главный контейнер<br/><svg width="40" height="40" style="margin-top: 10px;" viewBox="0 0 122.88 83.68"><path class="cls-1" d="M14.48,0H108.4a14.63,14.63,0,0,1,14.48,14.69V69A14.63,14.63,0,0,1,108.4,83.68H14.48A14.62,14.62,0,0,1,0,69V14.69A14.62,14.62,0,0,1,14.48,0Zm.28,7.59h93.36a7.27,7.27,0,0,1,7.25,7.24v54a7.27,7.27,0,0,1-7.25,7.25H14.76a7.27,7.27,0,0,1-7.25-7.25v-54a7.27,7.27,0,0,1,7.25-7.24Z"/></svg>'

export const mainContainer = {
	id: MAIN_CONTAINER,
	category: BLOCKS_CATEGORY,
	content: {type: MAIN_CONTAINER},
	label: mainContainerLabel,

	type: MAIN_CONTAINER,
	components: mainContainerHtml,
	styles: mainContainerCss,
	highlightable: true,

}