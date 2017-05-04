'use strict';

const req = require.context('./icons');
req.keys().map(req);

import { createTemplate } from 'ui-toolkit/dist/js/views';
import 'src/components/gear';

import './app.scss';
import html from './app.html';

class App extends HTMLElement {
    attachedCallback() {
        const content = createTemplate(html);
        this.appendChild(content);

        this.ignition.onchange = (ev) => {
            this.running = ev.target.checked;
        };

        this.running = true;
    }

    get running() {
        return this.getAttribute('running');
    }

    set running(value) {
        this.ignition.checked = value;
        if (value) {
            this.setAttribute('running', true);
        } else {
            this.removeAttribute('running');
        }
    }

    get ignition() {
        return this.querySelector('#ignition');
    }
}

document.registerElement('machina-app', App);
