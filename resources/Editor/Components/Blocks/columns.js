import {BLOCKS_CATEGORY} from "../../Configuration/Types/categoryTypes";
import {COLUMNS} from '../../Configuration/Types/blockTypes';

const columnsCss = `
	.column{
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: 50px;
	}
	
	.column .row{
		width: 50%;
		min-height: 100px;
		border: 1px solid black;
	}
`;

const columnsHtml = `
	<div class="column">
		<div class="row"></div>
		<div class="row"></div>
	</div>
`;

const columnsLabel = 'Две колонки<br/><svg width="30" height="30" viewBox="0 0 114.12 122.88" style="margin-top: 10px; enable-background:new 0 0 114.12 122.88"><g><path d="M5.58,0h44.65c0,40.96,0,81.92,0,122.88l0,0H5.58c-1.52,0-2.92-0.63-3.94-1.65l-0.01-0.01c-1.01-1.01-1.63-2.4-1.63-3.94 V5.6c0-1.53,0.63-2.92,1.65-3.94l0.01-0.01C2.66,0.62,4.05,0,5.58,0L5.58,0L5.58,0L5.58,0z M108.54,0H63.89 c0,40.96,0,81.92,0,122.88l0,0h44.65c1.52,0,2.92-0.63,3.94-1.65l0.01-0.01c1.01-1.01,1.63-2.4,1.63-3.94V5.6 c0-1.53-0.63-2.92-1.65-3.94l-0.01-0.01C111.46,0.62,110.07,0,108.54,0L108.54,0L108.54,0L108.54,0z"/></g></svg>'

export const columns = {
	id: COLUMNS,
	category: BLOCKS_CATEGORY,
	content: {type: COLUMNS},
	label: columnsLabel,

	type: COLUMNS,
	components: columnsHtml,
	styles: columnsCss,
	highlightable: true,

}