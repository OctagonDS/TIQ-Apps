import React from "react"
import { View, Text, ScrollView, StyleSheet, Button } from "react-native"
import { gStyle } from "../../styles/style"
import { NavigationContainer } from "@react-navigation/native"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"

function HomeScreen({ navigation }) {
  return (
    <ScrollView style={{ flex: 1 }}>
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
      <View
        style={{
          marginBottom: 10,
          marginTop: 10,
          width: "50%",
          marginLeft: "25%",
        }}
      >
        <Button
          title="Авторизация"
          onPress={() => navigation.navigate("SignIn")}
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
          title="Регистрация"
          onPress={() => navigation.navigate("SignUp")}
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
          title="Забыл пароль"
          onPress={() => navigation.navigate("FotgetPass")}
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
      <View
        style={{
          marginBottom: 10,
          marginTop: 10,
          width: "50%",
          marginLeft: "25%",
        }}
      >
        <Button
          title="Авторизация"
          onPress={() => navigation.navigate("SignIn")}
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
          title="Регистрация"
          onPress={() => navigation.navigate("SignUp")}
        />
      </View>
      <View
        style={{
          marginBottom: "25%",
          marginTop: 10,
          width: "50%",
          marginLeft: "25%",
        }}
      >
        <Button
          title="Забыл пароль"
          onPress={() => navigation.navigate("FotgetPass")}
        />
      </View>
    </ScrollView>
  )
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Настройки!</Text>
    </View>
  )
}

const Tab = createMaterialTopTabNavigator()

export function Courses() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Бесплатные курсы" component={HomeScreen} />
      <Tab.Screen name="Платные курсы" component={SettingsScreen} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  // navbar: {
  //   height: Platform.OS === "android" ? "100%" : "80%",
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  // },
  // linearGradient: {
  //   flex: 1,
  //   paddingLeft: 15,
  //   paddingRight: 15,
  // },
  // text: {
  //   color: "#fff",
  //   fontSize: 20,
  //   textAlign: "center",
  // },
})
