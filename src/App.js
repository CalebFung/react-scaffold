import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import './App.css';
import MaterialAppBar from './MaterialAppBar';
import MaterialFooter from './MaterialFooter';
import MinimalAppBar from './MinimalAppBar';
import MinimalFooter from './MinimalFooter';
import { View, TitleBar } from 'react-desktop/macOs';


const muiTheme = getMuiTheme({
  palette: {
    
  },
  appBar: {
    height: 48,
    lineHeight: 40
  },
});

const platform = window.navigator.platform;
// const platform = 'somethingelse';

function PlatformMain() {
  if (platform.startsWith('Mac') || platform.startsWith('i')) {
    return (
      <div className="Minimal">
        <MinimalAppBar />
        <div className="App-Main">
        </div>
        <MinimalFooter />
      </div>
    )
  } else {
    return (
      <div className="Material">
        <MuiThemeProvider muiTheme={muiTheme}>
          <div>
            <MaterialAppBar/>
            <main>
              <div className="App-Main">
            
              </div>
              <MaterialFooter />
            </main>
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
        <MediaQuery query="(min-width: 420px)">
          <PlatformMain/>
        </MediaQuery>
        <MediaQuery query="(max-width: 419px)">
          <PlatformMain />
        </MediaQuery>
      </div>
    );
  }
}

export default App;