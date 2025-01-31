import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function B() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>This should default to group (b)</Text>
      <Link href="/(b)/b/d">Go to /(b)/a/c</Link>
      <Link href="/(b)/b/d">Go to /(b)/b/d</Link>
    </View>
  );
}
