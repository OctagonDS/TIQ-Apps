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
import { CustomDrawer } from "../components/organisms/customDrawer"

import { IconBurger } from "../components/atoms/iconBurger"
import { IconSearch } from "../components/atoms/iconSearch"
import { IconRef } from "../components/atoms/iconRef"

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

  return <CustomDrawer />
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
        name="NotificationsDrawer"
        component={Notifications}
        options={{
          title: "Уведомления",
        }}
      />
    </Drawer.Navigator>
  )
}
