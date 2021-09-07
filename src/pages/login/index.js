import React, { useState } from 'react';
import { View } from 'react-native';

import Form from '../../components/Form';
import Title from '../../components/Title';

import { useDispatch } from 'react-redux';
import { authLogin } from '../../store/fetchActions';

export default function Login({}) {
  
  const [ login, setlogin ] = useState('');
	const [ senha, setsenha ] = useState('');
	const dispatch = useDispatch();

	function submit() {
		dispatch(authLogin({ login, senha }));

		setsenha('');
		setlogin('');
	}

  return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
			<Title text="Login" />
			<Form
				textSubmit="LOGIN"
				submit={submit}
				inputs={[
					{
						placeholder: 'Login',
						onChangeText: setlogin,
						value: login,
						autoCapitalize: 'none'
					},
					{
						placeholder: 'Senha...',
						onChangeText: setsenha,
						secureTextEntry: true,
						value: senha
					}
				]}
			/>
		</View>
	);
}

//   <KeyboardAvoidingView style={styles.signinContext}>
//     <View style={styles.containerImg}>
//       <Animated.Image 
//       style={{
//         width: logo.x,
//         height: logo.y,
//       }}
//       source={require("../../assets/image/logo.jpg")} />
//     </View>
//     <View style={styles.containerInput}>          
//       <TouchableOpacity style={styles.btnSignup}>
//         <Text 
//         style={styles.btnSignup}
//         onPress={()=> navigation.navigate('SignUp')}>Crie uma conta!</Text>
//       </TouchableOpacity>
      
//     </View>
//   </KeyboardAvoidingView>
// );
