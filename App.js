import React, { Component } from 'react';
import { Animated, View, StyleSheet } from 'react-native';
import { Asset, DangerZone, Constants } from 'expo';
const { Lottie: Animation } = DangerZone;

export default class App extends Component {
  state = {
    progress: new Animated.Value(1),
  };

  componentDidMount() {
    // error!
    console.log(Asset.fromModule(require('./watermelon.json'))); 
    this._playForwards();
  }

  _playForwards = () => {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 3000,
    }).start(this._playBackwards);
  };

  _playBackwards = () => {
    Animated.timing(this.state.progress, {
      toValue: 0,
      duration: 3000,
    }).start(this._playForwards);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ width: 200, height: 200, backgroundColor: 'green' }} />
        <Animation
          style={{
            width: 200,
            height: 200,
          }}
          source={require('./watermelon.json')}
          progress={this.state.progress}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});
