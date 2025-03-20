
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
          <Image 
          source={require('./imagens/image2.webp')}

          style= {{
            height: 300,
            width: 300,
            paddingBottom:10
          }}/>
          <Image 
          source={require('./imagens/image3.jpg')}

          style= {{
            height: 300,
            width: 300,
            paddingBottom:10
          }}/>
          <Image 
          source={require('./imagens/image4.webp')}

          style= {{
            height: 300,
            width: 300,
            paddingBottom:10
          }}/>
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
