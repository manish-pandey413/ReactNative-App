import FontAwesome from "@expo/vector-icons/FontAwesome";
import Drawer from "expo-router/drawer";
import { View, Text, StyleSheet, useColorScheme } from "react-native";

export default function Settings() {
  const colorScheme = useColorScheme();
  const bgColor = colorScheme === "dark" ? "#09090a" : "#f5f5ff";
  const fontColor = colorScheme === "dark" ? "#f5f5f7" : "#09090a";
  return (
    <View style={{ ...styles.view, backgroundColor: bgColor }}>
      <Drawer.Screen
        options={{
          headerStyle: {
            backgroundColor: bgColor
          },
          drawerLabel: 'Bookmarks',
          title: 'Bookmarks',
          drawerIcon: () => <FontAwesome name="bookmark-o" size={30} color={fontColor} paddingLeft={5} paddingRight={5} />,
        }}
      />
      <Text style={{ color: fontColor }}>Bookmarks Page</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
