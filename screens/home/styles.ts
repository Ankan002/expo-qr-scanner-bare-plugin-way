import { Platform, StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	Container: {
		flex: 1,
		backgroundColor: "#fff",
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
		paddingHorizontal: 15,
	},
	QRSection : {
		flex: 1,
	},
	QRButton: {
		width: "100%",
		paddingHorizontal: 10,
		paddingVertical: 8,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#F2BE22",
		borderWidth: 2,
		borderColor: "#000",
		borderRadius: 10,
		marginVertical: 10,
	},
	ButtonText: {
		fontSize: 24,
		textAlign: "center",
		letterSpacing: 3,
	},
});
