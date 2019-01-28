import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Shell from './Shell';

const theme = createMuiTheme({
  palette: {
    primary: { 
      main: '#232323',
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
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Shell />
      </MuiThemeProvider>
    );
  }
}

export default App;
