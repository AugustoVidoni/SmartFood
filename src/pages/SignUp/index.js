import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { signUp } from '../../store/fetchActions';

import Form from '../../components/Form';
import Title from '../../components/Title';

export default function SignUp() {
  const [ login, setlogin ] = useState('');
  const [ senha, setsenha ] = useState('');
  const [ nome, setnome ] = useState('');
  const [ telefone, settelefone ] = useState('');
  const [ visibilidade, setvisibilidade ] = useState('');

  const dispatch = useDispatch();

  function submit() {
    dispatch(signUp({ login, senha, nome, telefone, visibilidade }));

    setsenha('');
    setlogin('');
    setnome('');
    settelefone('');
    setvisibilidade('');
  }

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
        <Title text="SignUp" />
        <Form
          textSubmit="SIGNUP"
          submit={submit}
          inputs={[
            {
              placeholder: 'Nome',
              onChangeText: setnome,
              value: nome,
              autoCapitalize: 'none'
            },
            {
              placeholder: 'Login',
              onChangeText: setlogin,
              value: login,
              autoCapitalize: 'none'
            },
            {
              placeholder: 'Senha',
              onChangeText: setsenha,
              secureTextEntry: true,
              value: senha
            },
            {
              placeholder: 'Telefone',
              onChangeText: settelefone,
              value: telefone,
              autoCapitalize: 'none'
            },
            {
              placeholder: 'Visibilidade',
              onChangeText: setvisibilidade,
              value: visibilidade,
              autoCapitalize: 'none'
            }
          ]}
        />
      </View>
    );
}