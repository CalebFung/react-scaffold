import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Switch, Route } from 'react-router-dom';
import Appbar from './Appbar';
import AppDrawer from './AppDrawer';
import AppContent from './AppContent';
import Home from './Home';
import Team from './Team';
import News from './News';
import Contact from './Contact';
import Join from './Join';
import NotFound from './NotFound';

const styles = theme => ({
  root: {
    display: 'flex',
  },
});

class Shell extends Component {
  state = {
    route: this.props.route,
    open: true,
    mobileOpen: false,
  };

  componentWillMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
 }

  componentDidUpdate(prevProps) {
    if (this.props.route !== prevProps.route) {
      this.setRoute(this.props.route);
    }
  }

  setRoute = (route) => {
    this.setState({ route: route });
    if (window.innerWidth < 960 && this.state.mobileOpen) {
      this.setState({ mobileOpen: false });
    }
  }

  handleDrawerToggle = () => {
    if (window.innerWidth < 960) {
      this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    } else {
      if (this.state.open) {
        this.setState({ open: false });
      } else {
        this.setState({ open: true });
      }
    }
  };

  handleResize = () => {
    if (window.innerWidth >= 960 && this.state.mobileOpen) {
      this.setState(state => ({ mobileOpen: false }));
    } 
  };

  stopLoad = () => {

  };

  render() {
    const { classes } = this.props;
    const { route, open, mobileOpen } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <Appbar title="Title" handleDrawerToggle={this.handleDrawerToggle} 
          value={25} hidden={true} />
        <AppDrawer open={open} mobileOpen={mobileOpen} 
          handleDrawerToggle={this.handleDrawerToggle} 
          route={route}
          drawerItems={[
            {path: '', name: 'Home', icon: 'home'},
            {path: 'team', name: 'Team', icon: 'people'},
            {path: 'news', name: 'News', icon: 'whatshot'},
            {path: 'contact', name: 'Contact', icon: 'mail_outline'},
            {path: 'join', name: 'Join', icon: 'person_add'},
          ]} />
        <AppContent open={open}>
          <Switch>
            <Route exact path='/' render={(props) => <Home {...props} />} />
            <Route exact path='/team' render={(props) => <Team {...props} />} />
            <Route exact path='/news' render={(props) => <News {...props} />} />
            <Route exact path='/contact' render={(props) => <Contact {...props} />} />
            <Route exact path='/join' render={(props) => <Join {...props} />} />
            <Route exact path='*' component={NotFound} />
          </Switch>
        </AppContent>
      </div>
    );
  }
}

Shell.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Shell);
