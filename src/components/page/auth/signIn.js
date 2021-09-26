// Авторизация
import React from "react"
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from "react-native"
import { gStyle } from "../../../styles/style"
import { ArrowLeft } from "../../atoms/arrowLeft"

const image = require("../../../assets/img/black-geo.png")

export const SignIn = ({ navigation: { goBack } }) => {
  return (
    <ImageBackground source={image} resizeMode="cover" style={{ flex: 1 }}>
      <View style={[gStyle.main, { justifyContent: "center" }]}>
        <TouchableOpacity onPress={() => goBack()}>
          <ArrowLeft style={styles.arrow} />
        </TouchableOpacity>
        <Text style={styles.title}>Anmelden</Text>
        <View style={{ marginTop: "8%" }}>
          <TextInput style={styles.input} />
        </View>
        <View style={{ marginTop: "8%" }}>
          <Text style={styles.label}>
            Passwort <Text style={{ color: "#DA1414" }}>*</Text>
          </Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            autoCorrect={false}
            autoCapitalize="none"
            autoCompleteType="off"
          />
        </View>
      </View>
    </ImageBackground>
  )
}

export const styles = StyleSheet.create({
  arrow: {
    marginLeft: "8%",
    marginTop: "15%",
    marginBottom: "10%",
  },
  label: {
    color: "#FF741F",
    backgroundColor: "#fff",
    width: "15%",
    borderRadius: 4,
    position: "absolute",
    zIndex: 1,
    paddingLeft: 5,
    marginLeft: "10%",
    marginTop: -5,
    fontFamily: "ub-medium",
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
  title: {
    fontSize: 40,
    fontFamily: "ub-medium",
    textAlign: "center",
    color: "#fff",
    letterSpacing: 2,
  },
  input: {
    borderWidth: 1,
    borderColor: "#FF741F",
    width: "86%",
    marginLeft: "7%",
    borderRadius: 5,
    height: 60,
    backgroundColor: "#fff",
    fontSize: 21,
    paddingLeft: "2%",
  },
})
