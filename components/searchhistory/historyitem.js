'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

class HistoryItem extends Component {
	static propTypes = {
		query: PropTypes.object
	};

	constructor ( props )
	{
		super( props );
	}

	render()
	{
		return (
			<li className="query">
				<span className="string">{ this.props.query.queryString }</span>
				<span className="date">{ moment(this.props.query.queryDate).format("YYYY-MM-DD HH:mm") }</span>
				<span className="delete-action"><i className="material-icons">cancel</i></span>
			</li>
		);
	}
}

export default HistoryItem;