import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Perfil(props) {

    console.log("Propriedades -> ", props)



  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Perfil</Text>
      <Text style={styles.texto}>Nome: {props.Nome}</Text>
      <Text style={styles.texto}>Idade: {props.Idade}</Text>
      <Text style={styles.texto}>Telefone: {props.Telefone}</Text>
      <Text style={styles.texto}>Email: {props.Email}</Text>

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'blue',
        borderWidth: 5,
        padding: 15,
        margin: 10
    },
    texto: {
        fontSize: 15,
        fontWeight: 600,
        color: 'white'
    }
})