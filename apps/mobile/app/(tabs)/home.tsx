import { Text } from "react-native";
import { SafeAreaView, } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: "700" }}>
        Out of Loop
      </Text>
      <Text style={{ marginTop: 8 }}>
        Reduce noise. See clearly.
      </Text>
    </SafeAreaView>
  );
}
