import { StyleSheet, Platform } from "react-native";
import { COLORS } from "./Colors.js";

export default StyleSheet.create({
	masterContainer: { height: "100%" },
	droidSafeArea: {
		paddingTop: Platform.OS === "android" ? 25 : 0,
	},
	container: {
		flex: 1,
		backgroundColor: COLORS.offWhite,
	},
	loginContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	// headerRight: {
	// 	display: "flex",
	// 	alignItems: "center",
	// 	justifyContent: "center",
	// 	textAlign: "center",

	// 	backgroundColor: COLORS.white,
	// 	borderRadius: 10,
	// },
	// userTitle: {
	// 	fontSize: 16,
	// 	fontWeight: "bold",
	// 	color: COLORS.black,
	// 	height: 34.55,
	// 	padding: 7.5,
	// },
	h1: {
		fontSize: 24,
		color: COLORS.white,
		justifyContent: "center",
		textAlign: "center",
		height: 34.55,
	},
	// headerIcon: {
	// 	fontSize: 32,
	// 	color: COLORS.white,
	// },
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
		marginTop: 5,
	},
	buttonText: {
		color: COLORS.white,
		fontWeight: "700",
		fontSize: 16,
	},
	buttonOutline: {
		backgroundColor: COLORS.white,
		padding: 15,
		borderColor: COLORS.btnPrimary,
		borderWidth: 2,
	},
	buttonOutlineText: {
		color: COLORS.btnPrimary,
		fontWeight: "700",
		fontSize: 16,
	},
	buttonLogout: {
		backgroundColor: COLORS.danger,
	},
	// Home Screen
	bottomContainer: {
		flex: 1,
		justifyContent: "flex-end",
		marginBottom: 36,
	},
	bottomContainerRow: {},
	homeInputButton: {
		backgroundColor: COLORS.btnPrimary,
		// width: "10%",
		padding: 15,
		borderRadius: 9999,
		alignItems: "center",
		width: 50,
		height: 50,
	},
	homeInputIcon: {
		fontSize: 24,
		color: COLORS.white,
		backgroundColor: COLORS.btnPrimary,
		borderRadius: 9999,
		width: 32,
		height: 32,
		textAlign: "center",
	},
	bottomInput: {
		width: 50,
		height: 50,
	},
});
