import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import TabsNavigator from './TabsNavigator';
import CriacaoExerciciosScreen from '../screens/CriacaoExerciciosScreen';
import ApiExerciciosScreen from '../screens/ApiExerciciosScreen';
import EditarExerciciosScreen from '../screens/EditarExerciciosScreen'; 

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Treinos">
      <Drawer.Screen
        name="Treinos"
        component={TabsNavigator}
        options={{ title: 'Treinos' }} 
      />
      <Drawer.Screen
        name="Novo Exercício"
        component={CriacaoExerciciosScreen}
        options={{ title: 'Novo Exercício' }}
      />
      <Drawer.Screen
        name="Exercícios"
        component={ApiExerciciosScreen}
        options={{ title: 'Exercícios' }}
      />
    </Drawer.Navigator>
  );
}


export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditarExerciciosScreen"
        component={EditarExerciciosScreen}
        options={{ title: 'Editar Exercício' }}
      />
    </Stack.Navigator>
  );
}
