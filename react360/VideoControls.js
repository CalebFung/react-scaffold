import React from 'react';
import {StyleSheet, VrButton, View, Image, asset} from 'react-360';

class HVPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false
    };
  }

  togglePlayState = () => {
    this.setState({ playing: !this.state.playing })
  };

  render() {
    return(
      <View style={styles.panel}>
        {/* <Text style={styles.panelText}>{'Follows Horizontally and Vertically'}</Text> */}
        <VrButton
          onClick={this.togglePlayState}

        >
          <Image
            style={styles.icon}
            source={this.state.playing ? asset('pause.png') : asset('play.png')} />
        </VrButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    width: 64,
    height: 64,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  icon: {
    tintColor: '#ffffff',
    height: 32,
    width: 32,
    aspectRatio: 1,
  },
});

export default HVPanel;