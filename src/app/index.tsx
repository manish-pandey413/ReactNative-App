import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Drawer from "expo-router/drawer";
import AntDesign from '@expo/vector-icons/AntDesign';
import useColorMode from "../hooks/useColorMode";
import type { StatusBarStyle } from "react-native";
import AddItemModal from "../components/addItemModal";
import { useState } from "react";

const DATA = [
  {
    title: 'Jan',
    data: [
      { itemName: 'Water', price: 20 },
      { itemName: 'Coke', price: 80 },
      { itemName: 'Water', price: 20 },
      { itemName: 'Coke', price: 80 },
      { itemName: 'Beer', price: 250 },
      { itemName: 'Water', price: 20 },
      { itemName: 'Beer', price: 250 },
      { itemName: 'Beer', price: 250 },
      { itemName: 'Beer', price: 250 },
      { itemName: 'Beer', price: 250 },
    ],
  },

  {
    title: 'Feb',
    data: [
      { itemName: 'Water', price: 20 },
      { itemName: 'Coke', price: 80 },
      { itemName: 'Beer', price: 250 }
    ],
  },

  {
    title: 'Mar',
    data: [
      { itemName: 'Water', price: 20 },
      { itemName: 'Coke', price: 80 },
      { itemName: 'Beer', price: 250 }
    ],
  },

  {
    title: 'Apr',
    data: [
      { itemName: 'Water', price: 20 },
      { itemName: 'Coke', price: 80 },
      { itemName: 'Beer', price: 250 }
    ],
  },


  {
    title: 'May',
    data: [
      { itemName: 'Water', price: 20 },
      { itemName: 'Coke', price: 80 },
      { itemName: 'Beer', price: 250 }
    ],
  },
];


export default function Home() {

  const bgColor: string = useColorMode("#09090aef", "#FFFFFF0D");
  const cardColor: string = useColorMode("#111", "#fff");
  const statusTheme: StatusBarStyle = useColorMode("light-content", "dark-content") as StatusBarStyle;
  const fontColor: string = useColorMode("#f5f5f9", "#09090a");

  const [modalVisible, setModalVisible] = useState(false);
  const [number, onChangeNumber] = useState(0);


  return (
    <View style={[styles.mainView, { backgroundColor: bgColor }]}>
      <Drawer.Screen
        options={{
          headerStyle: {
            backgroundColor: bgColor,
          },
          headerShadowVisible: false,
          drawerLabel: 'Home',
          title: 'UNotes',
          headerTitleStyle: {
            fontSize: 28,
          },
          drawerIcon: () => <AntDesign name="home" size={30} color={fontColor} />,
          headerRight: () => <TouchableOpacity
            style={styles.addBtn}
            onPress={() => { setModalVisible(true) }}
          >

            <Text style={{ fontSize: 19, color: "#481fc4" }}>Add Amount</Text>

          </TouchableOpacity>
        }}
      />
      <StatusBar barStyle={statusTheme} />

      <AddItemModal modalVisible={modalVisible} setModalVisible={setModalVisible} onChangeNumber={onChangeNumber} number={number} />

      <ScrollView style={{ padding: 18 }}>
        {DATA.map((section) => (
          <View
            key={section.title}
            style={[styles.sectionContainer, { backgroundColor: cardColor },]}
          >
            <Text style={[styles.sectionHeader, { color: fontColor, backgroundColor: cardColor }]}>{section.title}</Text>
            <View style={{ backgroundColor: 'gray', height: 0.5 }} />

            {section.data.map((item, index) => (
              <TouchableOpacity key={index} style={styles.itemRow}>
                <Text style={styles.itemText}>{item.itemName}</Text>
                <Text style={styles.priceText}>₹ {item.price} /-</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>

    </View >
  );
}

const styles = StyleSheet.create({
  mainView: {
    padding: 1
    , flex: 1
  },
  addBtn: {
    backgroundColor: "#5633bf30"
    , marginRight: 10
    , paddingHorizontal: 24
    , paddingVertical: 7
    , borderRadius: 20
  },

  sectionContainer: {
    shadowColor: '#000',
    elevation: 8,
    marginVertical: 15,
    marginHorizontal: 5,
    borderRadius: 10,
    overflow: 'hidden',
  },
  sectionHeader: {
    fontSize: 30,
    padding: 15,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 18,
    paddingHorizontal: 32,
    margin: 5
  },
  itemText: {
    fontSize: 18,
    color: '#fff',
  },
  priceText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
});
