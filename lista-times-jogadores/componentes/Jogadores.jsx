import { StyleSheet } from 'react-native'
import React from 'react'
import {Avatar, Card} from 'react-native-paper'

export default function Jogadores(props) {

    const {nome, numero, imagem} = props
   

  return (
<Card.Title
      style={{ margin: 10 }}
      title={nome}
      subtitle= {numero}
      left={(props) => <Avatar.Image {...props} source={{ uri: imagem }} />}
    />
  )
}

const styles = StyleSheet.create({})