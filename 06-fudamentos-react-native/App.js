import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PrimeiroComponente from './componentes/PrimeiroComponente';
import SegundoComponente from './componentes/SegundoComponente';
import TerceiroComponente from './componentes/TerceiroComponente';
import QuartoComponente from './componentes/QuartoComponente';
import QuintoComponente from './componentes/QuintoComponente';


export default function App() {
  return (
    <View style={styles.container}>

          <PrimeiroComponente />
          <SegundoComponente />
          <TerceiroComponente />
          <QuartoComponente />
          <QuintoComponente />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
