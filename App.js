import React from 'react';
import { Provider } from 'react-redux';
import FlashMessage from 'react-native-flash-message';

import store from './src/store';

import Pages from './src/pages';

export default function App() {
	return (
		<Provider store={store}>
			<Pages />
			<FlashMessage position="top" />
		</Provider>
	);
}