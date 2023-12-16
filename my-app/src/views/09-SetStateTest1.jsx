import React, { Component } from 'react';
export default class SetState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personObj: {
        name: ['h', 'hh', 'hhh'],
        age: 18,
        love: {
          code: ['python', 'js'],
        },
      },
      count: 100,
    };
  }
  render() {
    const { personObj, count = 1 } = this.state;
    const { love } = personObj;
    return (
      <>
        <div
          onClick={() => {
            this.setState({
              count: count,
            });
          }}
        >
          {count}
        </div>

        <div
          onClick={() => {
            personObj['love'].code = [];
          }}
        >
          改变obj里的状态,但不setState
        </div>

        {love?.code?.map((item) => {
          return <span>{item}</span>;
        })}
      </>
    );
  }
}
