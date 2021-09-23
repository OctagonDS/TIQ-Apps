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

import { Mentor } from "../components/page/mentor"
import { createDrawerNavigator } from "@react-navigation/drawer"

const Drawer = createDrawerNavigator()

export function DraweMentor() {
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
        name="MentorDrawer"
        component={Mentor}
        options={{
          title: "Ментор",
        }}
      />
    </Drawer.Navigator>
  )
}
