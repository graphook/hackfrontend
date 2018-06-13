import React from 'react';
import './nestingTable.scss'
const NtObject = require('./types/NtObject.jsx')
import NtHead from './NtHead.jsx'

const NestingTable = React.createClass({
  handleDataChange: function(path, value) {
    let curVal = this.props.data
    path.forEach((key, i) => {
      if (i < (path.length - 1)) {
        curVal = curVal[key];
      }
    });
    curVal[path[path.length - 1]] = value;
    this.props.onDataChange(this.props.data);
  },
  render() {
    return (
      <div className="nesting-table">
        <NtHead
          type={this.props.type}
          typeExtendable={this.props.typeExtendable}
          typeModifiable={this.props.typeModifiable}
          typeModified={this.props.onTypeChange}/>
        {this.props.data.map((row, index) => {
          return (
            <div className="nt-row">
              <NtObject
                type={this.props.type}
                data={row}
                dataModified={this.handleDataChange}
                path={[index]}/>
            </div>
          )
        })}
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

export default NestingTable;
