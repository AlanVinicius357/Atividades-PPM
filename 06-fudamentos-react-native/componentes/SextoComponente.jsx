import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function SextoComponente() {
  return (
    <View style={styles.container}>
      <Text>SextoComponente</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'yellow',
        padding: 10,
        margin: 10,
        borderWidth: 5 ,
    },
    texto:{
        fontSize: 20,
        fontWeight: 600,
        color: 'red'
    }
})