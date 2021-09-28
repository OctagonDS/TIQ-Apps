import React from "react"
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from "react-native"
import { gStyle } from "../../../styles/style"
import * as WebBrowser from "expo-web-browser"
import { LinearGradient } from "expo-linear-gradient"

const image = require("../../../assets/img/grey-geo.png")
const logoTIQ = require("../../../assets/img/logo-tiq.png")
const topD = require("../../../assets/img/TOP-D2021.png")
const topE = require("../../../assets/img/TOP-E2021.png")

const win = Dimensions.get("window")
const ratio = win.width / 541

const GradientBtn = ({ name }) => (
  <LinearGradient
    colors={["#FF741F", "#E86312"]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    style={{ flex: 1, borderRadius: 5, justifyContent: "center" }}
  >
    <Text style={styles.submitTextLog}>{name}</Text>
  </LinearGradient>
)

export const Greeting = ({ navigation }) => {
  return (
    <ImageBackground source={image} resizeMode="cover" style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <View style={styles.logo}>
          <Image
            source={logoTIQ}
            style={{ width: "90%", height: 180 * ratio }}
            resizeMode="contain"
          />
        </View>
        <View style={styles.block}>
          <TouchableOpacity
            style={styles.wrapper}
            onPress={() => navigation.navigate("SignIn")}
          >
            <GradientBtn name="Log-In" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.submitReg}
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text style={styles.submitTextReg}>Registrieren</Text>
          </TouchableOpacity>
          <Text style={[styles.text, { marginTop: "10%" }]}>
            Mit Ihrer Anmeldung akzeptieren Sie unsere{" "}
            <Text
              style={{ color: "#FF741F" }}
              onPress={() => WebBrowser.openBrowserAsync("https://google.com")}
            >
              AGB’s
            </Text>{" "}
            sowie unsere{" "}
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
  wrapper: {
    width: "70%",
    height: 68,
  },
  submitTextLog: {
    color: "#fff",
    textAlign: "center",
    fontFamily: "ub-medium",
    fontSize: 24,
  },
  submitReg: {
    marginTop: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#FF741F",
    width: "70%",
    height: 68,
    justifyContent: "center",
  },
  submitTextReg: {
    color: "#000",
    textAlign: "center",
    fontFamily: "ub-medium",
    fontSize: 24,
  },
  text: {
    width: "80%",
    fontFamily: "ub-medium",
    fontSize: 15,
    textAlign: "center",
  },
})
