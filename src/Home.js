import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import logo from './logo.png';

const drawerWidth = 240;

const styles = theme => ({
  container: {
    position: 'relative', 
    width: '100%', 
    display: 'flex', 
    justifyContent: 'center',
  },
  hero: {
    position: 'fixed', 
    backgroundColor: '#a8c4c4', 
    width: '100%', 
    textAlign: 'center',
    [theme.breakpoints.down('lg')]: {
      height: 800, 
      paddingTop: 250, 
    },
    [theme.breakpoints.down('md')]: {
      height: 650, 
      paddingTop: 150, 
    },
    [theme.breakpoints.down('sm')]: {
      height: 450, 
      paddingTop: 100, 
    },
  },
  heroImage: {
    [theme.breakpoints.down('lg')]: {
      width: 200, 
      height: 200, 
      borderRadius: 25,
    },
    [theme.breakpoints.down('md')]: {
      width: 150, 
      height: 150, 
      borderRadius: 15,
    },
    [theme.breakpoints.down('sm')]: {
      width: 100, 
      height: 100, 
      borderRadius: 9,
    },
  },
  heroText: {
    [theme.breakpoints.down('lg')]: {
      fontSize: 64,
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 56,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 42,
    },
  },
  content: {
    width: '100%', 
    position: 'absolute',
    backgroundColor: '#ffffff',
    [theme.breakpoints.down('lg')]: {
      top: 800,
    },
    [theme.breakpoints.down('md')]: {
      top: 650,
    },
    [theme.breakpoints.down('sm')]: {
      top: 450,
    },
  },
  header: {
    color: '#00695c',
    [theme.breakpoints.down('lg')]: {
      fontSize: 32, 
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 28,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 26,
    },
  },
  frameContainer: {
    height: 600, 
    width: '100%', 
    background: '#efefef', 
    position: 'relative',
  },
  _scrollBanner: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    width: '100vw',
    height: 28,
    backgroundColor: '#0a9998', 
    color: '#ffffff', 
    fontSize: 16,
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    zIndex: 2, 
    cursor: 'pointer', 
    userSelect: 'none',
    position: 'absolute',
    [theme.breakpoints.up('md')]: {
      marginLeft: -drawerWidth/2,
    },
  },
  _scrollBannerShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
  },
  _scrollBannerSticky: {
    position: 'fixed',
    top: 48,
  },
  _scrollOverlay: {
    height: 600, 
    width: '100%', 
    backgroundColor: 
    'rgba(168, 196, 196, 0.4)', 
    top: 0, 
    left: 0,
    position: 'absolute',
  },
});

class Home extends Component {
  constructor(props) {
    super(props);
    this.lastY = 0;
    this.ticking = false;
    this.state = {
      overlay: true,
      sticky: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.iframeContainerTop = this.iframeContainer.getBoundingClientRect().top - 48 + window.pageYOffset;
    this.iframeContainerBottom = this.iframeContainerTop + 600 - 32;
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  toggleOverlay = () => {
    this.setState({ overlay: !this.state.overlay });

  };

  handleScroll = () => {
    this.lastY = window.scrollY;
	  if(!this.ticking) {
      requestAnimationFrame(this.update);
    }
    this.ticking = true;
  };

  update = () => {
    this.ticking = false;
    this.currentY = this.lastY;
    if (this.currentY >= this.iframeContainerTop && this.currentY <= this.iframeContainerBottom) {
      if (!this.state.sticky) this.setState({ sticky: true });
    } else {
      if (this.state.sticky) this.setState({ sticky: false });
    }
  }

  handleIframeLoad = () => {
    
  };

  render() {
    const { sticky } = this.state;
    const { classes, open } = this.props;

    return (
      <div className={classes.container}>
        <div className={classes.hero}>
          <img className={classes.heroImage} src={logo} alt="banner" />
          <h1 className={classes.heroText}>Title</h1>
        </div>
        <div className={classes.content}>
          <h2 className={classes.header}>'Sup, 🅱?</h2>
          asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>


          <div ref={el => this.iframeContainer = el} className={classes.frameContainer}>
            <div className={classNames(classes._scrollBanner, {
              [classes._scrollBannerShift]: !open,
              [classes._scrollBannerSticky]: sticky,
            })}
              onClick={this.toggleOverlay}>
              Tap to toggle 360 video interaction
            </div>
            {this.state.overlay && <div className={classes._scrollOverlay}></div>}
            <iframe src={process.env.PUBLIC_URL + '/react360/index.bundle.js'} height="600" width="100%" frameBorder="0" title="360-demo" 
              onLoad={this.handleIframeLoad} />
          </div>
          asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>
          asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>
          asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>
          asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>
          asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>
          asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>
          asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>
          asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>
          asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>
          asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>asdf<br/>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Home);
