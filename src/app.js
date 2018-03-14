import View from '@HiFiSamurai/ui-toolkit/dist/js/view';
import 'src/components/gear';
import 'src/components/belt';

import './app.scss';
import html from './app.html';

const req = require.context('./icons');
req.keys().map(req);

class App extends View {
    static get name() { return 'machina-app'; }
    static get html() { return html; }

    connectedCallback() {
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
