import React from 'react';
import './nestingTable.old.scss';

const DEFAULT_COL_WIDTH = 100;

const columnsFromType = function(property, path, cols, nestedRep) {
  cols = cols || [];
  path = path || [];
  nestedRep = nestedRep || [];
  if (property.type === 'object') {
    Object.keys(property.properties).forEach((subPropKey) => {
      let tempPath = path.slice(0);
      tempPath.push(subPropKey);
      nestedRep.push({
        name: subPropKey,
        items: []
      });
      columnsFromType(property.properties[subPropKey], tempPath, cols, nestedRep[nestedRep.length - 1].items);
    });
  } else if (property.type === 'array') {
    columnsFromType(property.items, path, cols, nestedRep)
  } else {
    let key = '';
    path.forEach((subPath) => {
      key += '.' + subPath;
    });
    cols.push({
      key: key,
      path: path
    });
  }
  return {
    cols: cols,
    nestedRep: nestedRep
  };
}

const NestingTable = React.createClass({
  getInitialState: function() {
    return {
      data: this.props.data,
      selected: null
    }
  },
  headerDomRecurse: function(nestedRep) {
    return nestedRep.map((param) => {
      if (param.items.length > 0) {
        return (
          <div className="headItem">
            {param.name}
            <div className="headItemContainer">
              {this.headerDomRecurse(param.items)}
            </div>
          </div>
        )
      } else {
        return (
          <div className="headItem leafHeadItem">
            {param.name}
          </div>
        )
      }
    })
  },
  rowDomRecurse: function(nestedRep, row, path) {
    path = path || [];
    return nestedRep.map((param) => {
      if (Array.isArray(row[param.name])) {
        return (
          <div className="arrayContainer">
            {row[param.name].map((subParam, index) => {
              let tempPath = path.slice(0);
              tempPath.push(param.name)
              tempPath.push(index)
              if (param.items.length > 0) {
                return (
                  <div className="item">
                    {this.rowDomRecurse(param.items, subParam, tempPath)}
                  </div>
                )
              } else {
                return (
                  <div className="item leafItem">
                    <input
                      type="text"
                      onFocus={this.select.bind(null, tempPath)}
                      onBlur={this.deselect.bind(null, tempPath)}
                      onChange={this.changeValue.bind(null, tempPath)}
                      onKeyPress={this.handleKeyPress.bind(null, tempPath)}
                      value={subParam} />
                  </div>
                )
              }
            })}
          </div>
        )
      } else if (param.items.length > 0) {
        let tempPath = path.slice(0);
        tempPath.push(param.name)
        return (
          <div className="item">
              {this.rowDomRecurse(param.items, row[param.name], tempPath)}
          </div>
        )
      } else {
        let tempPath = path.slice(0);
        tempPath.push(param.name)
        return (
          <div className="item leafItem">
            <input
              type="text"
              onFocus={this.select.bind(null, tempPath)}
              onBlur={this.deselect.bind(null, tempPath)}
              onChange={this.changeValue.bind(null, tempPath)}
              onKeyPress={this.handleKeyPress.bind(null, tempPath)}
              value={row[param.name]} />
          </div>
        )
      }
    });
  },
  changeValue: function(path, e) {
    let curVal = this.state.data
    path.forEach((key, i) => {
      if (i < (path.length - 1)) {
        curVal = curVal[key];
      }
    });
    curVal[path[path.length - 1]] = e.target.value;
    this.setState(this.state);
  },
  select: function(path, e) {
    this.setState({
      selected: path
    })
  },
  deselect: function(path, e) {
    this.setState({
      selected: null
    })
  },
  handleKeyPress: function(path, e) {
    if (e.key === 'Enter') {
      let tempPath = path.slice(0);
      let latestIndex = tempPath.pop();
      while (typeof latestIndex === 'string') {
        latestIndex = tempPath.pop()
      }

    }
  },
  render() {
    let temp = columnsFromType(this.props.type);
    let cols = temp.cols;
    let nestedRep = temp.nestedRep;
    return (
      <div className="nesting-table">
        <div className="headerBanner">
          <div className="header">
            {this.headerDomRecurse(nestedRep)}
          </div>
        </div>
        {this.state.data.map((row, index) => { return (
          <div className="row">
            {this.rowDomRecurse(nestedRep, row, [index])}
          </div>
        )})}
      </div>
    );
  }
});

export default NestingTable;

/*
cols: [
  {
    path: ['param1', [param2]] <--- Note that this does not denote arrays,
    key: '.param1.param2'
  }
]

nestedRep: [
  {
    name: 'param1',
    items: [
      {
        name: 'params2'
        items: []
      }
    ]
  }
]




*/
