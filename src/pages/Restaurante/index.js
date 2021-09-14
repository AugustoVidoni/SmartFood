import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { criarRestaurante } from '../../store/fetchActions';

import Form from '../../components/Form';
import Title from '../../components/Title';

export default function Restaurante() {
  const [ nome, setnome ] = useState('');
  const [ estado, setestado ] = useState('');
  const [ cidade, setcidade ] = useState('');
  const [ rua, setrua ] = useState('');
  const [ numero, setnumero ] = useState('');
  const [ avaliacao, setavaliacao ] = useState('');
  const [ url, seturl ] = useState('');

  const dispatch = useDispatch();

  function submit() {
    dispatch(criarRestaurante({ nome, estado, cidade, rua, numero, avaliacao, url }));

    setnome('');
    setestado('');
    setcidade('');
    setrua('');
    setnumero('');
    setavaliacao('');
    seturl('');
  }

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
        <Title text="Restaurante" />
        <Form
          textSubmit="Restaurante"
          submit={submit}
          inputs={[
            {
              placeholder: 'Nome',
              onChangeText: setnome,
              value: nome,
              autoCapitalize: 'none'
            },
            {
              placeholder: 'Estado',
              onChangeText: setestado,
              value: estado,
              autoCapitalize: 'none'
            },
            {
              placeholder: 'Cidade',
              onChangeText: setcidade,
              secureTextEntry: true,
              value: cidade
            },
            {
              placeholder: 'Rua',
              onChangeText: setrua,
              value: rua,
              autoCapitalize: 'none'
            },
            {
              placeholder: 'Numero',
              onChangeText: setnumero,
              value: numero,
              autoCapitalize: 'none'
            },
            {
                placeholder: 'Avaliacao',
                onChangeText: setavaliacao,
                value: avaliacao,
                autoCapitalize: 'none'
            },
            {
                placeholder: 'URL',
                onChangeText: seturl,
                value: url,
                autoCapitalize: 'none'
            },
          ]}
        />
      </View>
    );
}