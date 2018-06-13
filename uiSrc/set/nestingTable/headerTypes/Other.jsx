import React from 'react';


const HeaderObject = React.createClass({
  render() {
    return (<div className="leaf-item item">{this.props.type.type}</div>)
  }
});

export default HeaderObject;
