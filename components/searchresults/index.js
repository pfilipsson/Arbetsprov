'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SearchResults extends Component {
	static propTypes = {
		results: PropTypes.array
	};

	render() {
		return (
			<div className={`searchresults ${ this.props.results.length > 0 ? 'has-results' : ''}`}>
				<ul className="results">
				{
					this.props.results.map( (result, index) => <li key={ "res-" + index }>{ result.title }</li>)
				}
				</ul>
			</div>
		);
	}
}

export default SearchResults;