import React from 'react';
import { FlatList } from 'react-native';

import { useSelector } from 'react-redux';

import Restaurant from '../../components/Restaurant';

export default function List() {
	const { restaurants } = useSelector((state) => state.restaurant);
	
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
