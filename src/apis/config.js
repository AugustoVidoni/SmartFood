///////////////////////////////////////////////////////////////
//   Autor: Victor Belo                                      //
//   Data: 02/09/21                                          //
//   Função: Arquivo responsável pela configuração das APIs  //
//   Modificações:                                           //
///////////////////////////////////////////////////////////////

import axios from 'axios';

const instance = axios.create({
    baseURL: "https://smartfood-mm.azurewebsites.net/",
});

export default instance;