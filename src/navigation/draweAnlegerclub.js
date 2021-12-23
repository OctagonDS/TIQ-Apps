import React, { useContext } from 'react'
import { View, Share, TouchableOpacity } from 'react-native'
import {
  DrawerActions,
  useNavigation,
  useFocusEffect,
} from '@react-navigation/native'
import { CustomDrawer } from '../components/organisms/customDrawer'
import mainContext from '../store/context/context'

import { IconBurger } from '../components/atoms/iconBurger'
import { IconSearch } from '../components/atoms/iconSearch'
import { IconRef } from '../components/atoms/iconRef'
import { ArrowLeftScreen } from '../components/atoms/arrowLeftScreen'

import { Anleger } from '../components/page/anlegerclub'
import { StarterDepot } from '../components/page/child/anlegerclub/starterDepot/startseite'
import { TrendDepot } from '../components/page/child/anlegerclub/trendDepot/startseite'
import { TraderCockpit } from '../components/page/child/anlegerclub/traderCockpit/startseite'
import { StillhalterDepot } from '../components/page/child/anlegerclub/stillhalterDepot/startseite'
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

export function DraweAnleger() {
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
        name="AnlegerDrawer"
        component={Anleger}
        options={{
          title: 'Анлегер клуб',
        }}
      />
      <Drawer.Screen
        name="StarterDepot"
        component={StarterDepot}
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
          title: 'Starter Depot',
        }}
      />
      <Drawer.Screen
        name="TraderCockpit"
        component={TraderCockpit}
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
          title: 'Starter Depot',
        }}
      />
      <Drawer.Screen
        name="TrendDepot"
        component={TrendDepot}
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
          title: 'Starter Depot',
        }}
      />
      <Drawer.Screen
        name="StillhalterDepot"
        component={StillhalterDepot}
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
          title: 'Starter Depot',
        }}
      />
    </Drawer.Navigator>
  )
}
