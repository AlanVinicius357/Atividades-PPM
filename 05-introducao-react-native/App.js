//  imports
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';


//componente principal
//ele deve retornar oque será renderizado na tela(template feito com JSX)
export default function App() {
//logica do meu componente
  const nome ="Alan"

  function Alerta(){
    alert("Você cliclou no botão")
  }


  //retorno com jsx
  return (
    <View style={styles.container}>
     {/*comentario dentro do templte jsx */}
     {/*codto javasripit*/}
     <Text>{2+2}</Text>
     <Text>{nome}</Text>
      <Text> Abra o aplicativo</Text>
      <StatusBar style="auto" />

      <Button title='Alerta' onPress={Alerta}></Button>
      <Image 
      source={{uri: 'https://images.pexels.com/photos/16100671/pexels-photo-16100671/free-photo-of-panorama-vista-paisagem-natureza.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}
      style= {{
        height: 300,
        width:300
      }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
