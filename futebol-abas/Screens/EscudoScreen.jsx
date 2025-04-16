import {ScrollView, StyleSheet, View, Image } from 'react-native'
import React from 'react'
import { PaperProvider, Text } from 'react-native-paper'
import { StatusBar } from 'expo-status-bar';



export default function EscudoScreen() {
  
  const time = {
    nome: "São Paulo",
    escudo: "https://img.elo7.com.br/product/zoom/50C22DE/matriz-de-bordado-time-sao-paulo-futebol-clube-spfc-escudo.jpg",
    };


  return (
    <ScrollView>
       <PaperProvider>
          <View style={styles.container}>
             <StatusBar style="auto" />
 
            <Text variant='headlineSmall' style={{ fontWeight: 'bold' }}>{time.nome}</Text>
            <Image source={{ uri: time.escudo }} style={styles.image} />



          </View>
       </PaperProvider>
 
     </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'fff',
        alignItems: 'center',
        paddingTop: 10
    },
    image: {
      width: 200,
      height: 200,
      marginTop: 20
    }
})