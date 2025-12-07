import { Text } from "react-native";
import { SafeAreaView, } from "react-native-safe-area-context";

export default function PromisesScreen() {
  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: "600" }}>
        Promises
      </Text>
    </SafeAreaView>
  );
}
