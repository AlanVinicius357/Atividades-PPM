import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  Image,
  StyleSheet,
  ActivityIndicator,
  View,
} from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import axios from 'axios';

const gruposMusculares = [
  { id: 'abs', nome: 'Abdômen' },
  { id: 'back', nome: 'Costas' },
  { id: 'biceps', nome: 'Bíceps' },
  { id: 'chest', nome: 'Peito' },
  { id: 'glutes', nome: 'Glúteos' },
  { id: 'hamstrings', nome: 'Posterior da coxa' },
  { id: 'quadriceps', nome: 'Quadríceps' },
  { id: 'shoulders', nome: 'Ombros' },
  { id: 'triceps', nome: 'Tríceps' },
  { id: 'calves', nome: 'Panturrilhas' },
];

const TelaExerciciosApi = ({ navigation }) => {
  const [grupoSelecionado, setGrupoSelecionado] = useState('abs');
  const [exercicios, setExercicios] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [temMais, setTemMais] = useState(true);

  const CHAVE_API = '2faf642803mshdaff1e0778b7cb7p1991acjsne78189fbeaea';

  const buscarExercicios = async (pagina = 1) => {
    setCarregando(true);
    try {
      const resposta = await axios.get(
        `https://exercisedb.p.rapidapi.com/exercises/target/${grupoSelecionado}`,
        {
          headers: {
            'X-RapidAPI-Key': CHAVE_API,
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
          },
        }
      );

      if (pagina === 1) {
        setExercicios(resposta.data);
      } else {
        setExercicios((anterior) => [...anterior, ...resposta.data]);
      }

      setTemMais(false);
    } catch (erro) {
      console.log('Erro ao buscar exercícios:', erro);
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    buscarExercicios(1);
  }, [grupoSelecionado]);

  return (
    <ScrollView style={estilos.container}>
      <Paragraph style={estilos.titulo}>Selecione um grupo muscular:</Paragraph>

      <View style={estilos.grupoContainer}>
        {gruposMusculares.map((grupo) => (
          <Button
            key={grupo.id}
            mode={grupo.id === grupoSelecionado ? 'contained' : 'outlined'}
            onPress={() => setGrupoSelecionado(grupo.id)}
            style={estilos.botaoGrupo}
            buttonColor="orange"
            textColor="#fff"
          >
            {grupo.nome}
          </Button>
        ))}
      </View>

      {exercicios.length === 0 && !carregando && (
        <Paragraph style={estilos.textoSemExercicios}>
          Nenhum exercício encontrado para "{grupoSelecionado}".
        </Paragraph>
      )}

      {exercicios.map((item) => (
        <Card key={item.id} style={estilos.cartao}>
          <Image
            source={{
              uri: item.gifUrl
                ? item.gifUrl
                : 'https://via.placeholder.com/400x200?text=Sem+Imagem',
            }}
            style={estilos.imagem}
            resizeMode="cover"
          />
          <Card.Content>
            <Title style={estilos.tituloCartao}>{item.name}</Title>
            <Paragraph>
              {item.bodyPart
                ? `Grupo muscular: ${item.bodyPart}`
                : 'Descrição não disponível.'}
            </Paragraph>
          </Card.Content>
        </Card>
      ))}

      {carregando && <ActivityIndicator size="large" style={estilos.carregando} />}

      <Button
        mode="contained"
        onPress={() => navigation.navigate('Treinos')}
        style={estilos.botaoVoltar}
        buttonColor="orange"
        textColor="#fff"
      >
        Voltar para Início
      </Button>
    </ScrollView>
  );
};

const estilos = StyleSheet.create({
  container: {
    padding: 16,
  },
  grupoContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 16,
  },
  botaoGrupo: {
    margin: 4,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: 'rgba(252, 185, 124, 0.95)',
    shadowColor: 'rgba(219, 17, 17, 0.95)',
    shadowRadius: 4,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 8,
    fontWeight: 'bold',
    color: '#333',
  },
  textoSemExercicios: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
  cartao: {
    marginBottom: 16,
    backgroundColor: 'rgba(226, 226, 226, 0.95)',
    borderWidth: 2,
    borderColor: 'rgba(252, 185, 124, 0.95)',
    borderRadius: 9,
    shadowColor: 'rgba(219, 17, 17, 0.95)',
    shadowRadius: 4,
  },
  imagem: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  tituloCartao: {
    color: 'orange',
    fontSize: 18,
    fontWeight: 'bold',
  },
  carregando: {
    margin: 20,
  },
  botaoVoltar: {
    marginBottom: 20,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: 'rgba(252, 185, 124, 0.95)',
    shadowColor: 'rgba(219, 17, 17, 0.95)',
    shadowRadius: 4,
  },
});

export default TelaExerciciosApi;
