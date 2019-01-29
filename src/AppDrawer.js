import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const drawerWidth = 240;

const styles = theme => ({
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  _drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  _toolbar: {
    marginBottom: 7,
  },
  selectedListItem: {
    background: '#e0f2f1 !important', // doesn't work if `!important` is not set
  },
  listTextBase: {
    fontSize: 14,
  },
  selectedListText: {
    color: '#00695c',
  },
  listText: {
    color: '#212121',
  },
  listIconBase: {
    marginLeft: 7,
  },
});

class AppDrawer extends Component {

  render() {
    const { classes, route='', open=true, mobileOpen=false, drawerItems=[] } = this.props;

    const drawer = (
      <List>
        {drawerItems.map((page, index) => (
          <ListItem dense button key={index} component={Link} to={`/${page.path}`} 
            selected={route === page.path}
            classes={{selected: classes.selectedListItem}}>
            <Icon fontSize="small"
              className={classNames(classes.listIconBase, route === page.path ? classes.selectedListText : classes.listText)}>
              {page.icon}
            </Icon> 
            <ListItemText primary={page.name}
              className={classes.listTextBase} 
              classes={{primary: route === page.path ? classes.selectedListText : classes.listText}}/>
          </ListItem>
        ))}
      </List>
    );

    return (
      <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden mdUp implementation="css">
          <Drawer
            transitionDuration={{enter: 100, exit: 70}}
            container={this.props.container}
            variant="temporary"
            anchor="left"
            open={mobileOpen}
            onClose={() => this.props.handleDrawerToggle()}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <Toolbar variant="dense" disableGutters></Toolbar>
            <Divider />
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            className={classes._drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <div className={classes.toolbar} />
            <Toolbar className={classes._toolbar} variant="dense" disableGutters></Toolbar>
            <Divider />
            {drawer}
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
