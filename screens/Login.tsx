import {
	View,
	Text,
	KeyboardAvoidingView,
	TextInput,
	TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import HeaderNav from "../components/navigation/HeaderNav";
import GlobalStyles from "../GlobalStyles";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";

export default function Login({ navigation }: any) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				navigation.replace("Home");
			}
		});
		return unsubscribe;
	}, []);

	const handleSignUp = () => {
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredentials: { user: any }) => {
				const user = userCredentials.user;
				console.log(user.email);
			})
			.catch((error: { message: any }) => alert(error.message));
		console.log("register attempt");
	};

	const handleSignIn = () => {
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredentials: { user: any }) => {
				const user = userCredentials.user;
				console.log("logged in as", user.email);
			})
			.catch((error: { message: any }) => alert(error.message));
	};

	return (
		<KeyboardAvoidingView style={GlobalStyles.container} behavior="padding">
			{/* <HeaderNav /> */}
			<View style={GlobalStyles.inputContainer}>
				<TextInput
					placeholder="Email"
					value={email}
					onChangeText={(text) => setEmail(text)}
					style={GlobalStyles.input}
				/>
				<TextInput
					placeholder="Password"
					value={password}
					onChangeText={(text) => setPassword(text)}
					style={GlobalStyles.input}
					secureTextEntry
				/>
			</View>
			<View style={GlobalStyles.buttonContainer}>
				<TouchableOpacity onPress={handleSignIn} style={GlobalStyles.button}>
					<Text style={GlobalStyles.buttonText}>Login</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={handleSignUp}
					style={[GlobalStyles.button, GlobalStyles.buttonOutline]}>
					<Text style={GlobalStyles.buttonOutlineText}>Register</Text>
				</TouchableOpacity>
			</View>
		</KeyboardAvoidingView>
	);
}
