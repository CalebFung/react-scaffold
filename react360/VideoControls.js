import React from 'react';
import {
  StyleSheet, 
  VrButton, 
  View, 
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
      playing: false,
      hidden: false,
    };
  }

  componentWillMount() {
    Environment.setBackgroundVideo('vplayer');
  }

  showButton = () => {
    this.setState({ hidden: false });
  };

  hideButton = () => {
    this.setState({ hidden: true });
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
    var button;

    if (this.state.hidden) {
      button = <VrButton></VrButton>;
    } else {
      button = <VrButton
        style={styles.button}
        onClick={this.togglePlayState}>
        <Image
          style={styles.icon}
          source={this.state.playing ? asset('pause.png') : asset('play.png')} />
      </VrButton>;
    }

    return(
      <View style={styles.panel}
        onEnter={this.showButton}
        onExit={this.hideButton}>
        {/* <Text style={styles.panelText}>{'Follows Horizontally and Vertically'}</Text> */}
        {button}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    height: 84,
    width: 84,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 25,
  }, 
  icon: {
    tintColor: '#ffffff',
    height: 64,
    width: 64,
    aspectRatio: 1,
  },
});

export default HVPanel;