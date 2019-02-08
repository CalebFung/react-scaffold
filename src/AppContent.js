import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';
import AppFooter from './AppFooter';

const drawerWidth = 240;

const styles = theme => ({
  content: {
    flexGrow: 1,
  },
  _content: {
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  _contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});

class AppContent extends Component {

  render() {
    const { classes, open } = this.props;

    return (
      <main style={{width: '100%'}}>
        <Hidden mdUp implementation="css">
          <div className={classes.content}>
          <Toolbar className={classes._toolbar} variant="dense" disableGutters></Toolbar>
            {this.props.children}
            <AppFooter />
          </div>
        </Hidden>
        <Hidden smDown implementation="css">
          <div className={classNames(classes._content, {
            [classes._contentShift]: open,
          })}>
            <Toolbar className={classes._toolbar} variant="dense" disableGutters></Toolbar>
            {this.props.children}
            <AppFooter />
          </div>
        </Hidden>
      </main>
    );
  }
}

AppContent.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(AppContent);
