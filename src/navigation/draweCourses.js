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

import { Courses } from "../components/page/courses"
import { createDrawerNavigator } from "@react-navigation/drawer"

const Drawer = createDrawerNavigator()

export function DraweCourses() {
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
        name="CoursesDrawer"
        component={Courses}
        options={{
          title: "Курсы",
        }}
      />
    </Drawer.Navigator>
  )
}
