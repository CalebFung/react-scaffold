import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = theme => ({
  appBar: {
    height: 48,
    zIndex: theme.zIndex.drawer + 1,
  },
  toolbar: {
    marginLeft: 7,
    marginRight: 7,
  },
  menuButton: {
    marginLeft: 7,
    marginRight: 7,
    height: 36,
    width: 36,
    padding: 0,
  },
  logo: {
    height: 34,
    marginRight: 5,
  },
  progressBar: {
    position: 'absolute',
    top: 0,
    height: 2,
    width: '100vw',
    zIndex: theme.zIndex.appBar + 102,
  },
});

class Appbar extends Component {
  
  render() {
    const { classes, logoSrc=undefined, value=0, hidden=true } = this.props;

    const logo = (logoSrc !== undefined) 
                ? <img className={classes.logo} src={logoSrc} alt="logo" /> 
                : <span></span>;

    return(
      <div>
        <LinearProgress className={classes.progressBar} variant="determinate" color="secondary" value={value} hidden={hidden} />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className={classes.toolbar} variant="dense" disableGutters>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Open drawer"
              onClick={() => this.props.handleDrawerToggle()}
            >
              <Icon>menu</Icon>
            </IconButton>
            {logo}
            <Typography variant="h6" color="inherit" noWrap>
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
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Appbar);