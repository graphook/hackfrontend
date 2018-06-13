import React from 'react';
import {browserHistory} from 'react-router';

const SetResult = React.createClass({
  render() {
    return (
      <div
          className="set-result"
          onClick={browserHistory.push.bind(null, '/set/' + this.props.data.id)}>
        <h2>{this.props.data.title}</h2>
        <p className="description">{this.props.data.description}</p>
        <p>{this.props.data.numItems} items</p>
      </div>
    );
  }
});

export default SetResult;
