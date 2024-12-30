import {
  PermissionsAndroid,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import WebComponent from "./components/WebComponent/WebComponent";
import { useEffect } from "react";

export default function App() {
  async function requestCameraPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Cool Photo App Camera Permission",
          message:
            "Cool Photo App needs access to your camera " +
            "so you can take awesome pictures.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the camera");
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  }

  async function requestMicrophonePermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        {
          title: "Cool Audio App Microphone Permission",
          message:
            "Cool Audio App needs access to your microphone " +
            "so you can record amazing sounds.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the microphone");
      } else {
        console.log("Microphone permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  }

  useEffect(() => {
    requestCameraPermission();
    requestMicrophonePermission();
  }, []);

  return (
    <SafeAreaView style={styles.rootContainer}>
      <View style={styles.webViewContainer}>
        <WebComponent />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 20,
  },
  webViewContainer: {
    flex: 1,
  },
  buttonContainer: {
    height: 60,
  },
  button: {
    flex: 1,
    height: "100%",
    borderRadius: 99,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  btnInnerText: {
    textAlign: "center",
  },
});
