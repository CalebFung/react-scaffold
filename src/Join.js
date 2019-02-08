import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  content: {
    padding: theme.spacing.unit * 3,
  },
  section: {
    maxWidth: 1024,
    margin: '0 auto',
  },
  sectionSpacing: {
    marginTop: 64,
    marginBottom: 64,
  },
  title: {
    fontSize: '2em',
    margin: '21.440px 0',
  },
  heading: {
    color: '#00695c',
  },
  mailingListText: {
    margin: '5px 0',
    fontWeight: 600,
    color: '#0c897b',
  },
  icon: {
    marginRight: 9,
  },
});

class Join extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.content}>
        <section className={classes.section}>
          <h1 className={classes.title}>Join</h1>
          <p>Join our mailing list and Discord server up to date announcements about exciting events and all things XR!</p>
        </section>
        
        <section className={classNames(classes.section, classes.sectionSpacing)}>
          <h2 className={classes.heading}>Discord</h2>
          <p>Join our Discord server!</p>
          <Button disabled color="secondary" variant="contained" href="https://discord.gg/coming_soon" target="_blank" rel="noopener noreferrer">
            <SvgIcon className={classes.icon}>
              <path d="M22,24L16.75,19L17.38,21H4.5A2.5,2.5 0 0,1 2,18.5V3.5A2.5,2.5 0 0,1 4.5,1H19.5A2.5,2.5 0 0,1 22,3.5V24M12,6.8C9.32,6.8 7.44,7.95 7.44,7.95C8.47,7.03 10.27,6.5 10.27,6.5L10.1,6.33C8.41,6.36 6.88,7.53 6.88,7.53C5.16,11.12 5.27,14.22 5.27,14.22C6.67,16.03 8.75,15.9 8.75,15.9L9.46,15C8.21,14.73 7.42,13.62 7.42,13.62C7.42,13.62 9.3,14.9 12,14.9C14.7,14.9 16.58,13.62 16.58,13.62C16.58,13.62 15.79,14.73 14.54,15L15.25,15.9C15.25,15.9 17.33,16.03 18.73,14.22C18.73,14.22 18.84,11.12 17.12,7.53C17.12,7.53 15.59,6.36 13.9,6.33L13.73,6.5C13.73,6.5 15.53,7.03 16.56,7.95C16.56,7.95 14.68,6.8 12,6.8M9.93,10.59C10.58,10.59 11.11,11.16 11.1,11.86C11.1,12.55 10.58,13.13 9.93,13.13C9.29,13.13 8.77,12.55 8.77,11.86C8.77,11.16 9.28,10.59 9.93,10.59M14.1,10.59C14.75,10.59 15.27,11.16 15.27,11.86C15.27,12.55 14.75,13.13 14.1,13.13C13.46,13.13 12.94,12.55 12.94,11.86C12.94,11.16 13.45,10.59 14.1,10.59Z" />
            </SvgIcon>
            Join server
          </Button>
        </section>

        <div className={classes.sectionSpacing}>
          <p className={classes.mailingListText}>Fill out the form below to join our mailing list.</p>
          <iframe height="600" width="100%" src="https://xrsutd.typeform.com/to/ndgF2D" frameBorder="0" title="mailing-list" />
        </div>
      </div>
    );
  }
}

Join.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Join);
