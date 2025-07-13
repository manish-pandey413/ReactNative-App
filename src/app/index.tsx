import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { House } from "lucide-react-native";
import Drawer from "expo-router/drawer";
import useColorMode from "../hooks/useColorMode";
import type { StatusBarStyle } from "react-native";
import AddItemModal from "../components/addItemModal";

const DATA = [
  {
    title: 'Jan',
    data: [
      { itemName: 'Water', price: 20, category: ['Important'] },
      { itemName: 'Coke', price: 80, category: ['Misc'] },
      { itemName: 'Beer', price: 250, category: ['Wasted', 'Misc'] },
    ]
  }
];

const useFlairColor = (flairType: string) => {
  switch (flairType) {
    case 'Important':
      return { background: "#00db9d30", text: "#00db9d" };
    case 'Misc':
      return { background: "#d7992130", text: "#d79921" };
    case 'Wasted':
      return { background: "#cc241d30", text: "#cc241d" };
  }
}


export default function Home() {

  const bgColor: string = useColorMode("#09090a", "#f5f5ff");
  const cardColor: string = useColorMode("#111111ef", "#f5f5ffef");
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
          drawerIcon: () => <House size={32} color={fontColor} strokeWidth={2} />,
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
            style={[styles.sectionContainer, { backgroundColor: cardColor }]}
          >
            <Text style={[styles.sectionHeader, { color: fontColor, backgroundColor: cardColor }]}>{section.title}</Text>
            <View style={{ backgroundColor: 'gray', height: 0.5 }} />

            {section.data.map((item, index) => (
              <View key={index}>

                <TouchableOpacity key={index} style={styles.touchableItem}>
                  <Text style={[styles.itemText, { color: fontColor }]}>{item.itemName}</Text>
                  <Text style={[styles.priceText, { color: fontColor }]}>₹ {item.price} /-</Text>
                </TouchableOpacity>

                <View key={index + 1} style={{ flex: 1, flexDirection: 'row' }} >
                  {
                    item.category.map((category, index) => (
                      <View key={index} style={[styles.flair, { backgroundColor: useFlairColor(category)?.background }]}><Text style={{ flex: 0, fontSize: 12, fontWeight: '900', color: useFlairColor(category)?.text }}>{category}</Text></View>
                    ))
                  }
                </View>

              </View>
            ))
            }
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
    elevation: 10,
    marginVertical: 15,
    marginHorizontal: 5,
    borderRadius: 10,
    overflow: 'hidden',
    paddingBottom: 12
  },
  sectionHeader: {
    fontSize: 30,
    padding: 10,
  },
  touchableItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 32,
    marginLeft: 5,
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
  flair: {
    flex: 0,
    borderRadius: 18,
    paddingHorizontal: 12,
    paddingVertical: 1,
    paddingBottom: 2,
    marginRight: -28,
    marginLeft: 32,
    marginTop: -15,
    marginBottom: 5
  }
});
