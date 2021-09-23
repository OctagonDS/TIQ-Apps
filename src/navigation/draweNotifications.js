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

import { Notifications } from "../components/page/notifications"
import { createDrawerNavigator } from "@react-navigation/drawer"

const Drawer = createDrawerNavigator()

export function DraweNotifications() {
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
        name="NotificationsDrawer"
        component={Notifications}
        options={{
          title: "Уведомления",
        }}
      />
    </Drawer.Navigator>
  )
}
