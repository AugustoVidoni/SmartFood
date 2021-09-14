import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = {
	isAuthenticated: false,
	isAdmin: false
};

export const login = createAction('LOGIN');
export const logout = createAction('LOGOUT');
export const isadmin = createAction('ISADMIN');

export default createReducer(INITIAL_STATE, {
	[login.type]: (state, action) => ({ ...state, isAuthenticated: true }),
	[logout.type]: (state, action) => ({ ...state, isAuthenticated: false, isAdmin: false }),
	[isadmin.type]: (state, action) => ({ ...state, isAdmin: true }),
});
