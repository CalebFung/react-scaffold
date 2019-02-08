import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import logo from './logo.png';

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  toolbar: {
    position: 'absolute',
    width: '100%',
    backgroundColor: '#262626',
    paddingLeft: 7,
    paddingRight: 7,
  },
  progressBar: {
    height: 2,
    zIndex: theme.zIndex.appBar + 1,
  },
  menuButton: {
    marginLeft: 7,
    marginRight: 7,
    height: 36,
    width: 36,
    padding: 0,
  },
  logo: {
    backgroundColor: '#262626',
    height: 34,
    marginRight: 5,
  },
  logoPlaceholder: {
    backgroundColor: '#262626',
    width: 34,
    height: 34,
    marginRight: 5,
  },
});

class Appbar extends Component {
  
  render() {
    const { classes, value=0, hidden=true } = this.props;

    return(
      <AppBar position="fixed" className={classes.appBar}>
        <LinearProgress className={classes.progressBar} variant="determinate" color="secondary" value={value} hidden={hidden} />
        <Toolbar className={classes.toolbar} variant="dense" disableGutters>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Open drawer"
            onClick={() => this.props.handleDrawerToggle()}
          >
            <Icon>menu</Icon>
          </IconButton>
          <img className={classes.logo} src={logo} alt="logo" /> 
          <Typography variant="h6" color="inherit" noWrap>
            {this.props.title || 'Untitled'}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

Appbar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Appbar);