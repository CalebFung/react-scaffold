import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import logo from './logo.png';

const styles = theme => ({
  hero: {
    width: '100%',
    backgroundColor: '#a8c4c4', 
    textAlign: 'center',
    [theme.breakpoints.down('lg')]: {
      height: 800, 
      paddingTop: 150, 
    },
    [theme.breakpoints.down('md')]: {
      height: 650, 
      paddingTop: 120, 
    },
    [theme.breakpoints.down('sm')]: {
      height: 450, 
      paddingTop: 70, 
    },
  },
  heroLogo: {
    backgroundColor: '#262626',
    [theme.breakpoints.down('lg')]: {
      width: 200, 
      height: 200, 
      borderRadius: 25,
    },
    [theme.breakpoints.down('md')]: {
      width: 180, 
      height: 180, 
      borderRadius: 15,
    },
    [theme.breakpoints.down('sm')]: {
      width: 120, 
      height: 120, 
      borderRadius: 9,
    },
  },
  heroHeading: {
    [theme.breakpoints.down('lg')]: {
      fontSize: 64,
      paddingTop: 36,
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 56,
      paddingTop: 24,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 42,
      paddingTop: 18,
    },
  },
  content: {
    padding: theme.spacing.unit * 3,
  },
  heading: {
    color: '#00695c',
    [theme.breakpoints.down('lg')]: {
      fontSize: 32,
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 28,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 24,
    },
  },
  section: {
    maxWidth: 1024,
    margin: '0 auto',
  },
  demo: {
    margin: '64px 0',
  },
  demoText: {
    margin: '5px 0',
    fontWeight: 600,
    color: '#0c897b',
  },
  demoContainer: {
    backgroundColor: '#f2f2f2',
    position: 'relative',
  },
  _scrollOverlay: {
    height: 550, 
    width: '100%', 
    backgroundColor: 'rgba(168, 196, 196, 0.6)',
    position: 'absolute',
    top: 0, 
    left: 0,
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 200,
  },
});

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      overlay: true,
      frameLoaded: false,
    };
  }

  handleFabClick = () => {
    this.setState({ overlay: !this.state.overlay });
  };

  handleImageLoaded = () => {
    console.log('asdf');
    this.setState({ imageLoaded: true });
  };

  handleFrameLoaded = () => {
    this.setState({ frameLoaded: true });
  };

  render() {
    const { classes } = this.props;
    const { overlay, frameLoaded } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.hero}>
          <img className={classes.heroLogo} src={logo} alt="hero" />
          <h1 className={classes.heroHeading}>Title</h1>
        </div>
        <div className={classes.content}>
          <section className={classes.section}>
            <h2 className={classes.heading}>Heading 1</h2>
            <p>Try-hard tofu blog, sartorial cliche brooklyn plaid snackwave cardigan chartreuse church-key 
            stumptown synth pour-over kitsch. Vexillologist PBR&B lyft selfies viral tumblr cliche kitsch 
            bitters drinking vinegar whatever plaid kale chips skateboard vaporware. Hella twee small batch, 
            kombucha fixie vinyl kickstarter man braid letterpress pour-over cliche freegan. Vegan keytar blog 
            disrupt, poke iceland artisan godard helvetica selfies poutine church-key.</p>
          </section>
          
          <div className={classes.demo}>
            <p className={classes.demoText}>Click on the floating action button to toggle the overlay for 
            interacting with the 360 video.</p>
            <div className={classes.demoContainer}>
              {overlay && <div className={classes._scrollOverlay} />}
              {frameLoaded && 
              <Fab size="small" color="secondary" aria-label="Toggle-overlay" className={classes.fab} onClick={this.handleFabClick}>
                <Icon>{overlay ? 'touch_app' : 'not_interested'}</Icon>
              </Fab>}
              <iframe src={process.env.PUBLIC_URL +  '/react360/index.html'} height="550" width="100%" frameBorder="0" title="360-demo" 
                onLoad={this.handleFrameLoaded} />
            </div>
          </div>

          <section className={classes.section}>
            <h2 className={classes.heading}>Heading 2</h2>
            <p>Deep v palo santo cred, butcher roof party austin williamsburg pinterest fanny pack fashion axe 
              chia. Gluten-free wolf tilde meditation, everyday carry flannel letterpress keytar helvetica 
              vexillologist hexagon skateboard. Kinfolk cray portland, trust fund aesthetic distillery iceland blog 
              activated charcoal air plant four loko polaroid blue bottle. Crucifix church-key fanny pack organic 
              tumeric, iceland you probably haven't heard of them taiyaki sartorial leggings marfa four loko. 
              Chartreuse mixtape coloring book art party iceland meh, tacos celiac. Umami jean shorts semiotics, 
              vice fashion axe neutra blue bottle copper mug banjo twee direct trade.</p>
          </section>

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
