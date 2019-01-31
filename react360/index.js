import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Environment, 
  VideoModule
} from 'react-360';

export default class react360 extends React.Component {

  componentWillMount() {
    console.log(this.props)
    // this.VideoModule.resume('myplayer'); // Start playback
  }

  render() {
    return (
      <View></View>
    );
  }
};

const styles = StyleSheet.create({
  
});

AppRegistry.registerComponent('react360', () => react360);
