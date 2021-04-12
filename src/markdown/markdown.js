import { Plugin } from 'ckeditor5/src/core';
import Markdown from '@ckeditor/ckeditor5-markdown-gfm/src/markdown';

export default class MarkdownPlugin extends Plugin {
    static get requires() {
        return [Markdown];
    }
}
