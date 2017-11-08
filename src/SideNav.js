import React, { Component } from 'react';

// https://medium.com/front-end-hacking/react-page-transition-animations-9d18c90a9831

const styles = {
  root: {
    
  }
}

class SideNav extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return(
      <div style={styles.root}>
        
      </div>
    )}
  };
  
export default SideNav;