import { SectionList, StatusBar, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from "react-native";
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
      {
        itemName: 'Water',
        price: 20
      },

      {
        itemName: 'Coke',
        price: 80
      },

      {
        itemName: 'Beer',
        price: 250
      }

    ],
  },
  {
    title: 'Feb',
    data: [
      {
        itemName: 'Water',
        price: 20
      },

      {
        itemName: 'Coke',
        price: 80
      },

      {
        itemName: 'Beer',
        price: 250
      }

    ],
  },
  {
    title: 'Mar',
    data: [
      {
        itemName: 'Water',
        price: 20
      },

      {
        itemName: 'Coke',
        price: 80
      },

      {
        itemName: 'Beer',
        price: 250
      }

    ],
  },
  {
    title: 'Apr',
    data: [
      {
        itemName: 'Water',
        price: 20
      },

      {
        itemName: 'Coke',
        price: 80
      },

      {
        itemName: 'Beer',
        price: 250
      }

    ],
  },
];


export default function Index() {

  const bgColor: string = useColorMode("#09090a", "#f5f5ff");
  const statusTheme: StatusBarStyle = useColorMode("light-content", "dark-content") as StatusBarStyle;
  const fontColor = useColorMode("#f5f5f9", "#09090a");

  const [modalVisible, setModalVisible] = useState(false);

  const [number, onChangeNumber] = useState(0);

  const dimensions = useWindowDimensions();


  return (
    <View style={{ ...styles.view, backgroundColor: bgColor }}>
      <Drawer.Screen
        options={{
          headerStyle: {
            backgroundColor: bgColor
          },
          drawerLabel: 'Home',
          title: `Welcome!  Guest`,
          headerTitleStyle: {
            fontSize: 24,
          },
          drawerIcon: () => <AntDesign name="home" size={30} color={fontColor} />
        }}
      />
      <StatusBar barStyle={statusTheme} />

      <AddItemModal modalVisible={modalVisible} setModalVisible={setModalVisible} onChangeNumber={onChangeNumber} number={number} />

      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item.itemName + index}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item}>
            <Text style={styles.title}>{item.itemName}</Text>
            <Text style={styles.title}>{item.price}</Text>
          </TouchableOpacity>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />

      <View style={{ position: 'absolute', left: dimensions.width - 100, top: dimensions.height - 215 }}>
        <AntDesign.Button name="pluscircleo" size={55} color={"#00db9d"} backgroundColor={"transparent"} underlayColor={"transparent"}
          onPress={() => {
            setModalVisible(true)
          }}>
        </AntDesign.Button>
      </View >
    </View >
  );
}

const styles = StyleSheet.create({
  view: {
    padding: 1
    , flex: 1
  },
  item: {
    flex: 1
    , flexDirection: 'row'
    , padding: 10
    , margin: 9
    , borderRadius: 12
  },
  header: {
    fontSize: 28
    , padding: 5
    , paddingLeft: 15
    , backgroundColor: '#282828'
    , marginTop: 12
    , margin: 2
    , color: '#f5f5ff'
  },
  title: {
    fontSize: 21
    , flex: 1
    , flexDirection: 'row'
    , color: '#f5f5ff'
  },

});
