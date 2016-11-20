import React from 'react';
import HeaderObject from './headerTypes/Object.jsx'
import {clone} from 'lodash';

const encodeType = function(type) {
  type = clone(type, true);
  if (type.type === 'object') {
    type.properties = Object.keys(type.properties).map((prop) => {
      type.properties[prop].id = prop;
      return encodeType(type.properties[prop]);
    })
    return type;
  } else if (type.type === 'array') {
    type.items = encodeType(type.items);
    return type;
  } else {
    return type;
  }
}

const decodeType = function(type) {
  type = clone(type, true);
  if (type.type === 'object') {
    let tempProperties = {};
    type.properties.forEach((prop) => {
      tempProperties[prop.id] = decodeType(prop);
      delete tempProperties[prop.id].id;
    });
    type.properties = tempProperties;
    return type;
  } else if (type.type === 'array') {
    type.items = decodeType(type.items);
    return type;
  } else {
    return type;
  }
}

const NtHead = React.createClass({
  getInitialState: function() {
    return {
      type: encodeType(this.props.type)
    }
  },
  componentWillReceiveProps: function(newProps) {
    this.setState({
      type: encodeType(newProps.type)
    });
  },
  typeModified: function(path, value) {
    let curVal = this.state.type
    path.forEach((key, i) => {
      if (i < (path.length - 1)) {
        curVal = curVal[key];
      }
    });
    curVal[path[path.length - 1]] = value;
    this.props.typeModified(decodeType(this.state.type));
  },
  render() {
    return (
      <div className="nt-head-area">
        <pre>
          {JSON.stringify()}
        </pre>
        <HeaderObject
          typeModifiable={this.props.typeModifiable}
          typeModified={this.typeModified}
          type={this.state.type}
          path={[]} />
      </div>
    );
  }
});
/*
typeExtendable
typeModifiable
dataModyifiable
data
type
onDataChange(newData)
onTypeChange(newType)
*/

export default NtHead;
