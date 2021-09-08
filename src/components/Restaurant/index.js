import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import styles from './styles';

export default function Restaurant({ item }) {
	return (
		<View style={styles.container}>
			<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
				<Text style={styles.RestaurantTextName}>{item.nome}</Text>
				<TouchableOpacity style={styles.RestaurantBtn} >
					<MaterialIcons name="shop" color="#fff" size={24} />
				</TouchableOpacity>
			</View>
			<Image
				style={styles.RestaurantImage}
				source={{
					uri: item.url
				}}
			/>
		</View>
	);
}
