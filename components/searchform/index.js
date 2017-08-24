'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SearchResults from '../searchresults';
import axios from 'axios';

class SearchForm extends Component {
	static propTypes = {
		addHistoryItem: PropTypes.func,
		search: PropTypes.func
	};

	constructor( props )
	{
		super( props );

		this.state = {
			searchResults: []
		}
	}

	onInput( event )
	{
		const queryString = event.target.value

		if( event.key === 'Enter' ) {
			if ( queryString ) {
				this.clearSearchResults();
				this.props.addHistoryItem( queryString );
			}
		}
		else {
			this.search( queryString );
		}
	}

	onBlur( event )
	{
	 	this.queryString.value = "";
		this.clearSearchResults();

	}

	clearSearchResults()
	{
		if( this.state.searchResults.length > 0 ){
			this.setState({  searchResults: [] } );
		}
	}

	search( queryString )
	{
		if ( queryString.length < 2 )
		{
			this.clearSearchResults();
		}
		else {
			axios.get(`https://www.googleapis.com/books/v1/volumes?key=AIzaSyAdcN-Ro-IMfjh-9d0xsClfRiSBRQhCEeA&fields=items(volumeInfo/title)&q=intitle:'${encodeURIComponent(queryString)}'`)
			.then(res => {
				let searchResults = [];

				if( res.data && res.data.items ) {
					searchResults = res.data.items.map(obj => obj.volumeInfo);
				}

				this.setState({ searchResults });
			})
			.catch(error => {
			    console.log(error.response)
			});
		}
	}

	render() {
		return (
			<div className="searchform">
				<div className="query">
					<input
						type="text"
						placeholder="Search for something..."
						onKeyUp={ this.onInput.bind( this ) }
						onBlur={ this.onBlur.bind( this ) }
						ref={ node => this.queryString = node }
					/>
					<SearchResults
						results={ this.state.searchResults }
					/>
				</div>
			</div>
		);
	}
}

export default SearchForm;