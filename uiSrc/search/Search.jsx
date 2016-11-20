import React from 'react';
import './search.scss'
import { browserHistory } from 'react-router';

const Search = React.createClass({
  getInitialState: function() {
    return {
      searchText: this.props.query || ''
    }
  },
  updateSearchText: function(e) {
    this.setState({
      searchText: e.target.value
    })
  },
  search: function(e) {
    e.preventDefault();
    browserHistory.push('/' + this.props.redirect + '?q=' + this.state.searchText);
  },
  render() {
    let ResultComponent = this.props.resultComponent;
    return (
      <div className="search">
        <form className="search-bar" onSubmit={this.search}>
          <input
              type="text"
              placeholder="find data sets"
              onChange={this.updateSearchText}
              value={this.state.searchText} />
          <input type="submit" value="search" />
        </form>
        <section className="search-results">
          {this.props.searchResults.map((result) => {
            return (
              <div className="search-result">
                <ResultComponent data={result} />
              </div>
            );
          })}
        </section>
      </div>
    );
  }
});

export default Search;
