import 'react-native-gesture-handler'; // Importante para o funcionamento dos gestos de navegação

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

// Importação de telas
import TelaInicial from './screens/TelaInicial';
import DDDTela from './screens/DDDTela';
import CEPTela from './screens/CEPTela';
import CNPJTela from './screens/CNPJTela';
import FeriadoTela from './screens/FeriadoTela';
import CotacaoTela from './screens/CotacaoTela';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Cotação">
        <Drawer.Screen name="Início" component={TelaInicial} />
        <Drawer.Screen name="DDD" component={DDDTela} />
        <Drawer.Screen name="CEP" component={CEPTela} />
        <Drawer.Screen name="CNPJ" component={CNPJTela} />
        <Drawer.Screen name="Feriados Nacionais" component={FeriadoTela}/>
        <Drawer.Screen name="Cotação" component={CotacaoTela} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}