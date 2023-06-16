import { Alert, Pressable, SafeAreaView, Text, View } from "react-native";
import { styles } from "./styles";
import { StatusBar } from "expo-status-bar";
import {
	getPermissionsAsync,
	requestPermissionsAsync,
	BarCodeScanner,
} from "expo-barcode-scanner";
import { useState } from "react";

const HomeScreen = () => {
	const [scanning, setScanning] = useState<boolean>(false);

	const onScanQRClick = async () => {
		let isPermissionsGranted = await getPermissionsAsync();

		if (isPermissionsGranted.status !== "granted") {
			isPermissionsGranted = await requestPermissionsAsync();
		}

		if (isPermissionsGranted.status !== "granted") {
			Alert.alert("Permission Issue", "Permissions not granted!!");
		}

		setScanning(true);
	};

	return (
		<SafeAreaView style={styles.Container}>
			<View style={styles.QRSection}>
				{scanning && (
					<BarCodeScanner
						onBarCodeScanned={(result) => {
							const { data, type } = result;
							setScanning(false);
							console.log(type);
							Alert.alert("Info Received", data);
						}}
						style={{
							width: "100%",
							flex: 1,
							borderWidth: 2,
							borderColor: "#000",
							borderRadius: 10,
						}}
					/>
				)}
			</View>
			<Pressable style={styles.QRButton} onPress={onScanQRClick}>
				<Text style={styles.ButtonText}>Start QR Scan</Text>
			</Pressable>
			<StatusBar style="dark" />
		</SafeAreaView>
	);
};

export default HomeScreen;
