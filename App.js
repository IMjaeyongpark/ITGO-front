import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from './screens/StartScreen';
import PhoneNumber from './screens/PhoneNumber';
import LoginScreen from './screens/LoginScreen';
import SplashScreen from './screens/SplashScreen';
import Geolocation from './screens/Geolocation';
import Main from './screens/Main';
import ItemDetailScreen from './screens/ItemDetailScreen';
import Profile from './screens/Profile';
import SearchScreen from './screens/SearchScreen';
import SearchResultScreen from './screens/SearchResultScreen';
import LaptopInfo from './screens/LaptopInfo';
import NotificationScreen from './screens/NotificationScreen';
import ReGeolocationScreen from './screens/ReGeolocationScreen';
import NotificationKeywordSettingScreen from './screens/NotificationKeywordSettingScreen';
import CategoryResult from './screens/CategoryResult'
import DeviceInfo from './screens/DeviceInfo';
import DeviceCompare from './screens/DeviceCompare';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="PhoneNumber" component={PhoneNumber} />
        <Stack.Screen name="NotificationKeywordSettingScreen" component={NotificationKeywordSettingScreen} />
        <Stack.Screen name="ReGeolocationScreen" component={ReGeolocationScreen} />
        <Stack.Screen name="Geolocation" component={Geolocation} />
        <Stack.Screen name="Main" component={Main} options={{
          gestureEnabled: false, // 뒤로 가기 제스처를 비활성화
        }} />
        <Stack.Screen name="ItemDetailScreen" component={ItemDetailScreen} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="LaptopInfo" component={LaptopInfo} />
        <Stack.Screen name="SearchResultScreen" component={SearchResultScreen} />
        <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
        <Stack.Screen name="CategoryResult" component={CategoryResult} />
        <Stack.Screen name="DeviceInfo" component={DeviceInfo} />
        <Stack.Screen name="DeviceCompare" component={DeviceCompare} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;