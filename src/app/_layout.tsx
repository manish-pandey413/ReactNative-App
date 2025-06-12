import { Drawer } from 'expo-router/drawer'
import { useColorScheme, useWindowDimensions } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { useFonts } from 'expo-font'

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const bgColor = colorScheme === "dark" ? "#09090a" : "#f5f5f7";
  const fontColor = colorScheme === "dark" ? "#f5f5ff" : "#09090a";


  const [loaded, error] = useFonts({
    'SpaceMono': require('../assets/fonts/Poppins-Regular.ttf'),
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        backBehavior={"firstRoute"}
        screenOptions={{
          swipeEdgeWidth: 400,
          lazy: false,
          drawerStyle: {
            paddingTop: useWindowDimensions().height / 4,
            width: 250,
            backgroundColor: bgColor,
          },
          drawerType: useWindowDimensions().width >= 760 ? "permanent" : "front",
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
          drawerActiveBackgroundColor: bgColor,
          drawerActiveTintColor: '#00db9d',
          drawerInactiveTintColor: fontColor
        }}
      />
    </GestureHandlerRootView>
  )
}
