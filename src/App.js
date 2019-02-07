import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { withRouter } from "react-router-dom";
import Shell from './Shell';

const theme = createMuiTheme({
  palette: {
    primary: { 
      main: '#262626',
    },
    secondary: { 
      main: '#0a9998',
    }, 
  },
  typography: {
    useNextVariants: true,
  },
  overrides: {

  },
});

class App extends Component {
  state = {
    route: '',
  };

  componentWillMount() {
    // Init route
    this.setRoute(this.props.location.pathname);
  }

  componentDidUpdate(prevProps) {
    // Route changed
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setRoute(this.props.location.pathname);
    }
  }

  setRoute = (route) => {
    this.setState({ route: route.substring(1) });
  }

  render() {
    const { route } = this.state;

    return (
      <MuiThemeProvider theme={theme}>
        <Shell route={route}/>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(props => <App {...props} />);
