import React from "react"
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  ScrollView,
} from "react-native"

import { Productpage } from "../components/page/product"

import { createStackNavigator } from "@react-navigation/stack"
import {
  NavigationContainer,
  DrawerActions,
  useNavigation,
} from "@react-navigation/native"

import { IconSearch } from "../components/atoms/iconSearch"
import { IconCourses } from "../components/atoms/iconCurses"
import { IconMentor } from "../components/atoms/iconMentor"
import { Iconfeedback } from "../components/atoms/iconFeedback"
import { IconAnleger } from "../components/atoms/iconAnleger"
import { IconBurger } from "../components/atoms/iconBurger"
import { IconNot } from "../components/atoms/iconNotifications"

import { DraweNotifications } from "./draweNotifications"
import { DraweMentor } from "./draweMentor"
import { DraweFeedback } from "./draweFeedback"
import { DraweCourses } from "./draweCourses"
import { DraweAnleger } from "./draweAnlegerclub"

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { LinearGradient } from "expo-linear-gradient"

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

function StackNav() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "#353535",
        headerBackTitleStyle: { color: "#353535" },
      }}
    >
      <Stack.Screen
        name="Home"
        component={MyTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Product"
        component={Productpage}
        options={{
          headerTitle: (props) => <IconSearch />,
          headerRight: (props) => <IconNot style={{ marginRight: 10 }} />,
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  )
}

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: "#fff",
        headerTitleAlign: "center",
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          height: Platform.OS === "android" ? 72 : 103,
        },
        tabBarBackground: () => (
          <LinearGradient
            colors={["#454A4F", "#545A60"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ flex: 1 }}
          />
        ),
      }}
    >
      <Tab.Screen
        name="Course"
        component={DraweCourses}
        options={{
          tabBarLabel: "Курсы",
          tabBarIcon: ({ focused }) => <IconCourses focused={focused} />,
          headerTitle: (props) => <IconSearch />,
          headerRight: () => {
            const navigation = useNavigation()
            return (
              <TouchableOpacity
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
              >
                <IconBurger style={{ marginRight: 10 }} />
              </TouchableOpacity>
            )
          },
        }}
      />
      <Tab.Screen
        name="Mentor"
        component={DraweMentor}
        options={{
          tabBarLabel: "Ментор",
          tabBarIcon: ({ focused }) => <IconMentor focused={focused} />,
          headerTitle: (props) => <IconSearch />,
          headerRight: () => {
            const navigation = useNavigation()
            return (
              <TouchableOpacity
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
              >
                <IconBurger style={{ marginRight: 10 }} />
              </TouchableOpacity>
            )
          },
        }}
      />
      <Tab.Screen
        name="Feedback"
        component={DraweFeedback}
        options={{
          tabBarLabel: "Поддержка",
          tabBarIcon: ({ focused }) => <Iconfeedback focused={focused} />,
          headerTitle: (props) => <IconSearch />,
          headerRight: () => {
            const navigation = useNavigation()
            return (
              <TouchableOpacity
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
              >
                <IconBurger style={{ marginRight: 10 }} />
              </TouchableOpacity>
            )
          },
        }}
      />
      <Tab.Screen
        name="Anleger"
        component={DraweAnleger}
        options={{
          tabBarLabel: "Анлегер клуб",
          tabBarIcon: ({ focused }) => <IconAnleger focused={focused} />,
          headerTitle: (props) => <IconSearch />,
          headerRight: () => {
            const navigation = useNavigation()
            return (
              <TouchableOpacity
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
              >
                <IconBurger style={{ marginRight: 10 }} />
              </TouchableOpacity>
            )
          },
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={DraweNotifications}
        options={{
          tabBarLabel: "Уведомления",
          tabBarBadge: 3,
          tabBarIcon: ({ focused }) => <IconNot focused={focused} />,
          headerTitle: (props) => <IconSearch />,
          headerRight: () => {
            const navigation = useNavigation()
            return (
              <TouchableOpacity
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
              >
                <IconBurger style={{ marginRight: 10 }} />
              </TouchableOpacity>
            )
          },
        }}
      />
    </Tab.Navigator>
  )
}

export default function () {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  )
}
