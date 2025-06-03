
import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {Ionicons} from '@expo/vector-icons'

import Tela1 from '../screens/Tela1'
import Tela2 from '../screens/Tela2'



const Drawer = createDrawerNavigator()


export default function DrawerRoutes() {
  return (
    <Drawer.Navigator>
        <Drawer.Screen 
        name='Tela1'
        component={Tela1}
        options={{
            title:"Tela1",
            drawerIcon: ({color, size}) => <Ionicons name='shield' color={color} size={size} />
        }}
        />
        <Drawer.Screen 
        name='Tela2'
        component={Tela2}
        options={{
            title:"Tela2",
            drawerIcon: ({color, size}) => <Ionicons name='shield' color={color} size={size} />
        }}
        />
    </Drawer.Navigator>
  )
}

