import { StatusBar } from "expo-status-bar"
import React, { useState } from "react"
import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native"
import { Traderiq } from "./src/components/templates/traderiq"
import topandroid from "./src/components/atoms/topandroid"
import { Navbar } from "./src/components/organisms/navbar"
import { gStyle } from "./src/styles/style"
import * as Font from "expo-font"
import AppLoading from "expo-app-loading"

const fonts = () =>
  Font.loadAsync({
    "ub-bold": require("./src/assets/fonts/Ubuntu-Bold.ttf"),
    "ub-bolditalic": require("./src/assets/fonts/Ubuntu-BoldItalic.ttf"),
    "ub-italic": require("./src/assets/fonts//Ubuntu-Italic.ttf"),
    "ub-light": require("./src/assets/fonts/Ubuntu-Light.ttf"),
    "ub-lightitalic": require("./src/assets/fonts/Ubuntu-LightItalic.ttf"),
    "ub-medium": require("./src/assets/fonts/Ubuntu-Medium.ttf"),
    "ub-mediumitalic": require("./src/assets/fonts/Ubuntu-MediumItalic.ttf"),
    "ub-reg": require("./src/assets/fonts/Ubuntu-Regular.ttf"),
  })

export default function App() {
  const [font, setFont] = useState(false)

  if (font) {
    return (
      <View style={gStyle.main}>
        <SafeAreaView style={topandroid.AndroidSafeArea}>
          <Traderiq />
          <StatusBar style="auto" />
        </SafeAreaView>
        <View style={styles.footer}>
          <Navbar />
        </View>
      </View>
    )
  } else {
    return (
      <AppLoading
        startAsync={fonts}
        onFinish={() => setFont(true)}
        onError={console.warn}
      />
    )
  }
}

const styles = StyleSheet.create({
  footer: {
    // flex: 1,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: Platform.OS === "ios" ? 120 : 75,
  },
})
