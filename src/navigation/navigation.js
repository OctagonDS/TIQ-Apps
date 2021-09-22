import React from "react"
import { View, Text, StyleSheet, Platform } from "react-native"
import { Courses } from "../components/page/courses"
import { Mentor } from "../components/page/mentor"
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"
import { IconSearch } from "../components/atoms/iconSearch"
import { IconCourses } from "../components/atoms/iconCurses"
import { IconMentor } from "../components/atoms/iconMentor"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { LinearGradient } from "expo-linear-gradient"
import { Anleger } from "../components/page/anlegerclub"

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

function StackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyTabs"
        component={MyTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Anleger"
        component={Anleger}
        options={{
          headerTitle: (props) => <IconSearch />,
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  )
}

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: "#fff",
        headerTitleAlign: "center",
        tabBarStyle: { position: "absolute" },
        tabBarBackground: () => (
          <LinearGradient
            colors={["#454A4F", "#545A60"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ flex: 1 }}
          />
        ),
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Courses}
        options={{
          tabBarLabel: "Курсы",
          tabBarIcon: ({ focused }) => <IconMentor focused={focused} />,
          headerTitle: (props) => <IconSearch />,
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Mentor}
        options={{
          tabBarLabel: "Ментор",
          tabBarIcon: ({ focused }) => <IconCourses focused={focused} />,
          headerTitle: (props) => <IconSearch />,
        }}
      />
    </Tab.Navigator>
  )
}

export default function () {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  )
}
