import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import './App.css';
import MaterialAppBar from './MaterialAppBar';
import MaterialFooter from './MaterialFooter';
import MinimalAppBar from './MinimalAppBar';
import MinimalFooter from './MinimalFooter';
import DMAppBar from './DMAppBar';
import DMFooter from './DMFooter';


const muiTheme = getMuiTheme({
  palette: {
    
  },
  appBar: {
    height: 48,
    lineHeight: 40
  },
});

// const platform = window.navigator.platform;
const platform = 'somethingelse';

function PlatformMain() {
  if (platform.startsWith('Mac') || platform.startsWith('i')) {
    console.log('minimal');
    return (
      <div className="Minimal">
        <MediaQuery query="(min-width: 420px)">
          <DMAppBar />
          <main className="DM-main">
            <div className="DM-content">

            </div>
            <DMFooter />
          </main>
        </MediaQuery>
        <MediaQuery query="(max-width: 419px)"> 
          <MinimalAppBar />
            <div className="Minimal-Main">
            
            </div>
          <MinimalFooter />
        </MediaQuery>
      </div>
    )
  } else {
    console.log('material');
    return (
      <div className="Material">
        <MuiThemeProvider muiTheme={muiTheme}>
          <div>
          <MediaQuery query="(min-width: 700px)">
            <MaterialAppBar />
            <main className="DMaterial-main">
              <div className="DMaterial-content">

              </div>
              <MaterialFooter />
            </main>
          </MediaQuery>
          <MediaQuery query="(max-width: 699px)"> 
            <MaterialAppBar />
            <main className="Material-main">
              <div className="Material-content">

              </div>
              <MaterialFooter />
            </main>
          </MediaQuery>
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <PlatformMain />
      </div>
    );
  }
}

export default App;