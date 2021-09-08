import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import { useSelector, useDispatch } from 'react-redux';

import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { logout } from '../store/auth';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import List from './List';
import SignIn from './SignIn';
import SignUp from './SignUp';

const tabHomeNavigation = () => {
	const { isAuthenticated } = useSelector((state) => state.auth);

	return (
		<Tab.Navigator
			tabBarOptions={{ style: { paddingVertical: 3, backgroundColor: '#03a9f4' }, inactiveTintColor: '#bbb', activeTintColor: '#fff', labelStyle: { fontSize: 14 } }}
		>
			{isAuthenticated && <Tab.Screen
				options={{
					tabBarIcon: ({ color }) => <MaterialIcons name="directions-car" size={24} color={color} />
				}}
				name="Restaurants"
				component={List}
			/>}
			{!isAuthenticated && <Tab.Screen
				options={{
					tabBarIcon: ({ color }) => <MaterialIcons name="account-circle" size={24} color={color} />
				}}
				name="Login"
				component={SignIn}
			/>}
			{!isAuthenticated && <Tab.Screen
				options={{
					tabBarIcon: ({ color }) => <MaterialIcons name="account-circle" size={24} color={color} />
				}}
				name="SignUp"
				component={SignUp}
				style = { {width: '10%' }}
			/>}
		</Tab.Navigator>
	);
};

export default function App() {
	const { isAuthenticated } = useSelector((state) => state.auth);
	const dispath = useDispatch();

	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerStyle: { backgroundColor: '#03a9f4' },
					headerTitle: <Text style={{ fontSize: 23, color: '#fff', fontWeight: 'bold' }}>Shopping Car</Text>,
					headerRight: () => (
						<React.Fragment>
							{isAuthenticated && (
								<TouchableOpacity onPress={() => dispath(logout())}>
									<MaterialIcons
										size={25}
										color="#fff"
										name="exit-to-app"
										style={{ marginRight: 10 }}
									/>
								</TouchableOpacity>
							)}
						</React.Fragment>
					)
				}}
			>
				<Stack.Screen name="Home" component={tabHomeNavigation} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}