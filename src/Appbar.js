import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import LinearProgress from '@material-ui/core/LinearProgress';
import Hidden from '@material-ui/core/Hidden';

const styles = theme => ({
  menuButton: {
    marginRight: 7,
    height: 36,
    width: 36,
    padding: 0,
  },
  appbar: {
    height: 48,
    zIndex: theme.zIndex.drawer + 1,
  },
  toolbar: {
    marginLeft: 7,
    marginRight: 7,
  },
  logo: {
    height: 34,
    marginRight: 5,
  },
  loadingBar: {
    height: 2,
    zIndex: theme.zIndex.appBar + 102,
  },
  loadingBarBackground: {
    backgroundColor: '#efeded',
  },
});

class Appbar extends Component {
  
  render() {
    const { classes } = this.props;

    return (
      <div>
        <LinearProgress variant="determinate" color="secondary" value={50}
          classes={{
            root: classes.loadingBar,
            determinate: classes.loadingBarBackground,
          }} />
        <AppBar position="fixed" classes={{root: classes.appbar}}> 
        <Toolbar variant="dense" disableGutters classes={{root: classes.toolbar}}>
          <Hidden mdUp implementation="js">
            <IconButton color="inherit" aria-label="Menu" classes={{root: classes.menuButton}} onClick={() => this.props.toggleMobileDrawer()}>
              <Icon>menu</Icon>
            </IconButton>
          </Hidden>
          <Hidden smDown implementation="js">
            <IconButton color="inherit" aria-label="Menu" classes={{root: classes.menuButton}} onClick={() => this.props.toggleDrawer()}>
              <Icon>menu</Icon>
            </IconButton>
          </Hidden>
          <img className={classes.logo} src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" />
          <Typography variant="h6" color="inherit" className={classes.grow}>
            {this.props.title || 'Untitled'}
          </Typography>
        </Toolbar>
      </AppBar>
      </div>
    );
  }
}

Appbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Appbar);


