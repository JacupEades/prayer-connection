import React from "react";
import Home from "../../screens/Home";
import Login from "../../screens/Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: true,
				headerTitleAlign: "center",
				headerTintColor: "#fff",
				headerTitleStyle: {
					fontWeight: "bold",
				},
				headerStyle: {
					backgroundColor: "#2189DC",
				},
			}}>
			<Stack.Screen name="Login" component={Login} />
			{/* <Stack.Screen
				options={{
					title: "Prayer-Connection",
				}}
				name="Home"
				component={Home}
			/> */}
		</Stack.Navigator>
	);
}
