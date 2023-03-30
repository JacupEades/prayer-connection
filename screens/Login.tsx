import {
	View,
	Text,
	KeyboardAvoidingView,
	TextInput,
	TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import HeaderNav from "../components/navigation/HeaderNav";
import GlobalStyles from "../styles/GlobalStyles";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
} from "firebase/auth";
import { auth } from "../firebase";
import { StackActions } from "@react-navigation/native";

export default function Login({ navigation }: any) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			!user ? null : navigation.navigate("Home");
		});
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

	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
				navigation.replace("Login");
			})
			.catch((error: { message: any }) => alert(error.message));
	};

	return (
		<KeyboardAvoidingView
			style={[GlobalStyles.container, GlobalStyles.loginContainer]}
			behavior="padding">
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
				<TouchableOpacity
					onPress={handleSignOut}
					style={[GlobalStyles.button, GlobalStyles.buttonLogout]}>
					<Text style={GlobalStyles.buttonText}>Logout</Text>
				</TouchableOpacity>
			</View>
		</KeyboardAvoidingView>
	);
}
