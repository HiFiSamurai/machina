'use strict';

import {
    createTemplate,
    createView
} from 'ui-toolkit/dist/js/views';

import './gear.scss';
import html from './gear.html';

class Gear extends HTMLElement {
    attachedCallback() {
        const content = createTemplate(html);
        this.appendChild(content);
    }
}

export default createView('machina-gear', Gear);
