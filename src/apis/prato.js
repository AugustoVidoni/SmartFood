///////////////////////////////////////////////////////////////
//   Autor: Victor Belo                                      //
//   Data: 02/09/21                                          //
//   Função: Arquivo responsável pela API dos pratos         //
//   Modificações:                                           //
///////////////////////////////////////////////////////////////

import api from "./config";

// Função responsável pela leitura dos pratos
function read_prato () {
    api.get('/Prato')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}

// Função responsável pela inserção de um novo prato
function insert_prato (p_id, p_nome, p_descricao, p_avaliacao, p_quantidadePedidos, p_pedidos) {
    api.post('/Prato', {
        id: p_id,
        nome: p_nome,
        descricao: p_descricao,
        avaliacao: p_avaliacao,
        quantidadePedidos: p_quantidadePedidos,
        pedidos: p_pedidos,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}