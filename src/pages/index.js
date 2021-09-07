import React from 'react';

import login from './login';
import SignUp from './SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import { useSelector, useDispatch } from 'react-redux';

const Stack = createNativeStackNavigator();

export default function App() {

  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <React.Fragment>
          {!isAuthenticated && <Stack.Screen name="Login" component={login} />}
        </React.Fragment>
        <React.Fragment>
          {isAuthenticated && <Stack.Screen name="SignUp" component={SignUp} />}
        </React.Fragment>
      </Stack.Navigator>
    </NavigationContainer>
  );
}