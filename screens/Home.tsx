import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import HeaderNav from "../components/navigation/HeaderNav";
import GlobalStyles from "../GlobalStyles";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

export default function Home({ navigation }: any) {
	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
				navigation.replace("Login");
			})
			.catch((error: { message: any }) => alert(error.message));
	};

	return (
		<View style={GlobalStyles.container}>
			{/* <HeaderNav /> */}
			<Text>Email: {auth.currentUser?.email}</Text>
			<View style={GlobalStyles.buttonContainer}>
				<TouchableOpacity style={GlobalStyles.button} onPress={handleSignOut}>
					<Text style={GlobalStyles.buttonText}>Sign out</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
