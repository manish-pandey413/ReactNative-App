import { StatusBar, StyleSheet, useWindowDimensions, View } from "react-native";
import Drawer from "expo-router/drawer";
import AntDesign from '@expo/vector-icons/AntDesign';
import useColorMode from "../hooks/useColorMode";
import type { StatusBarStyle } from "react-native";
import AddItemModal from "../components/addItemModal";
import { useState } from "react";

export default function Index() {

  const bgColor = useColorMode("#09090a", "#f5f5ff");
  const statusTheme = useColorMode("light-content", "dark-content") as StatusBarStyle;
  const fontColor = useColorMode("#f5f5f9", "#09090a");

  const user = "Guest";
  const [modalVisible, setModalVisible] = useState(false);

  const [number, onChangeNumber] = useState(0);

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
          drawerIcon: () => <AntDesign name="home" size={30} color={fontColor} />
        }}
      />
      <StatusBar barStyle={statusTheme} />

      <AddItemModal modalVisible={modalVisible} setModalVisible={setModalVisible} onChangeNumber={onChangeNumber} number={number} />

      <View style={styles.addIcon}>
        <AntDesign.Button name="pluscircleo" size={55} color={"#00db9d"} backgroundColor={"transparent"} underlayColor={"transparent"}
          onPress={() => {
            setModalVisible(true)
          }}>
        </AntDesign.Button>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  view: {
    padding: 1,
    flex: 1,
  },
  addIcon: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: "flex-end",
    paddingBottom: 40,
    paddingRight: 10,
  }
});
