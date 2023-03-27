import Home from "./screens/Home";
import Login from "./screens/Login";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Text, TouchableOpacity, Image, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						options={{ headerShown: false }}
						name="Login"
						component={Login}
					/>
					<Stack.Screen
						options={{ headerShown: false }}
						name="Home"
						component={Home}
					/>
				</Stack.Navigator>
			</NavigationContainer>
			<StatusBar style="auto" />
		</SafeAreaProvider>
	);
}
