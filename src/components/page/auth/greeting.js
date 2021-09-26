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
  Dimensions,
} from "react-native"
import { gStyle } from "../../../styles/style"
import * as WebBrowser from "expo-web-browser"

const image = require("../../../assets/img/grey-geo.png")
const logoTIQ = require("../../../assets/img/logo-tiq.png")
const topD = require("../../../assets/img/TOP-D2021.png")
const topE = require("../../../assets/img/TOP-E2021.png")

const win = Dimensions.get("window")
const ratio = win.width / 541

export const Greeting = (props) => {
  return (
    <ImageBackground source={image} resizeMode="cover" style={{ flex: 1 }}>
      <View style={[gStyle.main, { justifyContent: "center" }]}>
        <View style={styles.logo}>
          <Image
            source={logoTIQ}
            style={{ width: "90%", height: 180 * ratio }}
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
          <Text style={[styles.text, { marginTop: "10%" }]}>
            Mit Ihrer Anmeldung akzeptieren Sie unsere{" "}
            <Text
              style={{ color: "#FF741F" }}
              onPress={() => WebBrowser.openBrowserAsync("https://google.com")}
            >
              AGB’s
            </Text>{" "}
            sowie unsere
            <Text
              style={{ color: "#FF741F" }}
              onPress={() => WebBrowser.openBrowserAsync("https://google.com")}
            >
              Datenschutz
            </Text>
          </Text>
          <Text style={[styles.text, { marginTop: 20, marginBottom: 10 }]}>
            Laut{" "}
            <Text
              style={{ color: "#FF741F" }}
              onPress={() => WebBrowser.openBrowserAsync("https://google.com")}
            >
              Provenexpert
            </Text>
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Image
              source={topD}
              style={{ width: 122, height: 64, marginRight: "3%" }}
            />
            <Image
              source={topE}
              style={{ width: 122, height: 64, marginLeft: "3%" }}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  logo: {
    alignItems: "center",
    marginBottom: "5%",
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
