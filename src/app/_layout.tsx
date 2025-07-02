import { Drawer } from 'expo-router/drawer'
import { useWindowDimensions } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { useFonts } from 'expo-font'
import useColorMode from '../hooks/useColorMode';

export default function RootLayout() {
  const dimensions = useWindowDimensions();

  const drawerBg = useColorMode("#09090a", "#f5f5ff");
  const fontColor = useColorMode("#f5f5ff", "#09090a");

  const fontMap: Record<string, any> = {
    Poppins: require("../assets/fonts/Poppins/Poppins-Bold.ttf"),
  }

  useFonts(fontMap);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        backBehavior={"firstRoute"}
        screenOptions={{
          swipeEdgeWidth: 400,
          lazy: false,
          drawerStyle: {
            paddingTop: dimensions.height / 4,
            width: 250,
            backgroundColor: drawerBg,
          },
          drawerType: dimensions.width >= 760 ? "permanent" : "front",
          headerTintColor: fontColor,
          headerTitleStyle: {
            fontFamily: "Poppins",
            fontWeight: "900",
            fontSize: 21
          },
          drawerLabelStyle: {
            fontSize: 22,
            fontFamily: "Poppins",
            height: 52,
            paddingLeft: 5,
          },
          drawerActiveTintColor: '#00db9d',
          drawerActiveBackgroundColor: "transparent",
          drawerInactiveTintColor: fontColor
        }}
      />
    </GestureHandlerRootView>
  )
}
