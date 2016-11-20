import React from 'react';
import Search from './Search.jsx'
import SetResult from './SetResult.jsx'
import {Link} from 'react-router'

const SetSearch = React.createClass({
  getInitialState: function() {
    return {
      searchResults: [
        {
          id: 1,
          title: 'Census Data',
          description: 'United States Census data as of 2010. Gathered by the US Census beaureau.',
          numItems: 350,
          type: {
            title: 'County Data',
            id: 123123
          }
        },
        {
          id: 2,
          title: 'Census Data',
          description: 'United States Census data as of 2010. Gathered by the US Census beaureau.',
          numItems: 350,
          type: {
            title: 'County Data',
            id: 123123
          }
        },
        {
          id: 3,
          title: 'Census Data',
          description: 'United States Census data as of 2010. Gathered by the US Census beaureau.',
          numItems: 350,
          type: {
            title: 'County Data',
            id: 123123
          }
        },
        {
          id: 4,
          title: 'Census Data',
          description: 'United States Census data as of 2010. Gathered by the US Census beaureau.',
          numItems: 350,
          type: {
            title: 'County Data',
            id: 123123
          }
        }
      ]

    }
  },
  render() {
    let q = ''
    if (this.props.location && this.props.location.query && this.props.location.query.q) {
      q = this.props.location.query.q
    }
    return (
      <div>
        <Search
            searchResults={this.state.searchResults}
            redirect='setsearch'
            query={q}
            resultComponent = {SetResult} />
        <Link className="circle-button" to="/set">+</Link>
      </div>
    );
  }
});

export default SetSearch;
