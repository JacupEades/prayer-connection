import {
	View,
	TouchableOpacity,
	TextInput,
	KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import GlobalStyles from "../styles/GlobalStyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet } from "react-native";
import { COLORS } from "../styles/Colors";
import { useDispatch } from "react-redux/es/exports";

export default function Home(this: any) {
	const [prayer, setPrayer] = useState("");

	const dispatch = useDispatch();

	const sendTextInput = () => {
		console.log(prayer);
		setPrayer("");
	};

	return (
		<View style={[GlobalStyles.container, styles.containerBottom]}>
			<View style={GlobalStyles.container}></View>
			<KeyboardAvoidingView
				style={{
					flex: 1,
					flexDirection: "row",
					position: "absolute",
					bottom: 0,
					width: "100%",
				}}
				behavior="padding">
				<TextInput
					style={[styles.input]}
					onChangeText={(text) => setPrayer(text)}
					value={prayer}
					placeholder={"Put your prayers here..."}
				/>
				<TouchableOpacity style={styles.bottomBtn} onPress={sendTextInput}>
					<Ionicons style={styles.homeInputIcon} name="menu-outline" />
				</TouchableOpacity>
				{/* <Button onPress={this.send} title="SEND" /> */}
			</KeyboardAvoidingView>
		</View>
	);
}

const styles = StyleSheet.create({
	containerBottom: {
		flex: 1,
		margin: 5,
		marginBottom: 24,
		justifyContent: "center",
		alignItems: "center",
	},
	input: {
		flexGrow: 4,
		backgroundColor: "red",
		padding: 5,
		height: 40,
		borderRadius: 10,
		color: "#ffffff",
	},
	bottomBtn: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		width: 32,
		height: 32,
	},
	homeInputIcon: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		fontSize: 24,
		color: COLORS.white,
		backgroundColor: COLORS.btnPrimary,
		borderRadius: 9999,
		width: 32,
		height: 32,
		textAlign: "center",
	},
});
