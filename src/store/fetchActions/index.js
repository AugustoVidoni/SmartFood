import api from '../../services/api';
import { showMessage } from 'react-native-flash-message';

import { login, logout } from '../auth';
import { addRestaurants } from '../restaurants'

export const authLogin = (usuario) => {

    return (dispatch) => {
		api
			.post('/Usuario/Login/', usuario)
            .then((res) => {
				if (res.data.visibilidade) {
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
			.post('/Usuario/', usuario)
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

export const authLogout = () => {
	return (dispatch) => {
    	dispatch(logout())
	};
};

export const allRestaurants = () => {
	console.log('Action OK')
	return (dispatch) => {
		api.get('/Restaurante')
		.then((res) => { 
			dispatch(addRestaurants(res.data));
		})
		.catch(console.log);
	};
};

