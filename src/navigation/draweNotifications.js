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

import { Notifications } from "../components/page/notifications"
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

export function DraweNotifications() {
  return (
    <Drawer.Navigator
      // defaultStatus="open"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerPosition: "right",
        drawerType: "slide",
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
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            >
              <IconBurger style={{ marginRight: 10 }} />
            </TouchableOpacity>
          )
        },
      }}
    >
      <Drawer.Screen
        name="NotificationsDrawer"
        component={Notifications}
        options={{
          title: "Уведомления",
        }}
      />
    </Drawer.Navigator>
  )
}
