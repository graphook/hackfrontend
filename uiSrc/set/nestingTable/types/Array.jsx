import React from 'react';

const NtArray = React.createClass({
  render() {
    let data = this.props.data
    let type = this.props.type;
    let Component = types[this.props.type.items.type];
    return (
      <div className="nt-array-container">
        {this.props.data.map((elem, index) => {
          let tempPath = this.props.path.slice(0);
          tempPath.push(index);
          return (
            <div className="nt-item">
              <Component
                  type={this.props.type.items}
                  data={elem}
                  dataModified={this.props.dataModified}
                  path={tempPath} />
            </div>
          )
        })}
      </div>
    );
  }
});

const types = {
  'array': NtArray,
  'number': require('./Number.jsx'),
  'object': React.createClass({
    render() {
      let data = this.props.data;
      let type = this.props.type;

      return (
        <div className="nt-object">
          {Object.keys(this.props.type.properties).map((propKey) => {
            let Component = types[this.props.type.properties[propKey].type];
            let tempPath = this.props.path.slice(0);
            tempPath.push(propKey);
            return (
              <Component
                type={this.props.type.properties[propKey]}
                data={this.props.data[propKey]}
                dataModified={this.props.dataModified}
                path={tempPath} />
            )
          })}
        </div>
      );
    }
  }),
  'string': require('./String.jsx')
}

module.exports = NtArray;
