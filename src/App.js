import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import { collors } from './constants/constants';
import { AuthProvider } from './contexts/authContext';

//Screens
import SignUp from './screens/SignUp';
import Home from './screens/Home';
import SignIn from './screens/SignIn';
import User from './screens/User';
import Recovery from './screens/Recovery';
import ChangePass from './screens/ChangePass';

const Stack = createStackNavigator();

function App(){
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: '#fff0',
      }}
    >
      <Stack.Screen 
        name='SignUp'
        component={SignUp}
        options={{headerShown: false}}
      />

      <Stack.Screen 
        name='Home'
        component={Home}
        options={{headerShown: false}}
      />

      <Stack.Screen 
        name='SignIn'
        component={SignIn}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name='User'
        component={User}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name='Recovery'
        component={Recovery}
        options={{headerShown: false}}
      />

      <Stack.Screen 
        name='ChangePass'
        component={ChangePass}
        options={{headerShown: false}}
      />
    

    </Stack.Navigator>
  );
};

export default () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <StatusBar backgroundColor={collors.dark} barStyle='light-content'/>
        <App />
      </NavigationContainer>
    </AuthProvider>
  )
}
