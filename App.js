import 'react-native-gesture-handler'; // Importante para o funcionamento dos gestos de navegação

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

// Importação de telas
import TelaInicial from './screens/tela_inicial';
import DDD_tela from './screens/DDD_tela'
import CEP_tela from './screens/CEP_tela';
import FeriadoTela from './screens/FeriadoTela';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Início">
        <Drawer.Screen name="Início" component={TelaInicial} />
        <Drawer.Screen name="DDD" component={DDD_tela} />
        <Drawer.Screen name="CEP" component={CEP_tela} />
        <Drawer.Screen name="Feriados Nacionais" component={FeriadoTela}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}