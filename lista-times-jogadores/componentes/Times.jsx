import { StyleSheet, Text, FlatList } from 'react-native'
import React from 'react'
import Jogadores from './Jogadores'
import {Card} from 'react-native-paper'

export default function Times(props) {

    const {nome, anoFundacao, mascote, imagem, jogadores} = props

  return (
    <Card style={{ margin: 10 }}>
      <Card.Title title={nome}/>
      <Card.Content>
        <Text>Ano fundação: {anoFundacao}</Text>
        <Text>Macoste: {mascote}</Text>
      </Card.Content>
      <Card.Cover source={{ uri: imagem }} />
      <Card.Actions>
        <FlatList
          horizontal
          data={jogadores}
          renderItem={({ item }) => (
            <Jogadores
              nome={item.nome}
              numero={item.numero}
              imagem={item.imagem}
            />
          )}
        />
      </Card.Actions>
    </Card>
  )
}

const styles = StyleSheet.create({})