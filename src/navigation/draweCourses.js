import React from "react"
import {
  View,
  Text,
  StyleSheet,
  Platform,
  ImageBackground,
  Button,
  TouchableOpacity,
} from "react-native"
import { DrawerActions, useNavigation } from "@react-navigation/native"

import { IconBurger } from "../components/atoms/iconBurger"
import { IconSearch } from "../components/atoms/iconSearch"
import { IconRef } from "../components/atoms/iconRef"

import { Courses } from "../components/page/courses"
import { Productpage } from "../components/page/product"

import { createDrawerNavigator } from "@react-navigation/drawer"

const Drawer = createDrawerNavigator()

function CustomDrawerContent({ navigation }) {
  React.useEffect(
    () =>
      navigation.addListener("blur", () =>
        navigation.dispatch(DrawerActions.closeDrawer())
      ),
    []
  )
  const image = require("../assets/img/black-geo.png")

  return (
    <ImageBackground source={image} resizeMode="cover" style={{ flex: 1 }}>
      <View
        style={{
          marginTop: 70,
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <Button
          title="Тест кнопка"
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

export function DraweCourses() {
  return (
    <Drawer.Navigator
      // defaultStatus="open"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerPosition: "right",
        drawerStyle: {
          backgroundImg: "#c6cbef",
          width: "80%",
        },
        headerTitleAlign: "center",
        // headerShown: false,
        headerLeft: false,
        headerTitle: (props) => <IconSearch />,
        headerRight: () => {
          const navigation = useNavigation()

          return (
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                onPress={() => alert("Ты поделись ссылкой своей!")}
              >
                <IconRef style={{ marginRight: 10 }} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.dispatch(DrawerActions.toggleDrawer())
                }
              >
                <IconBurger style={{ marginRight: 10 }} />
              </TouchableOpacity>
            </View>
          )
        },
      }}
    >
      <Drawer.Screen
        name="CoursesDrawer"
        component={Courses}
        options={{
          title: "Курсы",
        }}
      />
      <Drawer.Screen
        name="Product"
        component={Productpage}
        options={{
          title: "Продукт",
        }}
      />
    </Drawer.Navigator>
  )
}
