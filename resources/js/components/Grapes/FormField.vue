<template slot="field">
    <div class="px-0">
        <div ref="theTextarea" :id="id" style="height:100%" />
    </div>
</template>

<script>
import {FormField, HandlesValidationErrors} from 'laravel-nova';

import {blocksManager, typesManager} from '../../../Editor/Configuration/configuration';
import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';

export default {
    name: 'grapes-field',
    props: ['name', 'value', 'placeholder'],
    mixins: [HandlesValidationErrors, FormField],

    methods: {
        update(locale) {
            if (this.locale != locale) {
                this.locale = locale;
            }

            this.editor.setComponents(this.instanceValue[locale]);
        },
        onInitialize() {
            this.editor.setComponents(this.value);
        },
    },

    data() {
        return {
            id: 'editor'+String(Math.random()).replace('.', ''),
            instanceValue: this.field.value,
            editor: null,
            locale: this.field.indexLocale,
        };
    },

    /**
     * Mount the component.
     */
    mounted() {
        fetch(`${window.location.origin}/nova-api/styles/nova-translatable-grapes`)
            .then(response => response.text())
            .then(editorCss => {
                this.editor = grapesjs.init({
                    container: `#${this.id}`,
                    plugins: [...typesManager],
                    allowMissingTagName: true,
                    protectedCss: `${editorCss} body{ background: #e5e5e5; } a {color: #94002A; font-weight: 600; text-decoration: none; border-bottom: 1px solid #94002A;}`,
                });

                const rte = this.editor.RichTextEditor;

                rte.add('center', {
                    icon: `Center text`,
                    attributes: {title: 'Centered'},
                    result: rte => {
                        let className = rte.settings.el.className + ' ordinary-text' + ' center-text';
                        console.log(rte.settings.el.className, className);
                        rte.exec('justifyCenter');
                        rte.insertHTML(`<p class="${className}" style="text-align: center;">${rte.selection()}</p>`);
                    },
                });

                rte.add('grey', {
                    icon: `Grey text`,
                    attributes: {title: 'Grey text'},
                    result: rte => {
                        let className = rte.settings.el.className + ' ordinary-text' + ' grey-text';
                        console.log(rte.settings.el.className, className);
                        rte.insertHTML(`<p class="${className}" style="color: #827C76;">${rte.selection()}</p>`);
                    },
                });

                blocksManager.forEach(blockInfo => {
                    const {id, label, content, category} = blockInfo;
                    this.editor.BlockManager.add(id, {label, content, category});
                });

                this.editor.on('update', () => {
                    this.value = this.editor.getHtml();
                    this.instanceValue[this.locale] = this.editor.getHtml();
                });

                this.editor.setComponents(this.instanceValue[this.locale]);
            });
    },

    watch: {
        value(val) {
            try {
                this.$emit('change', val)
            } catch (e) {}
        }
    },
};
</script>
