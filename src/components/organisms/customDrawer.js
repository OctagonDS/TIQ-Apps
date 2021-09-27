import React from "react"
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Button,
  Image,
} from "react-native"

const image = require("../../assets/img/black-geo.png")
let avatar = require("../../assets/img/ilon.jpg")

export function CustomDrawer() {
  return (
    <ImageBackground source={image} resizeMode="cover" style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          height: 140,
          alignItems: "center",
          borderBottomColor: "#DADADA",
          borderBottomWidth: 1,
        }}
      >
        <View
          style={{
            width: 66,
            height: 66,
            borderRadius: 100,
            backgroundColor: "#fff",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              overflow: "hidden",
              borderRadius: 100,
              width: 65,
              height: 65,
              backgroundColor: "#fff",
            }}
          >
            <Image
              source={avatar}
              style={{ width: 65, height: 65 }}
              resizeMode="cover"
            />
          </View>
        </View>
        <Text
          style={{
            alignSelf: "center",
            marginLeft: "10%",
            marginRight: "5%",
            fontFamily: "ub-medium",
            fontSize: 24,
            color: "#FF741F",
          }}
        >
          UserName
        </Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <Button
          title="Тест кнопка2"
          onPress={() => {
            // Navigate using the `navigation` prop that you received
            // navigation.navigate("")
            alert("Привет тебе человек!:)")
          }}
        />
      </View>
    </ImageBackground>
  )
}
