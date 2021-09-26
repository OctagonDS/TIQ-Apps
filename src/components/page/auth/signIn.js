// Авторизация
import React from "react"
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
} from "react-native"
import { gStyle } from "../../../styles/style"
import { ArrowLeft } from "../../atoms/arrowLeft"

const image = require("../../../assets/img/black-geo.png")

export const SignIn = ({ navigation: { goBack } }) => {
  return (
    <ImageBackground source={image} resizeMode="cover" style={{ flex: 1 }}>
      <View style={gStyle.main}>
        <TouchableOpacity onPress={() => goBack()}>
          <ArrowLeft style={styles.arrow} />
        </TouchableOpacity>
        <Text style={gStyle.title}>Авторизация</Text>
      </View>
    </ImageBackground>
  )
}

export const styles = StyleSheet.create({
  arrow: { marginLeft: "10%", marginTop: "15%" },
})
