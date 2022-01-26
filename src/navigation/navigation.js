import React, { useEffect, useState, useContext, useMemo } from 'react'
import {
  Platform,
  TouchableOpacity,
  View,
  Text,
  ActivityIndicator,
  Alert,
} from 'react-native'
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import base64 from 'react-native-base64'

import { IconCourses } from '../components/atoms/iconCurses'
import { IconMentor } from '../components/atoms/iconMentor'
import { Iconfeedback } from '../components/atoms/iconFeedback'
import IconAnleger from '../components/atoms/iconAnleger'
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
import { ProfilePage } from '../components/page/menu/profile'
import { SuccessScale } from '../components/page/menu/successScale'
import { SearchModal } from '../components/page/menu/search'
import { FavoritPage } from '../components/page/menu/favorites'
import { FaqPage } from '../components/page/menu/faq'
import { Modules } from '../components/page/child/courses/module'
import { FeedbackForm } from '../components/page/child/feedbackForm'

import { loginUrl } from '../store/const/const'
import { resetUrl } from '../store/const/constReset'
import { signUpUrl, signUpUrlAdmin } from '../store/const/constSignUp'
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
    </Stack.Navigator>
  )
}

function StackNav() {
  const { countUnread, doCountNot, userProfile } = useContext(mainContext)

  useEffect(() => {
    if (userProfile && userProfile !== null) {
      doCountNot()
      timer = setInterval(async () => await doCountNot(), 60000)
    } else {
      clearInterval(timer)
    }
    return () => {
      clearInterval(timer)
    }
  }, [userProfile])

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
        <Stack.Screen
          name="FeedbackForm"
          component={FeedbackForm}
          options={{
            title: 'Suche',
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  )
}

function MyTabs() {
  const { countUnread, doCountNot, userProfile } = useContext(mainContext)

  // useMemo(() => {
  //   doCountNot()
  //   timer = setInterval(async () => await doCountNot(), 60000)
  //   return () => {
  //     clearInterval(timer)
  //   }
  // }, [])

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
          tabBarHideOnKeyboard: true,
          // unmountOnBlur: true,
          tabBarLabel: 'Курсы',
          tabBarIcon: ({ focused }) => <IconCourses focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Mentor"
        component={DraweMentor}
        options={{
          tabBarHideOnKeyboard: true,
          tabBarLabel: 'Ментор',
          tabBarIcon: ({ focused }) => <IconMentor focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Feedback"
        component={DraweFeedback}
        options={{
          tabBarHideOnKeyboard: true,
          tabBarLabel: 'Поддержка',
          tabBarIcon: ({ focused }) => <Iconfeedback focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Anleger"
        component={DraweAnleger}
        options={{
          // unmountOnBlur: true,
          tabBarHideOnKeyboard: true,
          tabBarLabel: 'Анлегер клуб',
          tabBarIcon: ({ focused }) => <IconAnleger focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={DraweNotifications}
        options={{
          tabBarHideOnKeyboard: true,
          tabBarLabel: 'Уведомления',
          tabBarBadge:
            countUnread && countUnread.countUnread === 0
              ? undefined
              : countUnread && countUnread.countUnread,
          tabBarBadgeStyle: { marginTop: 10 },
          tabBarIcon: ({ focused }) => <IconNot focused={focused} />,
        }}
      />
    </Tab.Navigator>
  )
}

function Navigations() {
  const [isLoading, setIsLoading] = useState(true)
  const [isLogged, setIsLogged] = useState(false)
  const [userToken, setUserToken] = useState(null)
  const [userProfile, setUserProfile] = useState(null)
  const [countUnread, setCountUnread] = useState(null)
  const [loggingIn, setloggingIn] = useState(false)
  const [error, setError] = useState(null)
  const [errorReset, setErrorReset] = useState(null)
  const [errorUp, setErrorUp] = useState(null)
  const [successReset, setSuccessReset] = useState(null)
  const [successUp, setSuccessUp] = useState(null)
  const [successEmail, setSuccessEmail] = useState(null)

  useEffect(() => {
    AsyncStorage.getItem('userProfile').then((value) => {
      if (value) {
        setUserProfile(JSON.parse(value)),
          setIsLoading(false),
          setIsLogged(true)
        UniqueVisits(JSON.parse(value).idAdmin)
        doUpdateTerms(JSON.parse(value).email)
      } else {
        setUserProfile(null), setIsLoading(false), setIsLogged(false)
      }
    })
  }, [])

  // Количество уведомлений
  const doCountNot = async () => {
    let showHeaders = new Headers()
    showHeaders.append('Accept', 'application/json')
    showHeaders.append('Content-Type', 'application/json')

    let responseCountNot = await fetch(
      `https://fe20295.online-server.cloud/api/v1/notifications/count/${
        userProfile && userProfile.idAdmin
      }`,
      {
        method: 'GET',
        headers: showHeaders,
      }
    )
    let jsonCountNot = await responseCountNot.json()
    // console.log(jsonCountNot)
    // console.log(userProfile)
    await AsyncStorage.getItem('countUnread')
      .then((data) => {
        data = JSON.parse(data)

        // Новые данные
        data.countUnread = jsonCountNot && jsonCountNot.countUnread

        AsyncStorage.setItem(
          'countUnread',
          JSON.stringify({
            countUnread: data.countUnread,
          })
        )
        setCountUnread({
          countUnread: data.countUnread,
        })
      })
      .done()
  }

  // Подсчет уникальных визитов

  const UniqueVisits = async (userid) => {
    const urlVisit =
      'https://fe20295.online-server.cloud/api/v1/visit/visit_user'
    var myHeaders = new Headers()
    myHeaders.append('Accept', 'application/json')
    myHeaders.append('Content-Type', 'application/json')

    var raw = JSON.stringify({
      user_id: userid,
    })

    try {
      const responseVisit = await fetch(urlVisit, {
        method: 'POST',
        headers: myHeaders,
        body: raw,
      })
      const jsonVisit = await responseVisit.json()
      // console.log(jsonVisit)
    } catch (error) {
      console.error(error)
    }
  }

  // Выход

  const doLogout = async () => {
    try {
      await AsyncStorage.removeItem('userProfile')
      await AsyncStorage.removeItem('countUnread')
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

    let showHeaders = new Headers()
    showHeaders.append('Accept', 'application/json')
    showHeaders.append('Content-Type', 'application/json')

    // Квентин
    let qnHeaders = new Headers()
    qnHeaders.append(
      'Authorization',
      'Bearer fcvJCBq0XY-JAj34UoyvR3QygbDF2LE8CfxR0gJQjuk'
    )
    qnHeaders.append('Content-Type', 'application/json')

    let formData = new FormData()
    formData.append('type', 'login')
    formData.append('email', email)
    formData.append('password', password)
    try {
      // Автризация через WP
      let response = await fetch(loginUrl, {
        method: 'POST',
        body: formData,
      })
      let json = await response.json()

      // Проверка пользователя в Админке
      let responseShow = await fetch(
        `https://fe20295.online-server.cloud/api/v1/userapp/show/${json.email}`,
        {
          method: 'GET',
          headers: showHeaders,
        }
      )
      let jsonShow = await responseShow.json()

      let responseCountNot = await fetch(
        `https://fe20295.online-server.cloud/api/v1/notifications/count/${jsonShow.data.id}`,
        {
          method: 'GET',
          headers: showHeaders,
        }
      )
      let jsonCountNot = await responseCountNot.json()

      let responseQuentId = await fetch(
        `https://q0ydly.eu-2.quentn.com/public/api/v1/contact/${email}`,
        {
          method: 'GET',
          headers: qnHeaders,
        }
      )
      let jsonQnId = await responseQuentId.json()

      let responseQuentTerms = await fetch(
        `https://q0ydly.eu-2.quentn.com/public/api/v1/contact/${jsonQnId[0].id}/terms`,
        {
          method: 'GET',
          headers: qnHeaders,
        }
      )
      let jsonQnTerms = await responseQuentTerms.json()

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
              idAdmin: jsonShow.data.id,
              wp_user: jsonShow.data.wp_user,
              user_term: jsonQnTerms,
            })
          )
          await AsyncStorage.setItem(
            'countUnread',
            JSON.stringify({
              countUnread: jsonCountNot.countUnread,
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
          idAdmin: jsonShow.data.id,
          wp_user: jsonShow.data.wp_user,
          user_term: jsonQnTerms,
        })
        setCountUnread({
          countUnread: jsonCountNot.countUnread,
        })
        setIsLogged(true)
        setUserProfile({
          isLoggedIn: json.status,
          authToken: json.token,
          id: json.id,
          name: json.name,
          avatar: json.avatar,
          email: json.email,
          display_name: json.display_name,
          idAdmin: jsonShow.data.id,
          wp_user: jsonShow.data.wp_user,
          user_term: jsonQnTerms,
        })
        setCountUnread({
          countUnread: jsonCountNot.countUnread,
        })
        setUserToken(json.token)
        UniqueVisits(jsonShow.data.id)
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

  // Регистрация

  const doSingUp = async (email, name, phoneNumber) => {
    //console.log(email + '...' + password);
    setloggingIn(false)
    setErrorUp(null)
    setSuccessUp(null)

    // Квентин и WP
    let myHeaders = new Headers()
    myHeaders.append(
      'Authorization',
      'Bearer fcvJCBq0XY-JAj34UoyvR3QygbDF2LE8CfxR0gJQjuk'
    )
    myHeaders.append('Content-Type', 'application/json')
    let raw = JSON.stringify({
      contact: {
        first_name: name,
        mail: email,
        phone: phoneNumber,
        duplicate_check_method: 'email',
        duplicate_merge_method: 'update_add',
        terms: [280],
      },
    })

    // Admin
    let adminHeaders = new Headers()
    adminHeaders.append('Accept', 'application/json')
    adminHeaders.append('Content-Type', 'application/json')
    let rawAdmin = JSON.stringify({
      name: name,
      email: email,
      phone_number: phoneNumber,
    })

    try {
      let dubl = await fetch(
        `https://q0ydly.eu-2.quentn.com/public/api/v1/contact/${email}`,
        {
          method: 'GET',
          headers: myHeaders,
        }
      )
      let jsondubl = await dubl.json()
      if (email == null || name == null || phoneNumber == null) {
        setErrorUp('Nicht alle Felder sind ausgefüllt')
      } else if (jsondubl.error == true) {
        try {
          let response = await fetch(signUpUrl, {
            method: 'POST',
            headers: myHeaders,
            body: raw,
          })
          let json = await response.json()

          let responseAdmin = await fetch(signUpUrlAdmin, {
            method: 'POST',
            headers: adminHeaders,
            body: rawAdmin,
          })
          let jsonAdmin = await responseAdmin.json()
          setSuccessUp(
            'Die Zugangsdaten zum App kommen per E-Mail. Dafür brauchen wir Deine Genehmigung.'
          )
        } catch (error) {
          //console.error(error);
          setError('Error connecting to server')
          setloggingIn(false)
        }
      } else {
        setErrorUp(
          'Ein Benutzer mit derselben E-Mail-Adresse existiert bereits'
        )
      }
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
  const doUpdate = async (displayName, emailAuth) => {
    var myHeaders = new Headers()
    myHeaders.append(
      'Authorization',
      'Basic ' +
        base64.encode(
          'accountas@mail.ru' + ':' + 'WX63 sbgi fPdP nZzR CnqS pII7'
        )
    )
    myHeaders.append('Content-Type', 'application/json')
    myHeaders.append(
      'Cookie',
      'SSESSe8c55d4a74dd4da51d62b6d4207298c0=fa38bd2d825f2bacefadaee2fbbad2fc; ncore_session=BhctmLUbtpnfm9L8JoMEXbdCWkU4cd; ppwp_wp_session=672e48f1877d6cb2531df292d22fbf23%7C%7C1637223544%7C%7C1637223184'
    )
    // console.log(userProfile)
    var raw = JSON.stringify({
      name: !displayName.trim() ? userProfile.display_name : displayName,
      email: !emailAuth.trim() ? userProfile.email : emailAuth,
    })

    let response = await fetch(
      `https://kurse.traderiq.net/wp-json/wp/v2/users/${userProfile.id}`,
      {
        method: 'POST',
        headers: myHeaders,
        body: raw,
      }
    )
    let json = await response.json()

    // console.log(json.data)
    if (json.data != undefined) {
      Alert.alert('Ooops!', 'E-Mail existiert bereits')
      return
    } else {
      await AsyncStorage.getItem('userProfile')
        .then((data) => {
          data = JSON.parse(data)

          // Новые данные
          data.display_name = !displayName.trim() ? json.name : displayName
          data.email = !emailAuth.trim() ? json.email : emailAuth

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
              idAdmin: data.idAdmin,
              wp_user: data.wp_user,
              user_term: data.user_term,
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
            idAdmin: data.idAdmin,
            wp_user: data.wp_user,
            user_term: data.user_term,
          })
        })
        .done()
      setSuccessEmail('Account was updated successfully.')
    }
  }

  // Обновление тегов
  const doUpdateTerms = async (mailUserData) => {
    // Квентин
    let qnHeaders = new Headers()
    let mailUser
    qnHeaders.append(
      'Authorization',
      'Bearer fcvJCBq0XY-JAj34UoyvR3QygbDF2LE8CfxR0gJQjuk'
    )
    qnHeaders.append('Content-Type', 'application/json')

    if (userProfile && userProfile !== null) {
      mailUser = userProfile && userProfile.email
    } else {
      mailUser = mailUserData && mailUserData
    }
    // console.log(mailUser)
    let responseQuentId = await fetch(
      `https://q0ydly.eu-2.quentn.com/public/api/v1/contact/${mailUser}`,
      {
        method: 'GET',
        headers: qnHeaders,
      }
    )
    let jsonQnId = await responseQuentId.json()
    // console.log(userProfile)
    let responseQuentTerms = await fetch(
      `https://q0ydly.eu-2.quentn.com/public/api/v1/contact/${
        jsonQnId && jsonQnId[0].id
      }/terms`,
      {
        method: 'GET',
        headers: qnHeaders,
      }
    )
    let jsonQnTerms = await responseQuentTerms.json()

    // console.log(jsonQnTerms)

    try {
      await AsyncStorage.getItem('userProfile')
        .then((data) => {
          data = JSON.parse(data)
          // Новые данные
          data.user_term = jsonQnTerms && jsonQnTerms
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
              idAdmin: data.idAdmin,
              wp_user: data.wp_user,
              user_term: data.user_term,
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
            idAdmin: data.idAdmin,
            wp_user: data.wp_user,
            user_term: data.user_term,
          })
        })
        .done()
    } catch {
      setError('Error storing data on device')
    }
  }

  // Доступ к данным
  const wContext = {
    userProfile: userProfile,
    loggingIn: loggingIn,
    error: error,
    successReset: successReset,
    errorReset: errorReset,
    successUp: successUp,
    errorUp: errorUp,
    successEmail: successEmail,
    setSuccessEmail: setSuccessEmail,
    countUnread: countUnread,
    setCountUnread: setCountUnread,
    doSome: () => {
      doSome()
    },
    doLogin: (email, password) => {
      doLogin(email, password)
    },
    doSingUp: (email, name, phoneNumber) => {
      doSingUp(email, name, phoneNumber)
    },
    doLogout: () => {
      doLogout()
    },
    doCountNot: () => {
      doCountNot()
    },
    doReset: (email) => {
      doReset(email)
    },
    doUpdate: (displayName, emailAuth) => {
      doUpdate(displayName, emailAuth)
    },
    doUpdateTerms: () => {
      doUpdateTerms()
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

export default Navigations
