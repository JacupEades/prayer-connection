import { StyleSheet, Platform } from "react-native";
import { COLORS } from "./Colors.js";

export default StyleSheet.create({
	masterContainer: {},
	droidSafeArea: {
		flex: 1,
		paddingTop: Platform.OS === "android" ? 25 : 0,
	},
	container: {
		flex: 1,
		// can not do linear gradients
		backgroundColor: COLORS.offWhite,
		alignItems: "center",
		justifyContent: "center",
	},
	h1: {
		flex: 1,
		fontSize: 24,
		color: COLORS.white,
		justifyContent: "center",
		textAlign: "center",
	},
	icon: {
		fontSize: 32,
		color: COLORS.white,
	},
	inputContainer: {
		width: "80%",
	},
	input: {
		backgroundColor: COLORS.white,
		paddingHorizontal: 15,
		paddingVertical: 10,
		borderRadius: 10,
		marginTop: 5,
	},
	buttonContainer: {
		width: "60%",
		justifyContent: "center",
		alignItems: "center",
		marginTop: 40,
	},
	button: {
		backgroundColor: COLORS.btnPrimary,
		width: "100%",
		padding: 15,
		borderRadius: 10,
		alignItems: "center",
	},
	buttonText: {
		color: COLORS.white,
		fontWeight: "700",
		fontSize: 16,
	},
	buttonOutline: {
		backgroundColor: COLORS.white,
		marginTop: 5,
		padding: 15,
		borderColor: COLORS.btnPrimary,
		borderWidth: 2,
	},
	buttonOutlineText: {
		color: COLORS.btnPrimary,
		fontWeight: "700",
		fontSize: 16,
	},
});
