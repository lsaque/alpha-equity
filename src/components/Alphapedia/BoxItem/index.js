import React from 'react';
// import './style.css';


class BoxItem extends React.Component {
  render() {
    return (
      <div className="box">
        <div className="box-item">
          <h1 className="item h1">{this.props.letters[0]}</h1>
        </div>
        <div className="box-item">
          <h1 className="item h1">{this.props.letters[1]}</h1>
        </div>
        <div className="box-item">
          <h1 className="item h1">{this.props.letters[2]}</h1>
        </div>
        <div className="box-item">
          <h1 className="item h1">{this.props.letters[3]}</h1>
        </div>
      </div>
    );
  }
}

export default BoxItem;