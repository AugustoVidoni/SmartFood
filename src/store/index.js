import { configureStore } from '@reduxjs/toolkit';

import rootAuth from './auth';

export default configureStore({
	reducer: {
		auth: rootAuth
	}
});
