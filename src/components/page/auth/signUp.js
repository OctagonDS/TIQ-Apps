// Регистрация
import React from "react"
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  ImageBackground,
  SafeAreaView,
} from "react-native"
import { gStyle } from "../../../styles/style"
import { ArrowLeft } from "../../atoms/arrowLeft"

const image = require("../../../assets/img/black-geo.png")

export const SignUp = (props) => {
  return (
    <ImageBackground source={image} resizeMode="cover" style={{ flex: 1 }}>
      <View style={gStyle.main}>
        <ArrowLeft />
        <Text style={gStyle.title}>Регистрация</Text>
      </View>
    </ImageBackground>
  )
}
