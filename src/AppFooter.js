import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import SvgIcon from '@material-ui/core/SvgIcon';
import moment from 'moment';

const styles = theme => ({
  footer: {
    width: '100%',
    minHeight: 160,
    backgroundColor: '#2d2d2d',
    color: '#ffffff',
    padding: theme.spacing.unit * 3,
    position: 'relative',
  },
  grid: {
    width: '100%',
  },
  header: {
    color: '#d7e2e2',
    margin: 0,
  },
  icon: {
    fontSize: 20,
    marginRight: 7,
  },
  link: {
    color: '#a8c4c4',
    textDecoration: 'none',
    borderBottom: '1px dotted #a8c4c4',
  },
  disabledLink: {
    color: '#666666',
    pointerEvents: 'none',
    textDecoration: 'none',
    borderBottom: '1px dotted #a8c4c4',
  },
  disabledCursor: {
    cursor: 'not-allowed',
  },
  copyInfo: {
    fontSize: 12,
    position: 'absolute',
    bottom: 7,
    right: 14,
  },
});

class AppFooter extends Component {

  render() {
    const { classes } = this.props;

    return (
      <footer className={classes.footer}>
        <Grid container spacing={24} className={classes.grid}>
          <Grid item lg={4}>
            <h4 className={classes.header}>Contact</h4>
            <p><Icon className={classes.icon}>send</Icon><a className={classes.link} href="mailto:contact@xrsutd.org">contact@xrsutd.org</a></p>
            <p>
              <SvgIcon className={classes.icon}>
                <path d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
              </SvgIcon>
              <a className={classes.link} href="https://utdallas.presence.io/organization/extended-reality-society" target="_blank" rel="noopener noreferrer">presence.io</a>
            </p>
          </Grid>
          <Grid item lg={4}>
            <h4 className={classes.header}>Join</h4>
            <p>
              <SvgIcon className={classes.icon}>
                <path d="M3,4C1.89,4 1,4.89 1,6V18A2,2 0 0,0 3,20H14V18H3V8.37L11,13.36L19,8.37V13H21V6A2,2 0 0,0 19,4H3M3,6H19L11,11L3,6M19,15V18H16V20H19V23H21V20H24V18H21V15H19Z" />
              </SvgIcon>
              Click <a className={classes.link} href="/join">here</a> to join our mailing list!
            </p>
            <p>
              <SvgIcon className={classes.icon}>
                <path d="M22,24L16.75,19L17.38,21H4.5A2.5,2.5 0 0,1 2,18.5V3.5A2.5,2.5 0 0,1 4.5,1H19.5A2.5,2.5 0 0,1 22,3.5V24M12,6.8C9.32,6.8 7.44,7.95 7.44,7.95C8.47,7.03 10.27,6.5 10.27,6.5L10.1,6.33C8.41,6.36 6.88,7.53 6.88,7.53C5.16,11.12 5.27,14.22 5.27,14.22C6.67,16.03 8.75,15.9 8.75,15.9L9.46,15C8.21,14.73 7.42,13.62 7.42,13.62C7.42,13.62 9.3,14.9 12,14.9C14.7,14.9 16.58,13.62 16.58,13.62C16.58,13.62 15.79,14.73 14.54,15L15.25,15.9C15.25,15.9 17.33,16.03 18.73,14.22C18.73,14.22 18.84,11.12 17.12,7.53C17.12,7.53 15.59,6.36 13.9,6.33L13.73,6.5C13.73,6.5 15.53,7.03 16.56,7.95C16.56,7.95 14.68,6.8 12,6.8M9.93,10.59C10.58,10.59 11.11,11.16 11.1,11.86C11.1,12.55 10.58,13.13 9.93,13.13C9.29,13.13 8.77,12.55 8.77,11.86C8.77,11.16 9.28,10.59 9.93,10.59M14.1,10.59C14.75,10.59 15.27,11.16 15.27,11.86C15.27,12.55 14.75,13.13 14.1,13.13C13.46,13.13 12.94,12.55 12.94,11.86C12.94,11.16 13.45,10.59 14.1,10.59Z" />
              </SvgIcon>
              <span className={classes.disabledCursor}>
                <a className={classes.disabledLink} href="https://discord.gg/coming_soon" target="_blank" rel="noopener noreferrer">discord.gg</a>
              </span>
            </p>
          </Grid>
          <Grid item lg={4}>
            <h4 className={classes.header}>News</h4>
            <p>
              <SvgIcon className={classes.icon}>
                <path d="M20,11H4V8H20M20,15H13V13H20M20,19H13V17H20M11,19H4V13H11M20.33,4.67L18.67,3L17,4.67L15.33,3L13.67,4.67L12,3L10.33,4.67L8.67,3L7,4.67L5.33,3L3.67,4.67L2,3V19A2,2 0 0,0 4,21H20A2,2 0 0,0 22,19V3L20.33,4.67Z" />
              </SvgIcon>
              Click <a className={classes.link} href="/news">here</a> for news and announcements!
            </p>
          </Grid>
        </Grid>
        <div className={classes.copyInfo}>&copy; {moment().format('YYYY')} XRS UTD</div>
      </footer>
    );
  }
}

AppFooter.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(AppFooter);
