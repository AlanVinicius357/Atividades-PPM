import {ScrollView, StyleSheet, View, Image } from 'react-native'
import React from 'react'
import { PaperProvider, Text } from 'react-native-paper'
import { StatusBar } from 'expo-status-bar';



export default function EscudoScreen() {
  
  const time = {
    nome: "Flamengo",
    escudo: "https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg",
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