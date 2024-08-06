import React from 'react';
import { View, Animated, Image } from 'react-native';
import AnimatedMath from 'react-native-animated-math';
import BackgroundStyles from '../styles/BackgroundStyle';
import colors from '../colors';

export default class Background extends React.Component {
  state = {
    angle: new Animated.Value(0)
  }

  componentDidMount() {
    this.animate();
  }

  animate(rotation = 1) {
    Animated.timing(this.state.angle, {
      toValue: rotation * 2 * Math.PI,
      duration: 20000,
      useNativeDriver: true
    }).start(() => this.animate(rotation + 1));
  }

  render() {
    let { angle } = this.state;
    let radius1 = 430; // Radius for the first dot
    let radius2 = 400; // Radius for the second dot
    let phaseShift = Math.PI; // Phase shift to make blue dot lag behind

    return (
      <View style={[BackgroundStyles.container]}>
        <Animated.View style={[BackgroundStyles.dot, {
          transform: [
            { translateX: Animated.multiply(AnimatedMath.sin(angle), radius1) },
            { translateY: Animated.multiply(AnimatedMath.cos(angle), -radius1) },
          ]
        }]} >
          <Image
            source={require('../assets/images/Gradiant.png')} // Update with the path to your PNG image
            style={BackgroundStyles.image}
          />
        </Animated.View>
        <Animated.View style={[BackgroundStyles.dot, {
          transform: [
            { translateX: Animated.multiply(AnimatedMath.sin(Animated.add(angle, phaseShift)), radius2) },
            { translateY: Animated.multiply(AnimatedMath.cos(Animated.add(angle, phaseShift)), -radius2) },
          ]
        }]} >
          <Image
            source={require('../assets/images/Gradiant.png')} // Update with the path to your PNG image
            style={BackgroundStyles.image}
          />
        </Animated.View>
      </View>
    );
  }
}
