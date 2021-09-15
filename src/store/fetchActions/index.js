import api from '../../services/api';
import { showMessage } from 'react-native-flash-message';

import { login, logout, isadmin } from '../auth';
import { addRestaurants } from '../restaurants'

export const authLogin = (usuario) => {

    return (dispatch) => {
		api
			.post('/Usuario/Login/', usuario)
            .then((res) => {
				if (res.data.visibilidade) {
					if(res.data.login === 'admin')
						dispatch(isadmin());
					dispatch(login());
					showMessage({
						message: 'Bem-vindo',
						description: 'Você pode adicionar consultar nossos resturantes!',
						type: 'success'
					});
				}
			})
			.catch((error) => {
				const { message } = error.response.data;
				showMessage({
					message: 'OPS!',
					description: message,
					type: 'danger'
				});
			});
	};
};

export const signUp = (usuario) => {

    return (dispatch) => {
		api
			.post('/Usuario/Criar', usuario)
            .then((res) => {
				if (res.data.login) {
					dispatch(login());
					showMessage({
						message: 'Wow',
						description: 'Usuario criado com sucesso',
						type: 'success'
					});
				}
			})
			.catch((error) => {
				const { message } = error.response.data;
				showMessage({
					message: 'OPS!',
					description: message,
					type: 'danger'
				});
			});
	};
};

export const criarRestaurante = (restaurante) => {

    return () => {
		api
			.post('/Restaurante/Criar', restaurante)
            .then((res) => {
				if (res.data.id) {
					showMessage({
						message: 'Wow',
						description: 'Restaurante criado com sucesso',
						type: 'success'
					});
				}
			})
			.catch((error) => {
				const { message } = error.response.data;
				showMessage({
					message: 'OPS!',
					description: message,
					type: 'danger'
				});
			});
	};
};

export const authLogout = () => {
	return (dispatch) => {
    	dispatch(logout())
	};
};

export const allRestaurants = () => {
	
	return (dispatch) => {
		api.get('/Restaurante/Listar')
		.then((res) => { 
			dispatch(addRestaurants(res.data));
		})
		.catch(console.log);
	};
};

