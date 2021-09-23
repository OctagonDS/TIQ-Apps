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

import { Productpage } from "../components/page/product"

import { IconBurger } from "../components/atoms/iconBurger"
import { IconSearch } from "../components/atoms/iconSearch"

import { Feedback } from "../components/page/feedback"
import { createDrawerNavigator } from "@react-navigation/drawer"

const Drawer = createDrawerNavigator()

function CustomDrawerContent({ navigation }) {
  return (
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
          navigation.navigate("")
        }}
      />
    </View>
  )
}

export function DraweFeedback({ navigation }) {
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
        name="FeedbackDrawer"
        component={Feedback}
        options={{
          title: "Обратная связь",
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
