import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import CriacaoExerciciosScreen from '../screens/CriacaoExerciciosScreen';
import ApiExerciciosScreen from '../screens/ApiExerciciosScreen';

const Tab = createBottomTabNavigator();

export default function TabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: '#6200ee',
      }}
    >
      <Tab.Screen
        name="Treinos"
        component={HomeScreen}
        options={{
          headerShown: false, 
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="sports-gymnastics" size={size} color={color} />
          ),
        }}
        />

      <Tab.Screen
        name="Novo Exercício"
        component={CriacaoExerciciosScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="playlist-add-circle" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Exercícios API"
        component={ApiExerciciosScreen}
        options={{
          headerShown: false,
          title:'Exercícios',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="fitness-center" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
