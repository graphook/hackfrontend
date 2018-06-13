import React from 'react';

const NtString = React.createClass({
  changeValue: function(path, e) {
    this.props.dataModified(path, e.target.value);
  },
  render() {
    let data = this.props.data;
    let type = this.props.type;
    return (
      <div className="nt-leaf nt-item">
        <input
          type="text"
          onChange={this.changeValue.bind(null, this.props.path)}
          value={data} />
      </div>
    );
  }
});

module.exports = NtString;
