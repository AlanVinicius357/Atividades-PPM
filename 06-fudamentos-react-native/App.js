import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import PrimeiroComponente from './componentes/PrimeiroComponente';
import SegundoComponente from './componentes/SegundoComponente';
import TerceiroComponente from './componentes/TerceiroComponente';
import QuartoComponente from './componentes/QuartoComponente';
import QuintoComponente from './componentes/QuintoComponente';
import SextoComponente from './componentes/SextoComponente';
import JavaScriptComponente from './componentes/JavaScriptComponente';
import Perfil from './componentes/Perfil';
import ListaComponente from './componentes/ListaComponente';
import Atleta from './componentes/Atleta';

export default function App() {


  return (
  
            {/*<PrimeiroComponente />
            <SegundoComponente />
            <TerceiroComponente />
            <QuartoComponente />
            <QuintoComponente />
            <SextoComponente />
            <JavaScriptComponente />
            <Perfil
            Nome="Alan"
            Idade={24}
            Telefone="61999999999"
            Email="alanfdfsdfsd@gmail.com"
            />
  
            <Perfil
            Nome="mateus"
            Idade={23}
            Telefone="61999999999"
            Email="fdfsdfsd@gmail.com"
            />
  
            <ListaComponente />
              */}
  
          
      </View>
    </ScrollView>
    


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
