import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import { Card, Title, Paragraph, Text } from 'react-native-paper';

const ProdutoScreen = ({ route }) => {
  const { idProduto } = route.params;
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${idProduto}`)
      .then(res => setProduto(res.data))
      .catch(err => console.error(err));
  }, []);

  if (!produto) return <Text>Carregando...</Text>;

  return (
    <ScrollView style={{ padding: 10 }}>
      <Card>
        <Card.Cover source={{ uri: produto.thumbnail }} />
        <Card.Content>
          <Title>{produto.title}</Title>
          <Paragraph>{produto.description}</Paragraph>
          <Text>Preço: ${produto.price}</Text>
          <Text>Marca: {produto.brand}</Text>
          <Text>Categoria: {produto.category}</Text>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

export default ProdutoScreen;
