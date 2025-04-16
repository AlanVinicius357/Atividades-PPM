import React from 'react';
import { FlatList, View, Image, StyleSheet } from 'react-native';
import { Text, Card } from 'react-native-paper';

const jogadores = [
  {
    nome: "Lucas Moura",
    numero: 7,
    imagem: "https://s2-ge.glbimg.com/AtjSDx2S-pKzDc7lTf72BZ1sL5I=/0x0:1638x2048/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2025/f/Y/AGPjuHQgWpBkJv0ZHjvg/gowqdltwqaatgek.jpg"
  },
  {
    nome: "Oscar",
    numero: 8,
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-wk8ntJPXlvPkINKIh-mVBny4G8Is_vFrcg&s"
  },
  {
    nome: "Luciano",
    numero: 10,
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNoUCBH0Jo-7VLmzVvIfclKqia_Z68id-04w&s"
  },
  {
    nome: "Ferreira",
    numero: 11,
    imagem: "https://lncimg.lance.com.br/cdn-cgi/image/width=950,quality=75,fit=pad,format=webp/uploads/2025/04/AGIF25041023001369-aspect-ratio-512-320.jpg"
  },
  {
    nome: "Calleri",
    numero: 9,
    imagem: "https://sportbuzz.com.br/wp-content/uploads/2024/09/calleri-marca-historia.jpg"
  },
];

const JogadoresScreen = () => {
  return (
    <FlatList
      data={jogadores}
      keyExtractor={(item) => item.nome}
      renderItem={({ item }) => (
        <Card style={styles.card}>
          <Card.Title 
          title={item.nome} 
          subtitle={`Camisa ${item.numero}`} />
          <Card.Cover
           source={{ uri: item.imagem }} 
           style={styles.image} />
        </Card>
      )}
    />
  );
};

export default JogadoresScreen;

const styles = StyleSheet.create({
  card: {
    margin: 20
  },
  image:{
    width: 372,
    height: 400

  }
});
