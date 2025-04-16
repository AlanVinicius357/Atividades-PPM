import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons} from '@expo/vector-icons'

import EscudoScreen from './Screens/EscudoScreen'
import JogadoresScreen from './Screens/JogadoresScreen'
import TitulosScreen from './Screens/TitulosScreen'




const Tab = createBottomTabNavigator()
export default function App() {
  
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen 
            name='EscudoScreen'
            component={EscudoScreen}
            options={{
              title:'Escudo',
              headerTitleAlign:'center',
              headerTintColor: 'fff',
              tabBarIcon: ({color,size}) => 
                <Ionicons 
                name='shield-sharp'
                color={color} size={size}/>
            }}
            
            />
            <Tab.Screen 
            name='JogadoresScreen'
            component={JogadoresScreen}
            options={{
              title:'Jogadores',
              headerTitleAlign:'center',
              headerTintColor: 'fff',
              tabBarIcon: ({color,size}) => 
                <Ionicons 
                name='walk'
                color={color} size={size}/>
            }}
            />
            <Tab.Screen 
            name='TitulosScreen'
            component={TitulosScreen}
            options={{
              title: 'Titulos',
              headerTitleAlign:'center',
              headerTintColor:'fff',
              tabBarIcon: ({color,size}) => 
                <Ionicons 
                name='trophy'
                color={color} size={size}/>
            }}
            />
            
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}


