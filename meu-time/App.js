
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView, Image } from 'react-native';

export default function App() {
  function Alerta(){
    alert('Gooool, é do Lucas Moura')
  }
  return (
    <ScrollView>

      <View style={styles.container}>

      <Button title='Alerta' onPress={Alerta}></Button>

      <Text style = {styles.textoGrande}>Lucas Moura</Text>

      <Text style = {styles.textestilo}>-Lucas Rodrigues Moura da Silva é um futebolista brasileiro que atua como meia-atacante ou ponta. Atualmente joga pelo São Paulo.</Text>

      <Text style = {styles.textestilo}>-Nascimento: 13 de agosto de 1992 (idade 32 anos)</Text>

      <Text style = {styles.textestilo}>-Altura: 1,72 m</Text>

      <Text style = {styles.textestilo}>-Início de carreira: 2010</Text>

      <Text style = {styles.textestilo}>-Peso: 72 kg</Text>

      <StatusBar style="auto" />

      <Image 
          source={require('./imagens/image.png')}

          style= {{
            height: 300,
            width: 300,
            paddingBottom:10
          }}/>
        <Text>Lucas Rodrigues Moura da Silva (São Paulo, 13 de agosto de 1992) é um futebolista brasileiro que atua como meia-atacante ou ponta. Atualmente joga pelo São Paulo.</Text>
          <Image 
          source={require('./imagens/image2.webp')}

          style= {{
            height: 300,
            width: 300,
            paddingBottom:10
          }}/>
          <Text>Começou sua carreira na escolinha do ex-jogador Marcelinho Carioca em Diadema, lá passou a ser chamado de Marcelinho devido a fisionomia parecida com o ex-jogador. Seis meses depois ele teve uma breve passagem pela escolinha do SERC Santa Maria em São Caetano do Sul, que agora se chama Craques do Futebol sob comando do treinador Dirceu Gabriel Couto.</Text>
          <Image 
          source={require('./imagens/image3.jpg')}

          style= {{
            height: 300,
            width: 300,
            paddingBottom:10
          }}/>
          <Text>Lucas chegou ao São Paulo aos 13 anos de idade, ainda conhecido como Marcelinho. Ainda na primeira semana que Lucas começou a treinar no seu novo clube, o pai do jogador acabou passando novamente pela mesma situação que havia passado anteriormente - quando Lucas chegou ao Corinthians, os dirigentes do São Paulo haviam feito um convite para que o jogador treinasse nas categorias de base do tricolor. Porém desta vez a situação era a inversa do que havia acontecido antes - desta vez foram os dirigentes do Corinthians que convidaram para que o jogador voltasse a treinar nas categorias de base do time alvinegro. O pai do jogador fez a mesma escolha quando isso aconteceu pela primeira vez e acabou optando pela permanência do seu filho no time em que estava treinando.</Text>
          <Image 
          source={require('./imagens/image4.webp')}

          style= {{
            height: 300,
            width: 300,
            paddingBottom:10
          }}/>
          <Text>Logo após chegar ao clube, o jogador teve um crescimento no desempenho do seu futebol e ainda no primeiro ano, Lucas foi campeão paulista da sua categoria atuando pelo seu novo clube. Permaneceu atuando nas categorias de base do clube até chegar à faixa etária dos jogadores que disputam a Copa São Paulo de Futebol Júnior.</Text>
          <Image 
          source={require('./imagens/image5.jpg')}

          style= {{
            height: 300,
            width: 300,
            paddingBottom:10
          }}/>
          
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100,
    color: 'red'
   
  },
    textoGrande:{
        fontSize: 30,
        fontWeight: 900,
        fontStyle: 'italic',
        color:'red',
    },

    textestilo:{
      fontSize: 15,
      color: 'black',
      paddingBottom: 10
    },
});
