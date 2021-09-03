///////////////////////////////////////////////////////////////
//   Autor: Victor Belo                                      //
//   Data: 02/09/21                                          //
//   Função: Arquivo responsável pela API dos usuários       //
//   Modificações:                                           //
///////////////////////////////////////////////////////////////

import api from "./config";

// Função responsável pela leitura dos usuários
function read_usuario () {
    api.get('/Usuario')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}

// Função responsável pela leitura de um usuário específico
function read_usuario_unico (p_id) {
    api.get('/Usuario', {
        params: {
          id: p_id
        }
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}

// Função responsável pela inserção de um novo usuário
function insert_usuario (p_id, p_login, p_senha, p_nome, p_telefone, p_visibilidade) {
    api.post('/Usuario', {
        id: p_id,
        login: p_login,
        senha: p_senha,
        nome: p_nome,
        telefone: p_telefone,
        visibilidade: p_visibilidade
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}