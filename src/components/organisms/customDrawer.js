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
import { IcoReferalMain } from "../atoms/iconRefer"
import { IcoOut } from "../atoms/iconOut"
import { IcoFacebook } from "../atoms/iconFacebook"
import { IcoInsta } from "../atoms/iconInst"
import { IcoYouTube } from "../atoms/iconYouTube"

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
      <View>
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
              marginTop: "12%",
            }}
          >
            <Text
              style={{ color: "#fff", fontFamily: "ub-medium", fontSize: 17 }}
            >
              Поделиться
            </Text>
            <View style={{ marginLeft: 20 }}>
              <IcoReferalMain />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Profile")}
          style={{
            alignItems: "center",
            marginTop: "15%",
          }}
        >
          <Text
            style={{ color: "#fff", fontFamily: "ub-medium", fontSize: 20 }}
          >
            Trader IQ
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: "6%",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Profile")}
            style={{
              marginRight: "5%",
            }}
          >
            <Text
              style={{ color: "#fff", fontFamily: "ub-medium", fontSize: 12 }}
            >
              AGB’s
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Profile")}
            style={{}}
          >
            <Text
              style={{ color: "#fff", fontFamily: "ub-medium", fontSize: 12 }}
            >
              Impressum
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Profile")}
            style={{
              marginLeft: "5%",
            }}
          >
            <Text
              style={{ color: "#fff", fontFamily: "ub-medium", fontSize: 12 }}
            >
              Datenschutz
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: "8%",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Profile")}
            style={{
              marginRight: "10%",
            }}
          >
            <IcoFacebook />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Profile")}
            style={{}}
          >
            <IcoInsta />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Profile")}
            style={{
              marginLeft: "10%",
            }}
          >
            <IcoYouTube />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  )
}
