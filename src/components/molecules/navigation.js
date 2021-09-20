import React from "react"
import { View, Text, StyleSheet, Platform } from "react-native"
import { Courses } from "../page/courses"
import { Mentor } from "../page/mentor"
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"

const Stack = createStackNavigator()

export default function NavigationMain() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Courses"
          component={Courses}
          options={{ title: "Курсы" }}
        />
        <Stack.Screen
          name="Mentor"
          component={Mentor}
          options={{ title: "Наставник" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
