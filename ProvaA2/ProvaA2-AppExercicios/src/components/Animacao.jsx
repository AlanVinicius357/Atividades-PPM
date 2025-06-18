import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

export default function Animacao() {
  return (
    <View style={styles.container}>
      <LottieView
        source={require('../components/Animation - 1750277140212.json')} 
        autoPlay
        loop={false}
        style={styles.animacao}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  animacao: {
    width: 200,
    height: 200,
  },
});
