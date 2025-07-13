import { useGoHome } from '@/src/hooks/useGoHome';
import { Cog, StepBack } from 'lucide-react-native'
import Drawer from "expo-router/drawer";
import { View, Text, StyleSheet } from "react-native";
import useColorMode from '@/src/hooks/useColorMode';

export default function Settings() {

  const bgColor: string = useColorMode("#09090a", "#f5f5ff");
  const fontColor: string = useColorMode("#f5f5f7", "#09090a");
  const goHome = useGoHome();

  return (
    <View style={{ ...styles.view, backgroundColor: bgColor }}>
      <Drawer.Screen
        options={{
          headerStyle: {
            backgroundColor: bgColor
          },
          drawerLabel: 'Settings',
          title: 'Settings',
          drawerIcon: () => <Cog size={34} color={fontColor} strokeWidth={2} />,
          swipeEnabled: false,
          headerLeft: () => <StepBack size={30} color={fontColor} onPress={goHome} style={{ marginLeft: 15, marginRight: 5 }} />,
        }}
      />
      <Text style={{ color: fontColor }}>Settings Page</Text>
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
