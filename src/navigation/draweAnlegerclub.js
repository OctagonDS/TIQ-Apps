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

import { Anleger } from "../components/page/anlegerclub"
import { createDrawerNavigator } from "@react-navigation/drawer"

const Drawer = createDrawerNavigator()

export function DraweAnleger() {
  return (
    <Drawer.Navigator
      // defaultStatus="open"
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
        name="AnlegerDrawer"
        component={Anleger}
        options={{
          title: "Анлегер клуб",
        }}
      />
    </Drawer.Navigator>
  )
}
