'use strict';

import React, {Component} from 'react';

class SearchForm extends Component {
	render() {
		return (
			<div className="searchform">
				<div className="query">
					<input type="text" placeholder="Search for something..."/>
				</div>
				<div className="search-results">

				</div>
			</div>
		);
	}
}

export default SearchForm;