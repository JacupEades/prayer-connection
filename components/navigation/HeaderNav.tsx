import { View, Text, Button, TouchableOpacity } from "react-native";
import React from "react";
import { Header } from "@rneui/themed";
import Ionicons from "@expo/vector-icons/Ionicons";
import GlobalStyles from "../../styles/GlobalStyles";
import { auth, isLoggedIn } from "../../firebase";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { signOut } from "firebase/auth";

export default function HeaderNav({ navigation }: any) {
	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
				navigation.replace("Login");
			})
			.catch((error: { message: any }) => alert(error.message));
	};

	const headerUserBtn = () => {
		return auth.currentUser === null ? "Login" : "LogOut";
	};

	return (
		<Header
		// leftComponent={
		// 	<View>
		// 		<TouchableOpacity>
		// 			<Ionicons style={GlobalStyles.headerIcon} name="menu-outline" />
		// 		</TouchableOpacity>
		// 	</View>
		// }
		// centerComponent={
		// 	<TouchableOpacity onPress={() => ""}>
		// 		<Text style={GlobalStyles.h1}>Prayer-Connection</Text>
		// 	</TouchableOpacity>
		// }
		// rightComponent={
		// 	<View>
		// 		<TouchableOpacity
		// 			style={GlobalStyles.headerRight}
		// 			onPress={handleSignOut}>
		// 			<Text style={GlobalStyles.userTitle}>{headerUserBtn()}</Text>
		// 		</TouchableOpacity>
		// 	</View>
		// }
		/>
		// <Header placement="center" barStyle="default">
		// 	<Ionicons style={GlobalStyles.icon} name="menu-outline" />
		// 	<Text style={GlobalStyles.h1}>Prayer Connection</Text>
		// 	<Ionicons style={GlobalStyles.icon} name="person-circle-outline" />
		// 	<Button title={headerUserBtn() || ""} color="#000" />
		// </Header>
	);
}
