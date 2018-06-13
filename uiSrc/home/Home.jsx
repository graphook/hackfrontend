import React from 'react';
import './home.scss'
import SetSearch from '../search/SetSearch.jsx'

const Home = React.createClass({
  render() {
    return (
      <div className="home">
        <div className="banner-container">
          <h1>zenow</h1>
          <p>social data sharing</p>
        </div>
        <SetSearch />
      </div>
    );
  }
});

export default Home;
