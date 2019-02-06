import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

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
    height: 800, 
    paddingTop: 250, 
    width: '100%', 
    textAlign: 'center'
  },
  heroImage: {
    width: 200, 
    height: 200, 
    borderRadius: 25,
  },
  heroText: {
    fontSize: 64,
  },
  content: {
    width: '100%', 
    position: 'absolute', 
    top: 800, 
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 32, 
    color: '#00695c',
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
    backgroundColor: '#565656', 
    color: '#ffffff', 
    fontSize: 18,
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    zIndex: 2, 
    cursor: 'pointer', 
    userSelect: 'none',
    position: 'absolute',
    marginLeft: -drawerWidth/2,
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
    'rgba(71, 71, 71, 0.4)', 
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
          <img className={classes.heroImage} src={process.env.PUBLIC_URL + '/logo.png'} alt="banner" />
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
            <iframe src={process.env.PUBLIC_URL +  '/react360/index.html'} height="600" width="100%" frameBorder="0" title="360-demo" 
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
