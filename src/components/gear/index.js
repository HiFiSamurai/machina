import View from '@HiFiSamurai/ui-toolkit/dist/js/view';

import './gear.scss';
import html from './gear.html';

class Gear extends View {
    static get name() { return 'machina-gear'; }
    static get html() { return html; }
}

export default Gear.wrapped();
