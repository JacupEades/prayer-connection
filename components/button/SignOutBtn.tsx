import React from "react";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { Text, TouchableOpacity } from "react-native";
import GlobalStyles from "../../styles/GlobalStyles";

export default function SignOutBtn({ navigation }: any) {
	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
				navigation.replace("Login");
			})
			.catch((error: { message: any }) => alert(error.message));
	};
	return (
		<TouchableOpacity style={GlobalStyles.button} onPress={handleSignOut}>
			<Text style={GlobalStyles.buttonText}>Sign out</Text>
		</TouchableOpacity>
	);
}
