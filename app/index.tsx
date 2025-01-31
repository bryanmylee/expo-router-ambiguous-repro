import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href="/a">
        <Text>Go to /a</Text>
      </Link>
      <Link href="/a/c">
        <Text>Go to /a/c</Text>
      </Link>
      <Link href="/b">
        <Text>Go to /b</Text>
      </Link>
      <Link href="/b/d">
        <Text>Go to /b/d</Text>
      </Link>
    </View>
  );
}
