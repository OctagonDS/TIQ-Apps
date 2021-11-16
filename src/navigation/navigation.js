import React, { useEffect, useState } from 'react'
import {
  Platform,
  TouchableOpacity,
  View,
  Text,
  ActivityIndicator,
} from 'react-native'
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { IconCourses } from '../components/atoms/iconCurses'
import { IconMentor } from '../components/atoms/iconMentor'
import { Iconfeedback } from '../components/atoms/iconFeedback'
import { IconAnleger } from '../components/atoms/iconAnleger'
import { IconNot } from '../components/atoms/iconNotifications'
import { ArrowLeftScreen } from '../components/atoms/arrowLeftScreen'
import { IconSearchClose } from '../components/atoms/iconSearchClose'
import { IconRef } from '../components/atoms/iconRef'
import { IconBurger } from '../components/atoms/iconBurger'
import { IconSearch } from '../components/atoms/iconSearch'

import { DraweNotifications } from './draweNotifications'
import { DraweMentor } from './draweMentor'
import { DraweFeedback } from './draweFeedback'
import { DraweCourses } from './draweCourses'
import { DraweAnleger } from './draweAnlegerclub'
import { Greeting } from '../components/page/auth/greeting'
import { ForgetPass } from '../components/page/auth/forgetPassword'
import { SignIn } from '../components/page/auth/signIn'
import { SignUp } from '../components/page/auth/signUp'
import { SuccessReg } from '../components/page/auth/successReg'
import { ProfilePage } from '../components/page/menu/profile'
import { SuccessScale } from '../components/page/menu/successScale'
import { SearchModal } from '../components/page/menu/search'
import { FavoritPage } from '../components/page/menu/favorites'
import { FaqPage } from '../components/page/menu/faq'
import { Modules } from '../components/page/child/module'
import { DraweModules } from './Courses/draweModules'

import { loginUrl } from '../store/const/const'
import { resetUrl } from '../store/const/constReset'
import mainContext, { doSome } from '../store/context/context'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { LinearGradient } from 'expo-linear-gradient'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

function StackAuth() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#353535',
        headerBackTitleStyle: { color: '#353535' },
      }}
    >
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
          unmountOnBlur: true,
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

function StackNav() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#353535',
        headerBackTitleStyle: { color: '#353535' },
      }}
    >
      <Stack.Screen
        name="Home"
        component={MyTabs}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Group
        screenOptions={{
          presentation: 'modal',
          headerTitleStyle: { color: '#888888', fontFamily: 'ub-medium' },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          headerStyle: { elevation: 0, shadowOpacity: 0 },
          headerTitleAlign: 'center',
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
            title: 'Profil',
          }}
        />
        <Stack.Screen
          name="SuccessScale"
          component={SuccessScale}
          options={{
            title: 'Erfolgsskala',
          }}
        />
        <Stack.Screen
          name="Favorit"
          component={FavoritPage}
          options={{
            title: 'Favoriten',
          }}
        />
        <Stack.Screen
          name="FAQ"
          component={FaqPage}
          options={{
            title: 'FAQ',
          }}
        />
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          presentation: 'modal',
          headerTitleStyle: { color: '#888888', fontFamily: 'ub-medium' },
          cardStyleInterpolator:
            CardStyleInterpolators.forFadeFromBottomAndroid,
          headerTitleAlign: 'center',
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
            title: 'Suche',
          }}
        />
      </Stack.Group>
      <Stack.Group
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Modules"
          component={DraweModules}
          options={{
            title: 'Модули',
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
        tabBarActiveTintColor: '#fff',
        headerTitleAlign: 'center',
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          height: Platform.OS === 'android' ? 72 : 110,
          borderTopWidth: 0,
        },
        tabBarBackground: () => (
          <LinearGradient
            colors={['#454A4F', '#545A60']}
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
          // unmountOnBlur: true,
          tabBarLabel: 'Курсы',
          tabBarIcon: ({ focused }) => <IconCourses focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Mentor"
        component={DraweMentor}
        options={{
          tabBarLabel: 'Ментор',
          tabBarIcon: ({ focused }) => <IconMentor focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Feedback"
        component={DraweFeedback}
        options={{
          tabBarLabel: 'Поддержка',
          tabBarIcon: ({ focused }) => <Iconfeedback focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Anleger"
        component={DraweAnleger}
        options={{
          // unmountOnBlur: true,
          tabBarLabel: 'Анлегер клуб',
          tabBarIcon: ({ focused }) => <IconAnleger focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={DraweNotifications}
        options={{
          tabBarLabel: 'Уведомления',
          // tabBarBadge: 0,
          tabBarBadgeStyle: { marginTop: 10 },
          tabBarIcon: ({ focused }) => <IconNot focused={focused} />,
        }}
      />
    </Tab.Navigator>
  )
}

export function Navigations() {
  const [isLoading, setIsLoading] = useState(true)
  const [isLogged, setIsLogged] = useState(false)
  const [userToken, setUserToken] = useState(null)
  const [userProfile, setUserProfile] = useState(null)
  const [loggingIn, setloggingIn] = useState(false)
  const [error, setError] = useState(null)
  const [errorReset, setErrorReset] = useState(null)
  const [successReset, setSuccessReset] = useState(null)
  const [isUpdate, setIsUpdate] = useState(false)

  useEffect(() => {
    AsyncStorage.getItem('userProfile').then((value) => {
      if (value) {
        setUserProfile(JSON.parse(value)),
          setIsLoading(false),
          setIsLogged(true)
      } else {
        setIsLoading(false), setIsLogged(false)
      }
    })
  }, [])

  // Выход

  const doLogout = async () => {
    try {
      await AsyncStorage.removeItem('userProfile')
      setloggingIn(true)
      setUserProfile(null)
      setloggingIn(false)
      setIsLogged(false)
      return true
    } catch (exception) {
      setError('Error deleting data')
      return false
    }
  }

  // Авторизация

  const doLogin = async (email, password) => {
    //console.log(email + '...' + password);
    setloggingIn(true)
    setError(null)
    let formData = new FormData()
    formData.append('type', 'login')
    formData.append('email', email)
    formData.append('password', password)
    try {
      let response = await fetch(loginUrl, {
        method: 'POST',
        body: formData,
      })
      let json = await response.json()
      if (json.status != false) {
        setError(null)
        try {
          await AsyncStorage.setItem(
            'userProfile',
            JSON.stringify({
              isLoggedIn: json.status,
              authToken: json.token,
              id: json.id,
              name: json.name,
              avatar: json.avatar,
              email: json.email,
              display_name: json.display_name,
            })
          )
        } catch {
          setError('Error storing data on device')
        }
        setUserProfile({
          isLoggedIn: json.status,
          authToken: json.token,
          id: json.id,
          name: json.name,
          avatar: json.avatar,
          email: json.email,
          display_name: json.display_name,
        })
        setIsLogged(true)
        setUserProfile(json)
        setUserToken(json.token)
      } else {
        setIsLogged(false)
        setError('Ungültige E-Mail oder Passwort')
      }
      setloggingIn(false)
    } catch (error) {
      //console.error(error);
      setError('Error connecting to server')
      setloggingIn(false)
    }
  }

  // Сброс пароля
  const doReset = async (email) => {
    //console.log(email + '...' + password);
    setloggingIn(false)
    setSuccessReset(null)
    setErrorReset(null)
    let formData = new FormData()
    formData.append('login', email)
    try {
      let response = await fetch(resetUrl, {
        method: 'POST',
        body: formData,
      })
      let json = await response.json()
      if (json.code == 200) {
        setSuccessReset('Überprüfe deine E-Mail auf einen.')
      } else {
        setErrorReset('Kein solcher Account')
      }
    } catch (error) {
      //console.error(error);
      setErrorReset('Error connecting to server')
      setloggingIn(false)
    }
  }

  // Обновление данных
  const doUpdate = async (displayName) => {
    await AsyncStorage.getItem('userProfile')
      .then((data) => {
        data = JSON.parse(data)

        // Новые данные
        data.display_name = displayName

        AsyncStorage.setItem(
          'userProfile',
          JSON.stringify({
            isLoggedIn: data.isLoggedIn,
            authToken: data.authToken,
            id: data.id,
            name: data.name,
            avatar: data.avatar,
            email: data.email,
            display_name: data.display_name,
          })
        )

        setUserProfile({
          isLoggedIn: data.isLoggedIn,
          authToken: data.authToken,
          id: data.id,
          name: data.name,
          avatar: data.avatar,
          email: data.email,
          display_name: data.display_name,
        })
      })
      .done()
  }

  // Доступ к данным
  const wContext = {
    userProfile: userProfile,
    loggingIn: loggingIn,
    error: error,
    successReset: successReset,
    errorReset: errorReset,
    doSome: () => {
      doSome()
    },
    doLogin: (email, password) => {
      doLogin(email, password)
    },
    doLogout: () => {
      doLogout()
    },
    doReset: (email) => {
      doReset(email)
    },
    doUpdate: (displayName) => {
      doUpdate(displayName)
    },
  }

  if (isLoading) {
    // Checking if already logged in
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator animating={true} size="large" />
      </View>
    )
  }

  return (
    <mainContext.Provider value={wContext}>
      <NavigationContainer initialRouteName="Greeting">
        {isLogged == false ? <StackAuth /> : <StackNav />}
      </NavigationContainer>
    </mainContext.Provider>
  )
}
