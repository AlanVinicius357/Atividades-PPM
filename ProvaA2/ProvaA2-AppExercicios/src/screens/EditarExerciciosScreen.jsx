import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Animacao from '../components/Animacao'; // Caminho correto do componente

export default function TelaEditarExercicio({ route, navigation }) {
  const { exercise } = route.params;

  const [nome, setNome] = useState(exercise.nome);
  const [grupo, setGrupo] = useState(exercise.grupo);
  const [series, setSeries] = useState(exercise.series);
  const [repeticoes, setRepeticoes] = useState(exercise.repeticoes);
  const [tempo, setTempo] = useState(exercise.tempo);
  const [mostrarAnimacao, setMostrarAnimacao] = useState(false);

  const atualizar = async () => {
    const dados = await AsyncStorage.getItem('exercises');
    let lista = dados ? JSON.parse(dados) : [];

    lista = lista.map(item =>
      item.id === exercise.id
        ? { ...item, nome, grupo, series, repeticoes, tempo }
        : item
    );

    await AsyncStorage.setItem('exercises', JSON.stringify(lista));

    setMostrarAnimacao(true);

    setTimeout(() => {
      setMostrarAnimacao(false);
      navigation.goBack();
    }, 2000);
  };

  return (
    <ScrollView style={estilos.container}>
      <TextInput label="Nome" value={nome} onChangeText={setNome} style={estilos.input} />
      <TextInput label="Grupo Muscular" value={grupo} onChangeText={setGrupo} style={estilos.input} />
      <TextInput
        label="Séries"
        keyboardType="numeric"
        value={series}
        onChangeText={setSeries}
        style={estilos.input}
      />
      <TextInput
        label="Repetições"
        keyboardType="numeric"
        value={repeticoes}
        onChangeText={setRepeticoes}
        style={estilos.input}
      />
      <TextInput
        label="Tempo"
        keyboardType="numeric"
        value={tempo}
        onChangeText={setTempo}
        style={estilos.input}
      />

      <View style={estilos.containerBotoes}>
        <Button
          mode="contained"
          onPress={atualizar}
          style={estilos.botao}
          buttonColor="orange"
          textColor="#fff"
        >
          Atualizar
        </Button>
      </View>

      {mostrarAnimacao && <Animacao />}
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  input: {
    marginBottom: 12,
  },
  containerBotoes: {
    marginTop: 16,
  },
  botao: {
    borderRadius: 9,
    borderWidth: 2,
    borderColor: 'rgba(252, 185, 124, 0.95)',
    shadowColor: 'rgba(219, 17, 17, 0.95)',
    shadowRadius: 4,
  },
});
