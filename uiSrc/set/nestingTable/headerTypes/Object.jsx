import React from 'react';
import HeaderArray from './Array.jsx';
import HeaderOther from './Other.jsx';

const findDuplicates = function(arr) {
    var duplicates = {};
    for (var i = 0; i < arr.length; i++) {
        if(duplicates.hasOwnProperty(arr[i])) {
            duplicates[arr[i]].push(i);
        } else if (arr.lastIndexOf(arr[i]) !== i) {
            duplicates[arr[i]] = [i];
        }
    }
    return duplicates;
};

const HeaderObject = React.createClass({
  updateKeyName: function(path, prop, e) {
    prop.id = e.target.value;
    this.props.typeModified(path, prop);
  },
  render() {
    return (
      <div className="item-container">
        {this.props.type.properties.map((prop, index) => {
          let tempPath = this.props.path.slice(0);
          tempPath.push('properties');
          tempPath.push(index);
          let keyIndicator = prop.id;
          if (this.props.typeModifiable) {
            keyIndicator = (
              <input
                  type="text"
                  value={prop.id}
                  onChange={this.updateKeyName.bind(null, tempPath, prop)} />
            )
          }
          if (prop.type === 'object') {
            return (
              <div className="item">
                {keyIndicator}
                <HeaderObject
                  typeModifiable={this.props.typeModifiable}
                  typeModified={this.props.typeModified}
                  type={prop}
                  path={tempPath} />
              </div>
            )
          } else if (prop.type === 'array') {
            return (
              <div className="item">
                {keyIndicator}[]
                <HeaderArray
                  typeModifiable={this.props.typeModifiable}
                  typeModified={this.props.typeModified}
                  type={prop}
                  path={tempPath} />
              </div>
            )
          } else {
            return (
              <div className="item">
                {keyIndicator}
                <HeaderOther
                  typeModifiable={this.props.typeModifiable}
                  typeModified={this.props.typeModified}
                  type={prop}
                  path={tempPath} />
              </div>
            )
          }
        })}
      </div>
    )
  }
});

export default HeaderObject;
