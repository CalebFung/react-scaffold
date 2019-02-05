import React, { Component } from 'react';


class NotFound extends Component {
  componentDidMount() {
    console.log('not found');
  }

  render() {
    return (
      <div>
        <h1>Not Found</h1>
      </div>
    );
  }
}

export default NotFound;
