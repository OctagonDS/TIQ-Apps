import React from "react"
import { View, Text, StyleSheet, Platform } from "react-native"
import { Courses } from "../page/courses"
import { Mentor } from "../page/mentor"
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"
import { IconSearch } from "../atoms/iconSearch"

const Stack = createStackNavigator()

export default function NavigationMain() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
        <Stack.Screen
          name="Courses"
          component={Courses}
          options={{ headerTitle: (props) => <IconSearch /> }}
        />
        <Stack.Screen
          name="Mentor"
          component={Mentor}
          options={{ headerTitle: (props) => <IconSearch /> }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
