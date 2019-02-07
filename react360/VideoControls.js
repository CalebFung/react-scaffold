import React from 'react';
import {
  StyleSheet, 
  VrButton, 
  View, 
  Text,
  Image, 
  asset,
  Environment,
  NativeModules
} from 'react-360';

const { VideoModule } = NativeModules;

class HVPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: false,
      playing: false,
    };
  }

  componentWillMount() {
    Environment.setBackgroundVideo('vplayer');
  }

  handleButtonClick = (e) => {
    this.setState({ hide: !this.state.hide });
  };

  togglePlayState = () => {
    this.setState({ playing: !this.state.playing });
    if (!this.state.playing) {
      VideoModule.resume('vplayer'); 
    } else {
      VideoModule.pause('vplayer'); 
    }
  };

  render() {
    return(
      <VrButton style={styles.button}
        onClick={this.handleButtonClick}
        onLongClick={this.togglePlayState}>
        {
          !this.state.hide && 
          <View style={styles.menu}>
            <Text style={styles.menuText}>{'Long tap to play/pause\nShort tap to toggle this menu'}</Text>
          </View>
        }
      </VrButton>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 600,
    width: 600,
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  menu: {
    width: 600,
    height: 600,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(57, 57, 57, 0.6)',
    borderRadius: 12,
  },
  menuText: {
    textAlign: 'center',
    fontSize: 32,
  },
});

export default HVPanel;