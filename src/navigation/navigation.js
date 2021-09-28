import React from "react"
import { Platform, TouchableOpacity } from "react-native"

import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack"
import { NavigationContainer, useNavigation } from "@react-navigation/native"

import { IconCourses } from "../components/atoms/iconCurses"
import { IconMentor } from "../components/atoms/iconMentor"
import { Iconfeedback } from "../components/atoms/iconFeedback"
import { IconAnleger } from "../components/atoms/iconAnleger"
import { IconNot } from "../components/atoms/iconNotifications"
import { ArrowLeftScreen } from "../components/atoms/arrowLeftScreen"
import { IconSearchClose } from "../components/atoms/iconSearchClose"

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
import { ProfilePage } from "../components/page/menu/profile"
import { SuccessScale } from "../components/page/menu/successScale"
import { SearchModal } from "../components/page/menu/search"
import { FavoritPage } from "../components/page/menu/favorites"
import { FaqPage } from "../components/page/menu/faq"

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
      <Stack.Group
        screenOptions={{
          presentation: "modal",
          headerTitleStyle: { color: "#888888", fontFamily: "ub-medium" },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerStyle: { elevation: 0, shadowOpacity: 0 },
          headerTitleAlign: "center",
          headerLeft: () => {
            const navigation = useNavigation()
            return (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <ArrowLeftScreen style={{ marginLeft: 10 }} />
              </TouchableOpacity>
            )
          },
        }}
      >
        <Stack.Screen
          name="Profile"
          component={ProfilePage}
          options={{
            title: "Profil",
          }}
        />
        <Stack.Screen
          name="SuccessScale"
          component={SuccessScale}
          options={{
            title: "Erfolgsskala",
          }}
        />
        <Stack.Screen
          name="Favorit"
          component={FavoritPage}
          options={{
            title: "Favoriten",
          }}
        />
        <Stack.Screen
          name="FAQ"
          component={FaqPage}
          options={{
            title: "FAQ",
          }}
        />
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          presentation: "modal",
          headerTitleStyle: { color: "#888888", fontFamily: "ub-medium" },
          cardStyleInterpolator:
            CardStyleInterpolators.forFadeFromBottomAndroid,
          headerTitleAlign: "center",
          headerStyle: { elevation: 0, shadowOpacity: 0 },
          headerLeft: false,
          headerTitle: () => {
            const navigation = useNavigation()

            return (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <IconSearchClose />
              </TouchableOpacity>
            )
          },
        }}
      >
        <Stack.Screen
          name="Search"
          component={SearchModal}
          options={{
            title: "Suche",
          }}
        />
      </Stack.Group>
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
          tabBarBadge: 0,
          tabBarBadgeStyle: { marginTop: 10 },
          tabBarIcon: ({ focused }) => <IconNot focused={focused} />,
        }}
      />
    </Tab.Navigator>
  )
}

export function Navigations() {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  )
}
