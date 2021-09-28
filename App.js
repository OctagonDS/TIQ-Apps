import React, { useState } from "react"
import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native"
import * as Font from "expo-font"
// import AppLoading from "expo-app-loading"
import Navigations from "./src/navigation/navigation"

const fonts = () =>
  Font.loadAsync({
    "ub-bold": require("./src/assets/fonts/Ubuntu-Bold.ttf"),
    "ub-bolditalic": require("./src/assets/fonts/Ubuntu-BoldItalic.ttf"),
    "ub-italic": require("./src/assets/fonts/Ubuntu-Italic.ttf"),
    "ub-light": require("./src/assets/fonts/Ubuntu-Light.ttf"),
    "ub-lightitalic": require("./src/assets/fonts/Ubuntu-LightItalic.ttf"),
    "ub-medium": require("./src/assets/fonts/Ubuntu-Medium.ttf"),
    "ub-mediumitalic": require("./src/assets/fonts/Ubuntu-MediumItalic.ttf"),
    "ub-reg": require("./src/assets/fonts/Ubuntu-Regular.ttf"),
  })

export default function App() {
  // const [font, setFont] = useState(false)

  // if (font) {
  return <Navigations />
  // } else {
  //   return (
  //     <AppLoading
  //       startAsync={fonts}
  //       onFinish={() => setFont(true)}
  //       onError={console.warn}
  //     />
  //   )
  // }
}

const styles = StyleSheet.create({
  // footer: {
  //   // flex: 1,
  //   position: "absolute",
  //   left: 0,
  //   right: 0,
  //   bottom: 0,
  //   height: Platform.OS === "ios" ? 120 : 75,
  // },
})
