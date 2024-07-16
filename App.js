import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import TomatoVarieties from './TomatoVarieties';
import BeefsteakTomato from './pages/BeefsteakTomato';
import ArkaSaurabh from './pages/Arka Saurabh';
import ArkaVikas from './pages/Arks Vikas';
import BlackTomato from './pages/Black Tomato';
import CampariTomato from './pages/Campari Tomato';
import CherryTomato from './pages/Cherry Tomato';
import CO3Tomato from './pages/CO3 Tomato';
import GrapeTomato from './pages/Grape Tomato';
import GreenTomato from './pages/Green Tomato';
import HeirloomTomato from './pages/Heirloom Tomato';
import Paiyur1Tomato from './pages/Paiyur 1 Tomato';
import PAU2372Tomato from './pages/PAU-2372 Tomato';
import PbKesariTomato from './pages/Pb. Kesari Tomato';
import PunjabChhuharaTomato from './pages/Punjab Chhuhara Tomato';
import PusaEarlyDwarfTomato from './pages/Pusa Early Dwarf Tomato';
import PusaHybrid4Tomato from './pages/Pusa Hybrid 4 Tomato';
import PusaHybrid8Tomato from './pages/Pusa Hybrid 8 Tomato';
import PusaRohiniTomato from './pages/Pusa Rohini Tomato';
import PusaSadabaharTomato from './pages/Pusa Sadabahar Tomato';
import PusaUpharTomato from './pages/Pusa Uphar Tomato';
import RomaTomato from './pages/Roma Tomato (Plum Tomato)';
import SanMarzanoTomato from './pages/San Marzano Tomato';
import SiouxTomato from './pages/Sioux Tomato';
import YellowOrangeTomato from './pages/Yellow and Orange Tomato';

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6200ee',
    accent: '#03dac4',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="TomatoVarieties">
          <Stack.Screen name="TomatoVarieties" component={TomatoVarieties} />
          <Stack.Screen name="Arka Saurabh" component={ArkaSaurabh} />
          <Stack.Screen name="Arka Vikas" component={ArkaVikas} />
          <Stack.Screen name="Beefsteak Tomato" component={BeefsteakTomato} />
          <Stack.Screen name="Black Tomato" component={BlackTomato} />
          <Stack.Screen name="Campari Tomato" component={CampariTomato} />
          <Stack.Screen name="Cherry Tomato" component={CherryTomato} />
          <Stack.Screen name="CO-3" component={CO3Tomato} />
          <Stack.Screen name="Grape Tomato" component={GrapeTomato} />
          <Stack.Screen name="Green Tomato" component={GreenTomato} />
          <Stack.Screen name="Heirloom Tomato" component={HeirloomTomato} />
          <Stack.Screen name="Paiyur 1" component={Paiyur1Tomato} />
          <Stack.Screen name="PAU-2372" component={PAU2372Tomato} />
          <Stack.Screen name="Pb. Kesari" component={PbKesariTomato} />
          <Stack.Screen name="Punjab Chhuhara" component={PunjabChhuharaTomato} />
          <Stack.Screen name="Pusa Early Dwarf" component={PusaEarlyDwarfTomato} />
          <Stack.Screen name="Pusa Hybrid 4" component={PusaHybrid4Tomato} />
          <Stack.Screen name="Pusa Hybrid 8" component={PusaHybrid8Tomato} />
          <Stack.Screen name="Pusa Rohini" component={PusaRohiniTomato} />
          <Stack.Screen name="Pusa Sadabahar" component={PusaSadabaharTomato} />
          <Stack.Screen name="Pusa Upahar" component={PusaUpharTomato} />
          <Stack.Screen name="Roma Tomato" component={RomaTomato} />
          <Stack.Screen name="San Marzano" component={SanMarzanoTomato} />
          <Stack.Screen name="Sioux" component={SiouxTomato} />
          <Stack.Screen name="Yellow Tomato" component={YellowOrangeTomato} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
