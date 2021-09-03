///////////////////////////////////////////////////////////////
//   Autor: Victor Belo                                      //
//   Data: 02/09/21                                          //
//   Função: Arquivo responsável pelo login do usuário       //
//   Modificações:                                           //
///////////////////////////////////////////////////////////////

import api from "./config";

// Função responsável pelo login
function login_usuario (p_id, p_login, p_senha, p_nome, p_telefone, p_visibilidade) {
    api.post('/Usuario/Login', {
        id: p_id,
        login: p_login,
        senha: p_senha,
        nome: p_nome,
        telefone: p_telefone,
        visibilidade: p_visibilidade,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}

