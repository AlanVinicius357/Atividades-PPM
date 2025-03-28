//  imports dos componentes e libs

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';


//componente principal
//ele deve retornar oque será renderizado na tela(template feito com JSX)
export default function App() {
//logica do meu componente





  const nome ="Alan"

  function Alerta(){
    alert("Você cliclou no botão")
  }


  //retorno com codigo jsx(template) oque ira ser renderizado na tela
  return (
    <ScrollView>
      <View style={styles.container}>
        {/*comentario dentro do templte jsx */}
        {/*codto javasripit*/}

        
        <Text>{22+47}</Text>

        <Text style={{ fontSize: 40 }}>{nome}</Text>

          <Text style={styles.textoGrande}> Abra o aplicativo</Text>
          <Text style={styles.textoGrande}> Abra o aplicativo</Text>

          <StatusBar style="auto" />

          <Button title='Alerta' onPress={Alerta}></Button>

          <Image 
          source={{uri: 'https://images.pexels.com/photos/16100671/pexels-photo-16100671/free-photo-of-panorama-vista-paisagem-natureza.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}

          style= {{
            height: 350,
            width:350
          }}/>

          <Image 
          source={require('./imagens/image.png')}

          style= {{
            height: 300,
            width: 300
          }}/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50
  },
  textoGrande: {
    fontSize: 30,
    fontWeight: 900,
    fontStyle: 'italic'
  }
});
