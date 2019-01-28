import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';

const drawerWidth = 260;

const styles = {
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background: '#f7f7f7',
  },
  drawerToolbar: {
    marginBottom: 7,
  },
};

class AppDrawer extends Component {
  componentDidMount() {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 600) { // mobile
        if (this.props.open) this.props.toggleDrawer();
      } else {
        if (this.props.mobileOpen) this.props.toggleDrawer();
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    const { classes, open=true, mobileOpen=false } = this.props;

    return (
      <nav>
        <Hidden mdUp implementation="js">
          <SwipeableDrawer
            onClose={() => this.props.toggleMobileDrawer()}
            onOpen={() => this.props.toggleMobileDrawer()}
            open={mobileOpen}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <Toolbar variant="dense" disableGutters classes={{root: classes.drawerToolbar}}></Toolbar>
            <Divider />
            {this.props.children}
          </SwipeableDrawer>
        </Hidden>
        <Hidden smDown implementation="js">
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <Toolbar variant="dense" disableGutters classes={{root: classes.drawerToolbar}}></Toolbar>
            <Divider />
            {this.props.children}
          </Drawer>
        </Hidden> 
      </nav>
    );
  }
}

AppDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(AppDrawer);
