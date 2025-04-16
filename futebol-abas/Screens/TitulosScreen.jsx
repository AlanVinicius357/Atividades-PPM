import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { Text, List } from 'react-native-paper';

const titulos = [
  {
    nome: "Campeonato Brasileiro",
    anos: [1977, 1986, 1991, 2006, 2007, 2008]
  },
  {
    nome: "Copa Libertadores da América",
    anos: [1993, 1994, 2005]
  },
  
  {
    nome: "Copa do Brasil",
    anos: [2023]
  },
  {
    nome: "Mundial de Clubes",
    anos: [1993, 1994, 2005]
  },
  

];

const TitulosScreen = () => {
  return (
    <FlatList
      data={titulos}
      keyExtractor={(item) => item.nome}
      renderItem={({ item }) => (
        <List.Section>
          <List.Subheader>{item.nome}</List.Subheader>
          <Text style={styles.texto}>{item.anos.join(', ')}</Text>
        </List.Section>
      )}
    />
  );
};

export default TitulosScreen;

const styles = StyleSheet.create({
  texto: {
    marginLeft: 15,
    fontSize: 16,
    color: '#333'
  }
});
