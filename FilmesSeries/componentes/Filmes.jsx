import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function filmes(props) {

    const {nome, ano, diretor, tipo, capa} = props


  return (
    <View>
      <Text style={styles.texto}>Filmes</Text>

            <Text style={styles.texto}>Nome: {nome}</Text>
            <Text style={styles.texto}>Ano: {ano}</Text>
            <Text style={styles.texto}>Diretor: {diretor}</Text>
            <Text style={styles.texto}>Tipo: {tipo}</Text>
            <Image
        source={{
          uri: imagem
        }}
        style={{
          height: 200,
          width: 200
        }}

      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
        borderWidth: 10,
        padding: 5,
        alignItems: 'center',
        flex: 1
      },
      texto: {
        fontSize: 20,
        fontWeight: 600
      }
})