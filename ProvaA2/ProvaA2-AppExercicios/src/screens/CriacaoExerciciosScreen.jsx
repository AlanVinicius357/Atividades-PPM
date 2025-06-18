import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';
import Animacao from '../components/Animacao';

export default function TelaCriarExercicio({ navigation }) {
  const [nome, setNome] = useState('');
  const [grupo, setGrupo] = useState('');
  const [series, setSeries] = useState('');
  const [repeticoes, setRepeticoes] = useState('');
  const [tempo, setTempo] = useState('');
  const [mostrarAnimacao, setMostrarAnimacao] = useState(false);

  const salvar = async () => {
    if (!nome || !grupo || !series || !repeticoes) return;

    const novoExercicio = {
      id: uuid.v4(),
      nome,
      grupo,
      series,
      repeticoes,
      tempo,
    };

    const dados = await AsyncStorage.getItem('exercises');
    const lista = dados ? JSON.parse(dados) : [];
    lista.push(novoExercicio);
    await AsyncStorage.setItem('exercises', JSON.stringify(lista));

    setMostrarAnimacao(true);
    setTimeout(() => {
      setMostrarAnimacao(false);
      navigation.goBack();
    }, 1800);
  };

  return (
    <View style={{ flex: 1 }}>
      {mostrarAnimacao && <Animacao />}

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
          label="Tempo (min)"
          keyboardType="numeric"
          value={tempo}
          onChangeText={setTempo}
          style={estilos.input}
        />

        <View style={estilos.containerBotoes}>
          <Button
            mode="contained"
            onPress={salvar}
            style={estilos.botao}
            buttonColor="orange"
            textColor="#fff"
          >
            Salvar
          </Button>

          <Button
            mode="contained"
            onPress={() => navigation.navigate('Treinos')}
            style={[estilos.botao, { marginTop: 8 }]}
            buttonColor="orange"
            textColor="#fff"
          >
            Voltar para Início
          </Button>
        </View>
      </ScrollView>
    </View>
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

