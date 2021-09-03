import React, { useState, useEffect, Component } from 'react';
import PropTypes from 'prop-types';
import { View, 
        Text,
        TouchableOpacity,
        Vibration,
        Keyboard,
        Pressable,
        TextInput,
        Image,
        KeyboardAvoidingView,
        Animated,
        } from 'react-native';
import styles from './style';
import api from '../../services/api';




export default function Login({navigation}) {
  const [logo] = useState(new Animated.ValueXY({x: 180, y: 180}))

  useEffect(()=> {
    keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow)
    keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide)
  })

  function keyboardDidShow(){
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 0,
        duration: 100,    
        useNativeDriver: false    
      }), 
      Animated.timing(logo.y, {
        toValue: 0,
        duration: 100,
        useNativeDriver: false
      }), 
    ]).start();
  }

  function keyboardDidHide(){
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 180,
        duration: 100,
        useNativeDriver: false
      }), 
      Animated.timing(logo.y, {
        toValue: 180,
        duration: 100,
        useNativeDriver: false
      }), 
    ]).start();  
  }

    return (
      <KeyboardAvoidingView style={styles.signinContext}>
        <View style={styles.containerImg}>
          <Animated.Image 
          style={{
            width: logo.x,
            height: logo.y,
          }}
          source={require("../../assets/image/logo.jpg")} />
        </View>
        <View style={styles.containerInput}>          
          <Text style={styles.textLabel}>Email</Text>
          <TextInput
          style={styles.input} 
          placeholder="exemplo@email.com"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"

          ></TextInput>

          <Text style={styles.textLabel}>Senha</Text>
          <TextInput
          style={styles.input} 
          placeholder="Digite sua senha"
          secureTextEntry={true}

          autoCapitalize="none"
          autoCorrect={false}></TextInput>

          <TouchableOpacity style={styles.btnSubmit}>
            <Text style={styles.btnSubmitText}>Entrar</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.btnSignup}>
            <Text 
            style={styles.btnSignup}
            onPress={()=> navigation.navigate('SignUp')}>Crie uma conta!</Text>
          </TouchableOpacity>
          
        </View>
      </KeyboardAvoidingView>
      );
}

