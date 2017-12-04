'use strict';

const req = require.context('./icons');
req.keys().map(req);

import View from 'ui-toolkit/dist/js/View';
import 'src/components/gear';
import 'src/components/belt';

import './app.scss';
import html from './app.html';

class App extends View {
    static get name() { return 'machina-app'; }
    static get html() { return html; }

    attachedCallback() {
        this.ignition.onchange = (ev) => {
            this.running = ev.target.checked;
        };
        this.ignition.checked = this.running;
    }

    get running() {
        return this.hasAttribute('running');
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

App.wrapped();
