'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import HistoryItem from './historyitem';

class SearchHistory extends Component {
	static propTypes = {
		queries: PropTypes.array
	};

	constructor ( props )
	{
		super( props );
	}

	render()
	{
		if ( this.props.queries )
		{
			return (
				<div className="searchhistory">
					<ul className="queries">
					{
						this.props.queries.map( (query, index) => <HistoryItem key={index} query={ query }/>)
					}
					</ul>
				</div>
			);
		}

		return (null);
	}
}

export default SearchHistory;