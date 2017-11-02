import React, { Component } from 'react';


const styles = {
  root: {
    height: '48px',
    width: '100%',
    backgroundColor: '#f7f7f8',
    zIndex: '10',
    boxShadow: '0 -2px 5px -2px rgba(0,0,0,0.23)',
  }
};

class MinimalFooter extends Component {
  render() {
    return(
      <div className="minimal-footer" style={styles.root}>
        Footer
      </div>
    )
  }
};
  
export default MinimalFooter;