'use strict';

import React, { Component } from 'react';
import SearchForm from '../components/searchform';
import SearchResults from '../components/searchresults';
import SearchHistory from '../components/searchhistory';
import moment from 'moment';

class SearchApp extends Component {
	constructor ( props )
	{
		super( props );

		this.state = {
			queries: [],
			searchResults: []
		}

		this.removeHistoryItem = this.removeHistoryItem.bind( this );
		this.addHistoryItem = this.addHistoryItem.bind( this );
	}

	removeHistoryItem( query )
	{
		if( query && this.state.queries ){
			let queries = this.state.queries.filter( q => q.timestamp != query.timestamp );
			this.setState( { queries } );
		}
	}

	addHistoryItem( queryString )
	{
		let { queries } = this.state;
		const newQuery = {
			queryString,
			timestamp: moment()
		};

		queries.push(newQuery);
		this.setState( { queries } );
	}


	render() {
		return (
			<div className="root">
				<header>
					<div className="logo"/>
				</header>
				<main>
					<SearchForm
						addHistoryItem={ this.addHistoryItem }
					/>
					<SearchHistory
						queries={ this.state.queries }
						removeHistoryItem={ this.removeHistoryItem }
					/>
				</main>
			</div>
		);
	}
}

export default SearchApp;
