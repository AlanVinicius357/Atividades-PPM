import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import axios from 'axios';
import { Card, Title, Paragraph } from 'react-native-paper';

const ListaProdutosScreen = ({ route, navigation }) => {
  const { categoria } = route.params;
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/category/${categoria}`)
      .then(res => setProdutos(res.data.products))
      .catch(err => console.error(err));
  }, []);

  return (
    <FlatList
      data={produtos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Card style={{ margin: 10 }} onPress={() => navigation.navigate('Produto', { idProduto: item.id })}>
          <Card.Cover source={{ uri: item.thumbnail }} />
          <Card.Content>
            <Title>{item.title}</Title>
            <Paragraph>{item.description.substring(0, 60)}...</Paragraph>
          </Card.Content>
        </Card>
      )}
    />
  );
};

export default ListaProdutosScreen;
