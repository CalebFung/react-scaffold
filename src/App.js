import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import './App.css';
import MaterialAppBar from './MaterialAppBar'
import MaterialFooter from './MaterialFooter'


const muiTheme = getMuiTheme({
  palette: {
    
  },
  appBar: {
    height: 48,
    lineHeight: 40
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
      <div className="App">
        <MaterialAppBar/>
        <main>
          <div className="App-Main">
            
          </div>
          <MaterialFooter />
        </main>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;