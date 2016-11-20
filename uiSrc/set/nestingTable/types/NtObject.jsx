import React from 'react';

const NtObject = React.createClass({
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
});

const types = {
  'array': require('./Array.jsx'),
  'number': require('./Number.jsx'),
  'object': NtObject,
  'string': require('./String.jsx')
}

module.exports = NtObject;
