import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { authLogout } from '../../store/fetchActions';

export default function SignUp() {
  const dispatch = useDispatch();  
  
  function logout() {
      dispatch(authLogout());
    }

    return (
        <View>
          <Text>sign-up</Text>
          <Button onPress={logout} 
            title="LOGOUT"
            color="#841584"
            accessibilityLabel="Learn more about this purple button" />
        </View>
      );
}