import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import MaterialAppBar from './MaterialAppBar'
import MaterialFooter from './MaterialFooter'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
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