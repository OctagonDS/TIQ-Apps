//Приветственное окно
import React from "react"
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Platform,
  ImageBackground,
  Image,
  Button,
  TouchableOpacity,
} from "react-native"
import { gStyle } from "../../../styles/style"

const image = require("../../../assets/img/grey-geo.png")
const logoTIQ = require("../../../assets/img/logo-tiq.png")

export const Greeting = (props) => {
  return (
    <ImageBackground source={image} resizeMode="cover" style={{ flex: 1 }}>
      <View style={gStyle.main}>
        <View style={styles.logo}>
          <Image
            source={logoTIQ}
            style={{ width: "90%" }}
            resizeMode="contain"
          />
        </View>
        <View style={styles.block}>
          <TouchableOpacity
            style={styles.submitLog}
            onPress={() => {
              alert("Привет2")
            }}
          >
            <Text style={styles.submitTextLog}>Войти</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.submitReg}
            onPress={() => {
              alert("Привет")
            }}
          >
            <Text style={styles.submitTextReg}>Регистрация</Text>
          </TouchableOpacity>
          <Text style={styles.text}>
            Mit Ihrer Anmeldung akzeptieren Sie unsere AGB’s sowie unsere
            Datenschutz
          </Text>
          <Text style={[styles.text, { marginTop: 20 }]}>
            Laut Provenexpert
          </Text>
        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  logo: {
    marginTop: "30%",
    alignItems: "center",
    marginBottom: "5%",

    // padding: 20,
  },
  block: {
    alignItems: "center",
  },
  submitLog: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 5,
    backgroundColor: "#FF741F",
    width: "70%",
  },
  submitTextLog: {
    color: "#fff",
    textAlign: "center",
    fontFamily: "ub-medium",
    fontSize: 24,
  },
  submitReg: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#FF741F",
    width: "70%",
  },
  submitTextReg: {
    color: "#000",
    textAlign: "center",
    fontFamily: "ub-medium",
    fontSize: 24,
  },
  text: {
    width: "70%",
    fontFamily: "ub-medium",
    fontSize: 15,
    textAlign: "center",
  },
})
