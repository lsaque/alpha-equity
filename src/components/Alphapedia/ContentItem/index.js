import React from 'react';
// import './style.css';


class ContentItem extends React.Component {
  render() {
    return (
      <div className="content-item">
        <div className="header">
          <h2 className="h2">{this.props.content[0]}</h2>
          <i className="fas fa-chevron-right"></i>
        </div>
        <div className="description">
          <p className="h3">{this.props.content[1]}</p>
        </div>
      </div>
    );
  }
}

export default ContentItem;