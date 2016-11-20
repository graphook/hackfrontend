import React from 'react';
import './set.scss'
import NestingTable from './nestingTable/NestingTable.jsx'


const type = {
  _id: 'fjksdlfj',
  _type: 'TYPE_ID',
  title: 'Family',
  description: 'Describes a family unit. Usually one that lives in the same house.',
  type: 'object',
  properties: {
    surname: {
      type: 'string',
      required: true
    },
    people: {
      type: 'array',
      required: true,
      items: {
        type: 'object',
        properties: {
          firstName: {
            type: 'string',
            required: true
          },
          age: {
            type: 'number',
            required: true
          }
        }
      }
    },
    lives: {
      type: 'array',
      required: true,
      items: {
        type: 'string'
      }
    }
  }
}

const data = [
  {
    surname: 'Morgan',
    people: [
      {
        firstName: 'James',
        age: 56
      },
      {
        firstName: 'Cathy',
        age: 52
      },
      {
        firstName: 'James',
        age: 19
      },
      {
        firstName: 'Jackson',
        age: 22
      }
    ],
    lives: [
      'Alpharetta 1',
      'Hendersonville',
      'Alpharetta 2',
      'Neenah',
      'Alpharetta 3'
    ]
  },
  {
    surname: 'Waterson',
    people: [
      {
        firstName: 'Gumball',
        age: 12
      },
      {
        firstName: 'Darwin',
        age: 10
      },
      {
        firstName: 'Anais',
        age: 4
      },
      {
        firstName: 'Nicole',
        age: 38
      },
      {
        firstName: 'Richard',
        age: 38
      }
    ],
    lives: [
      'Elmore'
    ]
  }
]

const Set = React.createClass({
  getInitialState: function() {
    return {
      type: type,
      data: data
    }
  },
  handleTypeChange: function(newType) {
    this.setState({
      type: newType
    });
  },
  handleTypeChange: function(newType) {
    this.setState({
      type: newType
    });
  },
  handleDataChange: function(newData) {
    this.setState({
      data: newData
    });
  },
  render() {
    return (
      <div className="set">
        <div className="set-options">
          <input className="title" type="text" placeholder="title" />
          <input className="description" type="text" placeholder="description" />
          <button>save</button>
        </div>
        <div className="content-container">
          <NestingTable
            type={this.state.type}
            data={this.state.data}
            typeModifiable={false}
            onTypeChange={this.handleTypeChange}
            onDataChange={this.handleDataChange} />
        </div>
      </div>
    );
  }
});

export default Set;
