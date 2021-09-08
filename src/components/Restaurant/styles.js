import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		width: '100%',
		marginBottom: 10,
		height: 270,
		borderColor: '#ccc',
		borderWidth: 1,
		borderStyle: 'solid',
		borderRadius: 5,
		backgroundColor: '#fff',
		justifyContent: 'space-between'
	},
	RestaurantTextName: { fontWeight: 'bold', fontSize: 25, margin: 10 },
	RestaurantBtn: {
		backgroundColor: '#007ac1',
		width: 50,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 5,
		margin: 5,
		borderRadius: 5
	},
    RestaurantImage: {
        width: '30%',
        height: 200
    }
});
