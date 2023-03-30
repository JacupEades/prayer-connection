import "react-native-gesture-handler";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Details from "./screens/Details";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./server/reducers/index";

const LoginStack = createStackNavigator();
const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const LoginStackScreen = () => (
	<LoginStack.Navigator
		screenOptions={{
			headerShown: false,
		}}>
		<LoginStack.Screen name="Login" component={Login} />
	</LoginStack.Navigator>
);

const HomeStackScreen = () => (
	<HomeStack.Navigator
		screenOptions={{
			headerShown: false,
		}}>
		<HomeStack.Screen name="Home" component={Home} />
	</HomeStack.Navigator>
);

const DetailsStackScreen = () => (
	<DetailStack.Navigator
		screenOptions={{
			headerShown: false,
		}}>
		<DetailStack.Screen name="Details" component={Details} />
	</DetailStack.Navigator>
);

export default function App() {
	const store = createStore(rootReducer, composeWithDevTools());

	return (
		<Provider store={store}>
			<SafeAreaProvider>
				<NavigationContainer>
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
						<Drawer.Screen name="Login" component={LoginStackScreen} />
						<Drawer.Screen name="Home" component={HomeStackScreen} />
						<Drawer.Screen name="Details" component={DetailsStackScreen} />
					</Drawer.Navigator>
					{/* <AppStack /> */}
					{/* <AuthStack /> */}
				</NavigationContainer>
				<StatusBar style="auto" />
			</SafeAreaProvider>
		</Provider>
	);
}

{
	/* <Stack.Navigator
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
	<Stack.Screen
		options={{
			headerShown: true,
			title: "Prayer-Connection",
		}}
		name="Home"
		component={Home}
	/>
</Stack.Navigator> */
}
function dispatch(arg0: {
	type: string;
	payload: { name: any; email: any; token: any; role: any; _id: any };
}) {
	throw new Error("Function not implemented.");
}
