import React, { useEffect, useState } from 'react';
import { FlatList, View, ImageBackground, StyleSheet, Text } from 'react-native';
import { FAB, Card, IconButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused, useNavigation } from '@react-navigation/native';

export default function TelaInicial() {
  const [exercicios, setExercicios] = useState([]);
  const estaFocado = useIsFocused();
  const navegacao = useNavigation();

  useEffect(() => {
    carregarExercicios();
  }, [estaFocado]);

  const carregarExercicios = async () => {
    const dados = await AsyncStorage.getItem('exercises');
    setExercicios(dados ? JSON.parse(dados) : []);
  };

  const excluirExercicio = async (id) => {
    const atualizados = exercicios.filter(e => e.id !== id);
    await AsyncStorage.setItem('exercises', JSON.stringify(atualizados));
    setExercicios(atualizados);
  };

  const editarExercicio = (item) => {
    navegacao.navigate('EditarExerciciosScreen', { exercise: item });
  };

  const renderizarItem = ({ item }) => (
    <Card style={estilos.cartao} mode="elevated">
      <Card.Content style={estilos.conteudoCartao}>
        <View style={estilos.containerTexto}>
          <Text style={estilos.titulo}>{item.nome.toUpperCase()}</Text>

          <View style={estilos.linhaDetalhe}>
            <IconButton icon="weight-lifter" size={20} color="#2E7D32" />
            <Text style={estilos.textoDetalhe}>{item.grupo.toUpperCase()}</Text>
          </View>

          <View style={estilos.linhaDetalhe}>
            <IconButton icon="repeat" size={20} color="#2E7D32" />
            <Text style={estilos.textoDetalhe}>{`${item.series} séries`}</Text>
          </View>

          <View style={estilos.linhaDetalhe}>
            <IconButton icon="reorder-horizontal" size={20} color="#2E7D32" />
            <Text style={estilos.textoDetalhe}>{`${item.repeticoes} repetições`}</Text>
          </View>

          <View style={estilos.linhaDetalhe}>
            <IconButton icon="timer" size={20} color="#2E7D32" />
            <Text style={estilos.textoDetalhe}>{item.tempo ? `${item.tempo} min` : 'Sem tempo'}</Text>
          </View>
        </View>

        <View style={estilos.containerIcones}>
          <IconButton
            icon="pencil"
            size={24}
            color="#2E7D32"
            onPress={() => editarExercicio(item)}
          />
          <IconButton
            icon="delete"
            size={24}
            color="#2E7D32"
            onPress={() => excluirExercicio(item.id)}
          />
        </View>
      </Card.Content>
    </Card>
  );

  return (
    <ImageBackground
      source={require('../Imagens/imagemfundo.png')}
      style={estilos.fundo}
      resizeMode="cover"
    >
      <FlatList
        data={exercicios}
        keyExtractor={(item) => item.id}
        renderItem={renderizarItem}
        contentContainerStyle={{ paddingBottom: 100, padding: 10 }}
      />

      <FAB
        icon="plus"
        onPress={() => navegacao.navigate('Novo Exercício')}
        style={[estilos.fab]}
        color="#fff"
      />
    </ImageBackground>
  );
}

const estilos = StyleSheet.create({
  fundo: {
    flex: 1,
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    borderColor: 'rgba(252, 185, 124, 0.95)',
    borderRadius: 9,
    shadowColor: 'rgba(219, 17, 17, 0.95)',
    shadowRadius: 4,
    backgroundColor: 'orange'
  },
  cartao: {
    marginBottom: 16,
    backgroundColor: 'rgba(226, 226, 226, 0.78)',
    borderWidth: 2,
    borderColor: 'rgba(252, 185, 124, 0.95)',
    borderRadius: 9,
    shadowColor: 'rgba(219, 17, 17, 0.95)',
    shadowRadius: 4,
  },
  conteudoCartao: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  containerTexto: {
    flex: 1,
    paddingRight: 10,
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 12,
    color: 'orange',
  },
  linhaDetalhe: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  textoDetalhe: {
    fontSize: 14,
    color: '#333',
  },
  containerIcones: {
    flexDirection: 'row',
    marginTop: 8,
  },
});

