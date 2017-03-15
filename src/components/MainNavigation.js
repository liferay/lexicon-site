'use strict';

import Component from 'metal-component';
import dom from 'metal-dom';
import Soy from 'metal-soy';

import templates from './MainNavigation.soy';

class MainNavigation extends Component {
	handleCollapseClick_(event) {
		const parent = dom.parent(event.target, 'li');

		dom.toggleClasses(parent, 'active');
	}
};

Soy.register(MainNavigation, templates);

export default MainNavigation;
