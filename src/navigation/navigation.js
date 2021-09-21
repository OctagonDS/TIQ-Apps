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

const MainStack = createStackNavigator()
const Main = () => {
  return (
    <MainStack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <MainStack.Screen
        name="MainTabs"
        component={MainTabs}
        options={{ headerTitle: (props) => <IconSearch /> }}
      />
    </MainStack.Navigator>
  )
}

const Tabs = createBottomTabNavigator()
const MainTabs = () => {
  return (
    <LinearGradient
      colors={["#454A4F", "#545A60"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.linearGradient}
    >
      <Tabs.Navigator
        tabBarOptions={{
          style: {
            borderTopWidth: 1,
            backgroundColor: "transparent",
          },
        }}
      >
        {/* these icons using Ionicons */}
        <Tabs.Screen
          name="Курсы"
          component={Courses}
          options={{
            tabBarIcon: ({ focused }) => <IconCourses focused={focused} />,
          }}
        />
        <Tabs.Screen
          name="Ментор"
          component={Mentor}
          options={{
            tabBarIcon: ({ focused }) => <IconMentor focused={focused} />,
          }}
        />
      </Tabs.Navigator>
    </LinearGradient>
  )
}

export default () => {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    // paddingLeft: 15,
    // paddingRight: 15,
  },
})
