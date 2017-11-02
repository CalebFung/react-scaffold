import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import FileCloudDownload from 'material-ui/svg-icons/file/cloud-download';


function handleTouchTap() {
  console.log('onClick triggered on the title component');
}

const styles = {
  root: {
    position: 'fixed',
    top: 0,
    backgroundColor: '#4286f4'
  },
  title: {
    fontSize: 20,
    cursor: 'pointer',
  }
};

class MaterialAppBar extends Component {
  render() {
    return(
      <AppBar style={styles.root}
      title={<span style={styles.title}>React Scaffold</span>}
      onTitleTouchTap={handleTouchTap}
      iconElementLeft={
        <IconButton>
          <NavigationMenu />
        </IconButton>
      }
      iconElementRight={
        <IconButton>
          <FileCloudDownload />
        </IconButton>
      }
    />
    )
  }
};

export default MaterialAppBar;