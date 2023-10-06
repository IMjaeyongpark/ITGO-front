import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from './screens/StartScreen';
import MainScreen from './screens/MainScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import SplashScreen from './screens/SplashScreen';
const Stack = createStackNavigator();

const App= () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} options={{ gestureEnabled: false }}/>
        {/* 뒤로가기 제스처 막음 */}
        <Stack.Screen name="Start" component={StartScreen} options={{ gestureEnabled: false }}/>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;