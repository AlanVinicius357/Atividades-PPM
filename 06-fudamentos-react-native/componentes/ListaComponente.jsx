import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ListaComponente() {

    const ListaCarros = ["gol", "palio", "sonata", "hb20", "uno", "Azera"]


  return (
    <View style={styles.container}>
      
      {ListaCarros.map(
        (carro) => <Text style={styles.texto}>{carro}</Text>
    )}


    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'purple',
        borderWidth:5,
        padding: 50,
        borderColor: 'blue',
        borderRadius: 10,
        boxShadow:'black',
        
    },
    texto:{
        color: 'white',
        fontSize: 50,
        fontWeight: 10
    }
})