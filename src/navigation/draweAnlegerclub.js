import React from "react"
import {
  View,
  Text,
  StyleSheet,
  Platform,
  ImageBackground,
  Button,
  TouchableOpacity,
} from "react-native"

import { Anleger } from "../components/page/anlegerclub"
import { createDrawerNavigator } from "@react-navigation/drawer"

const Drawer = createDrawerNavigator()

export function DraweAnleger() {
  return (
    <Drawer.Navigator
      // defaultStatus="open"
      screenOptions={{
        drawerPosition: "right",
        drawerStyle: {
          backgroundImg: "#c6cbef",
          width: "80%",
        },
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name="AnlegerDrawer"
        component={Anleger}
        options={{
          title: "Анлегер клуб",
        }}
      />
    </Drawer.Navigator>
  )
}
