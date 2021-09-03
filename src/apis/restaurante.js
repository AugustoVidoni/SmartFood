///////////////////////////////////////////////////////////////
//   Autor: Victor Belo                                      //
//   Data: 02/09/21                                          //
//   Função: Arquivo responsável pela API dos restaurantes   //
//   Modificações:                                           //
///////////////////////////////////////////////////////////////

import api from "./config";

// Função responsável pela leitura dos restaurantes
function read_restaurante () {
    api.get('/Restaurante')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}

// Função responsável pela inserção de um novo restaurante
function insert_restaurante (p_id, p_nome, p_estado, p_cidade, p_rua, p_numero, p_avaliacao) {
    api.post('/Restaurante', {
        id: p_id,
        nome: p_nome,
        estado: p_estado,
        cidade: p_cidade,
        rua: p_rua,
        numero: p_numero,
        avaliacao: p_avaliacao
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}