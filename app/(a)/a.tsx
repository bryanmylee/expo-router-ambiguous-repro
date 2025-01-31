import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function A() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>This should default to group (a)</Text>
      <Link href="/(a)/a/c">Go to /(a)/a/c</Link>
      <Link href="/(a)/b/d">Go to /(a)/b/d</Link>
    </View>
  );
}
