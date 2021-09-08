import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = [];

export const addRestaurants = createAction('ADD_RESTAURANTS');

export default createReducer(INITIAL_STATE, {
	[addRestaurants.type]: (state, action) => ({ ...state, restaurants: action.payload }),
});
