import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import axios from 'axios';
import { List } from 'react-native-paper';

const HomeScreen = ({ navigation }) => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories')
      .then(res => setCategorias(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <FlatList
      data={categorias}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <List.Item
          title={item}
          onPress={() => navigation.navigate('Produtos', { categoria: item })}
          left={() => <List.Icon icon="folder" />}
        />
      )}
    />
  );
};

export default HomeScreen;