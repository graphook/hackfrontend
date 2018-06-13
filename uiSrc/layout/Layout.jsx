import './layout.scss';
import React from 'react';
import {Link} from 'react-router';


const Layout = React.createClass({
  render() {
    return (
      <div>
        <header>
          <h1><Link to='/home'>zenow</Link></h1>
          <nav>
            <ul>
              <li><Link to='/setsearch'>data sets</Link></li>
              <li><Link to='/typesearch'>data types</Link></li>
              <li><Link to='/profile'>profile</Link></li>
            </ul>
          </nav>
        </header>
        <main>{this.props.children}</main>
      </div>
    );
  }
});

export default Layout;
