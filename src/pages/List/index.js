import React, { useEffect } from 'react';
import { FlatList } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import { allRestaurants } from '../../store/fetchActions';

import Restaurant from '../../components/Restaurant';

export default function List() {
	const { restaurants } = useSelector((state) => state.restaurant);
	const dispatch = useDispatch();

	console.log('Log no objeto LIST ', restaurants);

	useEffect(
		() => {
			dispatch(allRestaurants());
		},
		[ restaurants, dispatch ]
	);

	return (
		<FlatList
			style={{ padding: 5 }}
			showsVerticalScrollIndicator={false}
			data={restaurants}
			keyExtractor={(item) => String(item._id)}
			renderItem={({ item }) => <Restaurant item={item} />}
		/>
	);
}
