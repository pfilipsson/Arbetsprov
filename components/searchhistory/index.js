'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import HistoryItem from './historyitem';

class SearchHistory extends Component {
	static propTypes = {
		queries: PropTypes.array,
		removeHistoryItem: PropTypes.func
	};

	constructor ( props )
	{
		super( props );
	}

	render()
	{
		if ( this.props.queries && this.props.queries.length > 0 )
		{
			return (
				<div className="searchhistory">
					<ul className="queries">
					{
						this.props.queries.map( query  => <HistoryItem key={ query.timestamp } query={ query } removeHistoryItem={ this.props.removeHistoryItem }/>)
					}
					</ul>
				</div>
			);
		}

		return (null);
	}
}

export default SearchHistory;