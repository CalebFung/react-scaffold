import React, { Component } from 'react';
import Appbar from './Appbar';
import AppDrawer from './AppDrawer';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  
});

class Shell extends Component {
  state = {
    drawerOpen: true,
    mobileDrawerOpen: false,
  };

  toggleDrawer = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  };
  
  toggleMobileDrawer = () => {
    this.setState({ mobileDrawerOpen: !this.state.mobileDrawerOpen });
  };

  render() {

    return (
      <div>
        <Appbar title="App Title" toggleDrawer={this.toggleDrawer} 
          toggleMobileDrawer={this.toggleMobileDrawer} />
        <AppDrawer open={this.state.drawerOpen} 
          mobileOpen={this.state.mobileDrawerOpen} 
          toggleDrawer={this.toggleDrawer}
          toggleMobileDrawer={this.toggleMobileDrawer}>
          
        </AppDrawer>

      </div>
    );
  }
}

Shell.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Shell);
