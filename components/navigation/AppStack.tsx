import React from "react";
import Home from "../../screens/Home";
import Login from "../../screens/Login";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

export default function AppStack() {
	return (
		<Drawer.Navigator
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
			<Drawer.Screen name="Login" component={Login} />
			<Drawer.Screen name="Home" component={Home} />
		</Drawer.Navigator>
	);
}
