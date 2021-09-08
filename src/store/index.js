import { configureStore } from '@reduxjs/toolkit';

import rootAuth from './auth';
import rootRestaurants from './restaurants';

export default configureStore({
	reducer: {
		auth: rootAuth,
		restaurant: rootRestaurants
	}
});
