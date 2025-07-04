import { useGoHome } from "@/src/hooks/useGoHome";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import Drawer from "expo-router/drawer";
import { View, Text, StyleSheet, useColorScheme } from "react-native";

export default function Settings() {
  const colorScheme = useColorScheme();
  const bgColor = colorScheme === "dark" ? "#09090a" : "#f5f5ff";
  const fontColor = colorScheme === "dark" ? "#f5f5f7" : "#09090a";
  const goHome = useGoHome();

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
          swipeEnabled: false,
          headerLeft: () => <Ionicons.Button name="arrow-back" size={30} color={fontColor} backgroundColor={bgColor} iconStyle={{ marginRight: -2, marginLeft: 10 }} onPress={goHome} underlayColor="transparent" />,
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
