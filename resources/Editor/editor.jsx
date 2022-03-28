import React, {useEffect, useState} from 'react';
import {blocksManager, typesManager} from "./Configuration/configuration";
import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from "grapesjs";
import './editor.css';
import '../styles.css';

const Editor = () => {
	const [editor, setEditor] = useState(null);
	const [html, setHtml] = useState('');

	useEffect(() => {
		const editor = grapesjs.init({
			container: '#editor',
			plugins: [...typesManager],
			allowMissingTagName: true,
			protectedCss: 'body{ background: #e5e5e5; } a {color: #94002A; font-weight: 600; text-decoration: none; border-bottom: 1px solid #94002A;}'
		});

		const rte = editor.RichTextEditor;

		rte.add('center', {
			icon: `Center text`,
			attributes: {title: 'Centered'},
			result: rte => {
				let className = rte.settings.el.className + ' ordinary-text' + ' center-text';
				console.log(rte.settings.el.className, className);
				rte.exec('justifyCenter');
				rte.insertHTML(`<p class="${className}" style="text-align: center;">${rte.selection()}</p>`)
			}
		});

		rte.add('grey', {
			icon: `Grey text`,
			attributes: {title: 'Grey text'},
			result: rte => {
				let className = rte.settings.el.className + ' ordinary-text' + ' grey-text';
				console.log(rte.settings.el.className, className);
				rte.insertHTML(`<p class="${className}" style="color: #827C76;">${rte.selection()}</p>`)
			}
		});

		blocksManager.forEach(blockInfo => {
			const {id, label, content, category} = blockInfo;
			editor.BlockManager.add(id, {label, content, category});
		});

		setEditor(editor);
	}, []);

	return (
		<>
			<div id='editor' style={{height: '100vh !important',}}></div>

			<div className="result__wrapper">
				<button onClick={() => setHtml(editor.getHtml())}>Посмотреть результат</button>
				<div className="result__output"
					dangerouslySetInnerHTML={{__html: html}}/>
			</div>
		</>
	);
};

export default Editor;
