import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
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
          drawerLabel: 'Account',
          title: 'Account',
          drawerIcon: () => <MaterialCommunityIcons name="account-circle-outline" size={31} color={fontColor} />
        }}
      />
      <Text style={{ color: fontColor }}>Account Page</Text>
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
