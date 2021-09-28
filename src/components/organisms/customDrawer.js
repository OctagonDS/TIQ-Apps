import React from "react"
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Button,
  Image,
  TouchableOpacity,
} from "react-native"
import { useNavigation } from "@react-navigation/native"
import { IcoProfile } from "../atoms/iconProfile"
import { IcoSucces } from "../atoms/iconSuc"
import { IcoFire } from "../atoms/iconFire"
import { IcoFAQ } from "../atoms/iconFAQ"
import { IcoContact } from "../atoms/iconContact"
import { IcoOut } from "../atoms/iconOut"

const image = require("../../assets/img/black-geo.png")
let avatar = require("../../assets/img/avatar2.jpg")
let UserName = "UserName222ws"

export function CustomDrawer() {
  const navigation = useNavigation()
  return (
    <ImageBackground source={image} resizeMode="cover" style={{ flex: 1 }}>
      <View
        style={{
          justifyContent: "flex-end",
          height: "17%",
          alignItems: "flex-end",
          borderBottomColor: "#DADADA",
          borderBottomWidth: 1,
        }}
      >
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            marginBottom: 20,
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
              // alignSelf: "center",
              marginLeft: "10%",
              marginRight: "5%",
              fontFamily: "ub-medium",
              fontSize: 20,
              color: "#FF741F",
            }}
          >
            {UserName}
          </Text>
        </View>
      </View>
      <View style={{ borderBottomColor: "#DADADA", borderBottomWidth: 1 }}>
        <View
          style={{
            alignItems: "flex-end",
            marginRight: "5%",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Profile")}
            style={{
              flexDirection: "row",
              marginTop: "7%",
            }}
          >
            <Text
              style={{ color: "#fff", fontFamily: "ub-medium", fontSize: 17 }}
            >
              Профиль
            </Text>
            <View style={{ marginLeft: 20 }}>
              <IcoProfile />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Profile")}
            style={{
              flexDirection: "row",
              marginTop: "4%",
            }}
          >
            <Text
              style={{ color: "#fff", fontFamily: "ub-medium", fontSize: 17 }}
            >
              Шкала успеха
            </Text>
            <View style={{ marginLeft: 20 }}>
              <IcoSucces />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Profile")}
            style={{
              flexDirection: "row",
              marginTop: "4%",
            }}
          >
            <Text
              style={{ color: "#fff", fontFamily: "ub-medium", fontSize: 17 }}
            >
              Избранное
            </Text>
            <View style={{ marginLeft: 20 }}>
              <IcoFire />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Profile")}
            style={{
              flexDirection: "row",
              marginTop: "4%",
            }}
          >
            <Text
              style={{ color: "#fff", fontFamily: "ub-medium", fontSize: 17 }}
            >
              FAQ
            </Text>
            <View style={{ marginLeft: 20 }}>
              <IcoFAQ />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Profile")}
            style={{
              flexDirection: "row",
              marginTop: "4%",
            }}
          >
            <Text
              style={{ color: "#fff", fontFamily: "ub-medium", fontSize: 17 }}
            >
              Контакты
            </Text>
            <View style={{ marginLeft: 20 }}>
              <IcoContact />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Profile")}
            style={{
              flexDirection: "row",
              marginTop: "15%",
              marginBottom: "7%",
            }}
          >
            <Text
              style={{ color: "#fff", fontFamily: "ub-medium", fontSize: 17 }}
            >
              Выйти
            </Text>
            <View style={{ marginLeft: 20 }}>
              <IcoOut />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  )
}
