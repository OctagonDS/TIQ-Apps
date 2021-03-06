import React, { useContext } from 'react'
import { View, Share, TouchableOpacity } from 'react-native'
import {
  DrawerActions,
  useNavigation,
  useFocusEffect,
} from '@react-navigation/native'
import { CustomDrawer } from '../components/organisms/customDrawer'
import { ArrowLeftScreen } from '../components/atoms/arrowLeftScreen'
import mainContext from '../store/context/context'

import { IconBurger } from '../components/atoms/iconBurger'
import { IconSearch } from '../components/atoms/iconSearch'
import { IconRef } from '../components/atoms/iconRef'

import { Courses } from '../components/page/courses'
import { Modules } from '../components/page/child/courses/module'
import { Lessons } from '../components/page/child/courses/lessons'

import { createDrawerNavigator } from '@react-navigation/drawer'

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
  const { userProfile } = useContext(mainContext)

  let urlRef = [
    `https://kurse.traderiq.net/optionen-kompass?affiliate=${
      userProfile && userProfile.name
    }`,
    `https://kurse.traderiq.net/pdf?affiliate=${
      userProfile && userProfile.name
    }`,
    `https://kurse.traderiq.net/geheimnisse-der-stillhalter-live?affiliate=${
      userProfile && userProfile.name
    }`,
  ]

  let randomNumber = Math.floor(Math.random() * urlRef.length)

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: urlRef[randomNumber],
      })
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <Drawer.Navigator
      // defaultStatus="open"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerPosition: 'right',
        drawerType: 'slide',
        drawerStyle: {
          backgroundImg: '#c6cbef',
          width: '80%',
        },
        headerStyle: { elevation: 0, shadowOpacity: 0 },
        headerTitleAlign: 'center',
        // headerShown: false,
        headerLeft: false,
        headerTitle: () => {
          const navigation = useNavigation()

          return (
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
              <IconSearch />
            </TouchableOpacity>
          )
        },
        headerRight: () => {
          const navigation = useNavigation()

          return (
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={onShare}>
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
          title: '??????????',
        }}
      />
      <Drawer.Screen
        name="draweModules"
        component={Modules}
        options={{
          unmountOnBlur: true,
          headerLeft: () => {
            const navigation = useNavigation()
            return (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <ArrowLeftScreen style={{ marginLeft: 10 }} />
              </TouchableOpacity>
            )
          },
          title: '????????????',
        }}
      />
      <Drawer.Screen
        name="Lessons"
        component={Lessons}
        options={{
          unmountOnBlur: true,
          headerLeft: () => {
            const navigation = useNavigation()
            return (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <ArrowLeftScreen style={{ marginLeft: 10 }} />
              </TouchableOpacity>
            )
          },
          title: '??????????',
        }}
      />
    </Drawer.Navigator>
  )
}
