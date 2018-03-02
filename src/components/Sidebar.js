'use strict';

import {isServerSide} from 'metal';
import Component from 'metal-component';
import Soy from 'metal-soy';
import Toggler from 'metal-toggler';

import templates from './Sidebar.soy.js';

class Sidebar extends Component {
	attached() {
		if (isServerSide()) {
			return;
		}

		Toggler.CSS_EXPANDED = 'open'; /* Until metal-toggler can manage classenames on states */

		this._toggler = new Toggler(
			{
				content: '.sidebar-toggler-content',
				header: '.sidebar-toggler'
			}
		);
	}

	disposed(...args) {
		if (isServerSide()) {
			return;
		}

		this._toggler.dispose();
	}
};

Soy.register(Sidebar, templates);

export default Sidebar;