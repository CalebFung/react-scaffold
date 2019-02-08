import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import SvgIcon from '@material-ui/core/SvgIcon';
import IconButton from '@material-ui/core/IconButton';
import avatar from './default_avatar.png';

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
  avatar: {
    width: 150,
    height: 150,
  },
  memberName: {
    color: '#2d2d2d',
    margin: 10,
  },
  memberPosition: {
    color: '#0a9998',
    margin: '0 10px',
    fontStyle: 'italic',
    fontWeight: 600,
  },
});

class Team extends Component {


  render() {
    const { classes } = this.props;

    return (
      <div className={classes.content}>
        <h1>Team</h1>
        <p>Meet our dedicated team of diverse individuals with a common passion for XR.</p>

        <section className={classes.section}>
          <h2 className={classes.heading}>Students</h2>
          <Grid container spacing={24} className={classes.grid}>
            <Grid item lg={3}>
              <Avatar alt="Person Name" src={avatar} className={classes.avatar} />
              <h3 className={classes.memberName}>Person Name</h3>
              <p className={classes.memberPosition}>Position</p>
            </Grid>
            <Grid item lg={3}>
              <Avatar alt="Person Name" src={avatar} className={classes.avatar} />
              <h3 className={classes.memberName}>Person Name</h3>
              <p className={classes.memberPosition}>Position</p>
            </Grid>
            <Grid item lg={3}>
              <Avatar alt="Person Name" src={avatar} className={classes.avatar} />
              <h3 className={classes.memberName}>Person Name</h3>
              <p className={classes.memberPosition}>Position</p>
            </Grid>
            <Grid item lg={3}>
              <Avatar alt="Person Name" src={avatar} className={classes.avatar} />
              <h3 className={classes.memberName}>Person Name</h3>
              <p className={classes.memberPosition}>Position</p>
            </Grid>
            <Grid item lg={3}>
              <Avatar alt="Person Name" src={avatar} className={classes.avatar} />
              <h3 className={classes.memberName}>Person Name</h3>
              <p className={classes.memberPosition}>Position</p>
            </Grid>
          </Grid>
        </section>

        <section className={classes.section}>
          <h2 className={classes.heading}>Advisors</h2>
          <Grid container spacing={24} className={classes.grid}>
            <Grid item lg={3}>
              <Avatar alt="Person Name" src={avatar} className={classes.avatar} />
              <h3 className={classes.memberName}>Person Name</h3>
              <p className={classes.memberPosition}>Position</p>
              <IconButton color="primary" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" aria-label="Visit website">
                <Icon>link</Icon>
              </IconButton>
              <IconButton color="primary" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="Visit profile">
                <SvgIcon className={classes.icon}>
                  <path d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z" />
                </SvgIcon>
              </IconButton>
            </Grid>
          </Grid>
        </section>
      </div>
    );
  }
}

Team.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Team);
