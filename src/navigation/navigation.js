import React from "react"
import { Platform } from "react-native"

import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"

import { IconCourses } from "../components/atoms/iconCurses"
import { IconMentor } from "../components/atoms/iconMentor"
import { Iconfeedback } from "../components/atoms/iconFeedback"
import { IconAnleger } from "../components/atoms/iconAnleger"
import { IconNot } from "../components/atoms/iconNotifications"

import { DraweNotifications } from "./draweNotifications"
import { DraweMentor } from "./draweMentor"
import { DraweFeedback } from "./draweFeedback"
import { DraweCourses } from "./draweCourses"
import { DraweAnleger } from "./draweAnlegerclub"
import { Greeting } from "../components/page/auth/greeting"
import { ForgetPass } from "../components/page/auth/forgetPassword"
import { SignIn } from "../components/page/auth/signIn"
import { SignUp } from "../components/page/auth/signUp"
import { SuccessReg } from "../components/page/auth/successReg"

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
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Greeting"
        component={Greeting}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="ForgetPass"
        component={ForgetPass}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <Stack.Screen
        name="SuccessReg"
        component={SuccessReg}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
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
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          height: Platform.OS === "android" ? 72 : 110,
          borderTopWidth: 0,
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
        }}
      />
      <Tab.Screen
        name="Mentor"
        component={DraweMentor}
        options={{
          tabBarLabel: "Ментор",
          tabBarIcon: ({ focused }) => <IconMentor focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Feedback"
        component={DraweFeedback}
        options={{
          tabBarLabel: "Поддержка",
          tabBarIcon: ({ focused }) => <Iconfeedback focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Anleger"
        component={DraweAnleger}
        options={{
          tabBarLabel: "Анлегер клуб",
          tabBarIcon: ({ focused }) => <IconAnleger focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={DraweNotifications}
        options={{
          tabBarLabel: "Уведомления",
          tabBarBadge: 3,
          tabBarBadgeStyle: { marginTop: 10 },
          tabBarIcon: ({ focused }) => <IconNot focused={focused} />,
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
