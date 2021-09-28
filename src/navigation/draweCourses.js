import React from "react"
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from "react-native"
import {
  DrawerActions,
  useNavigation,
  useFocusEffect,
} from "@react-navigation/native"
import { CustomDrawer } from "../components/organisms/customDrawer"
import { ArrowLeftScreen } from "../components/atoms/arrowLeftScreen"

import { IconBurger } from "../components/atoms/iconBurger"
import { IconSearch } from "../components/atoms/iconSearch"
import { IconRef } from "../components/atoms/iconRef"

import { Courses } from "../components/page/courses"
import { Productpage } from "../components/page/child/product"

import { createDrawerNavigator } from "@react-navigation/drawer"

const Drawer = createDrawerNavigator()

function CustomDrawerContent({ navigation }) {
  useFocusEffect(
    React.useCallback(() => {
      return () => {
        navigation.dispatch(DrawerActions.closeDrawer())
      }
    }, [])
  )
  return <CustomDrawer />
}

export function DraweCourses({ navigation: { goBack } }) {
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
          headerLeft: () => {
            const navigation = useNavigation()
            return (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <ArrowLeftScreen style={{ marginLeft: 10 }} />
              </TouchableOpacity>
            )
          },
          title: "Продукт",
        }}
      />
    </Drawer.Navigator>
  )
}
