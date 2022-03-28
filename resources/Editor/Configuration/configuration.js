import {accordion} from "../Components/Blocks/accordion";
import {answer} from "../Components/Blocks/answer";
import {columns} from "../Components/Blocks/columns";
import {header} from "../Components/Blocks/header";
import {arrowLink} from "../Components/Blocks/arrowLink";
import {mainContainer} from "../Components/Blocks/mainContainer";
import {innerList} from "../Components/Lists/innerList";
import {outerList} from "../Components/Lists/outerList";
import {ordinaryText} from "../Components/Text/ordinaryText";
import {accentTitle} from "../Components/Titles/accentTitle";
import {mainTitle} from "../Components/Titles/mainTitle";
import {steps} from "../Components/Blocks/steps";

const customBlocks = [steps, accordion, answer, columns, header, arrowLink, mainContainer, innerList, outerList, ordinaryText, accentTitle, mainTitle];

const initializeTypeHelper = (editor, block) => {
	const {type, components, styles} = block;

	editor.DomComponents.addType(type, {
		model: {
			defaults: {
				styles,
				components,
				badgable: false,
				highlightable: false,
				propagate: ['highlightable', 'droppable', 'badgable']
			}
		}
	});
}

const initializeBlockHelper = (block) => ({
	id: block.id,
	category: block.category,
	label: block.label,
	content: block.content
});

export const typesManager = customBlocks.map(block => (editor) => initializeTypeHelper(editor, block));
export const blocksManager = customBlocks.map(block => initializeBlockHelper(block));
