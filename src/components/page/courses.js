import React from "react"
import { View, Text, ScrollView, StyleSheet, Button } from "react-native"
import { gStyle } from "../../styles/style"
import { NavigationContainer } from "@react-navigation/native"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"

function HomeScreen({ navigation }) {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View
        style={{
          marginBottom: 10,
          marginTop: 30,
          width: "50%",
          marginLeft: "25%",
        }}
      >
        <Button
          title="Продукт"
          onPress={() => navigation.navigate("Product")}
        />
      </View>
      <View
        style={{
          marginBottom: 10,
          marginTop: 10,
          width: "50%",
          marginLeft: "25%",
        }}
      >
        <Button
          title="Главная страница"
          onPress={() => navigation.navigate("Greeting")}
        />
      </View>
    </ScrollView>
  )
}

function SettingsScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <Text>Настройки!</Text>
    </View>
  )
}

const Tab = createMaterialTopTabNavigator()

export function Courses() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorContainerStyle: {
          borderBottomWidth: 1,
          borderBottomColor: "#D8D8D8",
        },
        tabBarStyle: {
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarActiveTintColor: "#FF741F",
        tabBarInactiveTintColor: "#545A60",
        tabBarIndicatorStyle: {
          backgroundColor: "#FF741F",
        },
        tabBarLabelStyle: {
          fontFamily: "ub-medium",
          textTransform: "none",
          fontSize: 14,
        },
      }}
    >
      <Tab.Screen name="Kostenlose Kurse" component={HomeScreen} />
      <Tab.Screen name="Bezahlte Kurse" component={SettingsScreen} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})
