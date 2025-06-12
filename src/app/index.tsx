import { StatusBar, StyleSheet, useColorScheme, View } from "react-native";
import Drawer from "expo-router/drawer";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Index() {
  const colorScheme = useColorScheme();

  const bgColor = colorScheme === "dark" ? "#09090a" : "#f5f5ff";
  const statusTheme = colorScheme === "dark" ? "light-content" : "dark-content";
  const fontColor = colorScheme === "dark" ? "#f5f5f9" : "#09090a";

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
    </View >
  );
}

const styles = StyleSheet.create({
  view: {
    padding: 1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
