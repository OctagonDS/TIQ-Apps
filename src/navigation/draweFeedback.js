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

import { Feedback } from "../components/page/feedback"
import { createDrawerNavigator } from "@react-navigation/drawer"

const Drawer = createDrawerNavigator()

export function DraweFeedback() {
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
        name="FeedbackDrawer"
        component={Feedback}
        options={{
          title: "Обртаня связь",
        }}
      />
    </Drawer.Navigator>
  )
}
