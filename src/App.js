import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Sidebar from 'react-sidebar';
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

const mql = window.matchMedia(`(min-width: 800px)`);

// const platform = window.navigator.platform;
const platform = 'material';

function PlatformMain() {
  if (platform.startsWith('Mac') || platform.startsWith('i')) {
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
    return (
      <div className="Material">
        <MuiThemeProvider muiTheme={muiTheme}>
          <div>
          <MediaQuery query="(min-width: 850px)">
            <MaterialAppBar />
            <main className="DMaterial-main">
              <div className="DMaterial-content">

              </div>
              <MaterialFooter />
            </main>
          </MediaQuery>
          <MediaQuery query="(max-width: 849px)"> 
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
  constructor(props) {
    super(props);

    this.state = {
      mql: mql,
      docked: props.docked,
      open: props.open
    }

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({sidebarOpen: open});
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
    this.setState({mql: mql, sidebarDocked: mql.matches});
  }

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }

  mediaQueryChanged() {
    this.setState({sidebarDocked: this.state.mql.matches});
  }

  render() {
    var sidebarContent = <b>Hello Ah Jo</b>;
    var sidebarProps = {
      sidebar: this.state.sidebarOpen,
      docked: this.state.sidebarDocked,
      onSetOpen: this.onSetSidebarOpen
    };
    return (
      // <div className="App">
      //   <PlatformMain />
      // </div>
      <Sidebar sidebar={sidebarContent}
      open={this.state.sidebarOpen}
      docked={this.state.sidebarDocked}
      onSetOpen={this.onSetSidebarOpen}>
        <b>Main content</b>
      </Sidebar>
    );
  }
}

export default App;