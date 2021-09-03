///////////////////////////////////////////////////////////////
//   Autor: Victor Belo                                      //
//   Data: 02/09/21                                          //
//   Função: Arquivo responsável pela API dos pedidos        //
//   Modificações:                                           //
///////////////////////////////////////////////////////////////

import api from "./config";

// Função responsável pela leitura dos pedidos
function read_pedido () {
    api.get('/Pedido')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}