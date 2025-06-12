import { StatusBar, StyleSheet, View } from "react-native";
import Drawer from "expo-router/drawer";
import AntDesign from '@expo/vector-icons/AntDesign';
import useColorMode from "../hooks/useColorMode";
import type { StatusBarStyle } from "react-native";

export default function Index() {

  const bgColor = useColorMode("#09090a", "#f5f5ff");
  const statusTheme = useColorMode("light-content", "dark-content") as StatusBarStyle;
  const fontColor = useColorMode("#f5f5f9", "#09090a");

  const user = "Guest";


  return (
    <View style={{ ...styles.view, backgroundColor: bgColor }}>
      <Drawer.Screen
        options={{
          headerStyle: {
            backgroundColor: bgColor
          },
          drawerLabel: 'Home',
          title: `Welcome!  ${user}`,
          headerTitleStyle: {
            fontSize: 24,
          },
          drawerIcon: () => <AntDesign name="home" size={30} color={fontColor} paddingRight={2} />
        }}
      />
      <StatusBar barStyle={statusTheme} />
      <AntDesign style={{ position: "absolute", right: 30, bottom: 40 }} name="pluscircle" size={55} color={"#00db9d"} />
    </View >
  );
}

const styles = StyleSheet.create({
  view: {
    padding: 1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
