import { StatusBar } from 'expo-status-bar';
import { LogBox, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import { Provider } from 'react-redux'
import { store } from './store';
import BasketScreen from './screens/BasketScreen';
import PrepareOrderScreen from './screens/PrepareOrderScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  LogBox.ignoreAllLogs();//Ignore all log notifications
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />
          <Stack.Screen name="Basket" component={BasketScreen}
            options={{ presentation: "modal", headerShown: false }}
          />
          <Stack.Screen name="PrepareOrder" component={PrepareOrderScreen}
            options={{ presentation: "fullScreenModal", headerShown: false }}/>
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
