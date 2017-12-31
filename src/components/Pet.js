import React from 'react';

class Pet extends React.Component {
  constructor() {
    super();
  }
      const {name, type, age, weigh} = this.props
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">Pet Name: {name} (gender: ♂ or ♀)</a>
          <div className="meta">
            <span className="date">Pet type: {type}</span>
          </div>
          <div className="description">
            <p>Age: {age} </p>
            <p>Weight: {weight} </p>
          </div>
        </div>
        <div className="extra content">
          <button className="ui primary button">Adopt pet</button>
          <button className="ui disabled button">Already adopted</button>
        </div>
      </div>
    );
  }
}

export default Pet;
