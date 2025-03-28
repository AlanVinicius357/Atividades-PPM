import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function JavaScriptComponente() {
//logica do componente
    const nome = "Alan"
    const idade = 16

    function checarMaiorIdade(){
        console.log("Chamou a função chegarMaiorIdade")
        if(idade >= 18) {
            return "Maior de idade"
        }
        else{
            return "Menor de idade"
        }
    }

    function alerta(){
        alert('Clicou no botão')
    }

  return (
    <View style={styles.container}>

      <Text style={styles.texto}>javascriptComponente</Text>
      <Text style={styles.texto}>{nome} e {idade}</Text>
      <Text style={styles.texto}>{idade + 40}</Text>

      <Text style={styles.texto}>18+: {checarMaiorIdade()}</Text>

      <Button title='Enviar' onPress={alerta}/>

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'pink',
        borderWidth: 5,
        padding: 10
    },
    texto:{
        color:'white',
        fontSize: 30,
        fontWeight: 20
    }
})