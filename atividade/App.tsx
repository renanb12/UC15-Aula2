import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Feed from "./src/screens/Feed";

export default function App() {
  return (
    <View style={styles.container}>
      <Feed />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
