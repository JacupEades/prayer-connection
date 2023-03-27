import { View, Text } from "react-native";
import React from "react";
import { Header } from "@rneui/themed";
import Ionicons from "@expo/vector-icons/Ionicons";
import GlobalStyles from "../../GlobalStyles";

export default function HeaderNav() {
	return (
		<Header placement="center" barStyle="default">
			<Ionicons style={GlobalStyles.icon} name="menu-outline" />
			<Text style={GlobalStyles.h1}>Prayer Connection</Text>
			<Ionicons style={GlobalStyles.icon} name="person-circle-outline" />
		</Header>
	);
}
