import { useGoHome } from "@/src/hooks/useGoHome";
import Drawer from "expo-router/drawer";
import { BookMarked, StepBack } from "lucide-react-native";
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
          drawerIcon: () => <BookMarked size={32} color={fontColor} strokeWidth={2} />,
          swipeEnabled: false,
          headerLeft: () => <StepBack size={30} color={fontColor} onPress={goHome} style={{ marginLeft: 15, marginRight: 5 }} />,
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
