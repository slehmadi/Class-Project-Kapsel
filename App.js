import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Screens } from './src/screens/ScreenList';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Test' component={Screens.TestScreen} />
        <Stack.Screen name='Map' component={Screens.MapScreen} />
        <Stack.Screen name='Start' component={Screens.StartScreen} />
        <Stack.Screen name='Home' component={Screens.HomeScreen} />
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}


