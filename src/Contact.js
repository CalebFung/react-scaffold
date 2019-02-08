import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  content: {
    maxWidth: 1024,
    margin: '0 auto',
    padding: theme.spacing.unit * 3,
  },
  section: {
    margin: '64px 0',
  },
  heading: {
    color: '#00695c',
  },
  link: {
    color: '#0c897b',
    textDecoration: 'none',
    borderBottom: '1px dotted #a8c4c4',
  },
  spacer: {
    height: 'calc(100vh - 679px)',
  },
});

class Contact extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.content}>
        <h1>Contact</h1>
        <p>Got a question for us? Feel free to contact us through the channels listed below! We'll get back to you in 1-3 business days.</p>
        
        <section className={classes.section}>
          <h2 className={classes.heading}>Email</h2>
          <a className={classes.link} href="mailto:contact@xrsutd.org">contact@xrsutd.org</a>
        </section>

        <section className={classes.section}>
          <h2 className={classes.heading}>Facebook</h2>
          <a className={classes.link} href="https://www.facebook.com/groups/573214729555025/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/groups/573214729555025/</a>
        </section>

        <div className={classes.spacer}></div>
      </div>
    );
  }
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Contact);
