import { useColorScheme } from "react-native"

export default function useColorMode(darkVariant: string, lightVariant: string) {
  const colorScheme = useColorScheme();
  return colorScheme === "dark" ? darkVariant : lightVariant;
}
