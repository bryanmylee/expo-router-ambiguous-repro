import { Stack } from "expo-router";

export const unstable_settings = {
  a: {
    initialRouteName: "a",
  },
  b: {
    initialRouteName: "b",
  },
};

export default function SharedLayout({ segment }: { segment: string }) {
  return (
    <Stack>
      {segment === "(a)" ? (
        <Stack.Screen name="a" />
      ) : (
        <Stack.Screen name="b" />
      )}
    </Stack>
  );
}
