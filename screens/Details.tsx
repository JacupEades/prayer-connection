import {
	View,
	TouchableOpacity,
	TextInput,
	KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import HeaderNav from "../components/navigation/HeaderNav";
import GlobalStyles from "../styles/GlobalStyles";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Details({ navigation }: any) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const sendTextInput = () => {
		console.log("Hey I've been pressed!");
	};

	return (
		<KeyboardAvoidingView>
			{/* <HeaderNav navigation={navigation} /> */}
			<View style={GlobalStyles.bottomContainer}>
				<View style={GlobalStyles.bottomContainerRow}>
					<TextInput
						placeholder="Email"
						value={email}
						onChangeText={(text) => setEmail(text)}
						style={GlobalStyles.bottomInput}
					/>
					<TouchableOpacity
						onPress={sendTextInput}
						style={[GlobalStyles.homeInputButton]}>
						<Ionicons style={GlobalStyles.homeInputIcon} name="menu-outline" />
					</TouchableOpacity>
				</View>
			</View>
		</KeyboardAvoidingView>
	);
}
