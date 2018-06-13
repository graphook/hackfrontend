import React from 'react';
import HeaderObject from './Object.jsx';
import HeaderOther from './Other.jsx';


const HeaderArray = React.createClass({
  render() {
    let tempPath = this.props.path.slice(0);
    tempPath.push('items');
    return (
      <div className="item">
        {(() => { if (this.props.type.items.type === 'object') {
          return (
            <HeaderObject
              typeModifiable={this.props.typeModifiable}
              typeModified={this.props.typeModified}
              type={this.props.type.items}
              path={tempPath} />
          )
        } else if (this.props.type.items.type === 'array') {
          return (
            <HeaderArray
              typeModifiable={this.props.typeModifiable}
              typeModified={this.props.typeModified}
              type={this.props.type.items}
              path={tempPath} />
          )
        } else {
          return (
            <HeaderOther
              typeModifiable={this.props.typeModifiable}
              typeModified={this.props.typeModified}
              type={this.props.type.items}
              path={tempPath} />
          )
        }})()}
      </div>
    )
  }
});

export default HeaderArray;
