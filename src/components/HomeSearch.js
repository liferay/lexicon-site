'use strict';

import Component from 'metal-component';
import dom from 'metal-dom';
import Soy from 'metal-soy';

import {ElectricSearchAutocomplete} from 'electric-clay-components';

import templates from './HomeSearch.soy.js';

class HomeSearch extends ElectricSearchAutocomplete {
	attached() {
		super.attached();

		this.autocomplete.elementClasses = 'home-search';
	}
};

Soy.register(HomeSearch, templates);

export default HomeSearch;