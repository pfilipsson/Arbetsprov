'use strict';

import React, { Component } from 'react';
import SearchForm from '../components/searchform';
import SearchHistory from '../components/searchhistory';

class SearchApp extends Component {
	constructor ( props )
	{
		super( props );

		this.state = {
			queries: [
				{
					queryString: "Hamsters",
					queryDate: "2015-11-02T11:00:00.000Z"
				},
				{
					queryString: "Cats",
					queryDate: "2015-11-02T11:01:00.000Z"
				}

			]
		}
	}

	render() {
		return (
            <div className="root">
                <header>
                    <div className="logo"/>
                </header>
                <main>
                    <SearchForm />
                    <SearchHistory
                        queries={ this.state.queries }
                    />
                </main>
            </div>
		);
	}
}

export default SearchApp;
