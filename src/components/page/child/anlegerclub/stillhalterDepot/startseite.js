import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Image,
  RefreshControl,
} from 'react-native'
import { gStyle } from '../../../../../styles/style'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { RealStillhalterDepot } from './realDepot'
import { StillhalterWatchlist } from './watchlist'
import { SignaleStillhalter } from './signale'
import { ClubtreffenStillhalter } from './clubtreffen'
import { StartseiteStillhalterDepotPage } from './startseiteStillhalterDepotPage'

const Tab = createMaterialTopTabNavigator()

export function StillhalterDepot() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorContainerStyle: {
          borderBottomWidth: 1,
          borderBottomColor: '#D8D8D8',
        },
        tabBarStyle: {
          elevation: 0,
          shadowOpacity: 0,
          backgroundColor: '#454A4F',
        },
        tabBarScrollEnabled: true,
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#ACB3BF',
        tabBarIndicatorStyle: {
          backgroundColor: '#FF741F',
        },
        tabBarItemStyle: { width: 'auto' },
        tabBarLabelStyle: {
          fontFamily: 'ub-medium',
          textTransform: 'none',
          fontSize: 14,
        },
      }}
    >
      <Tab.Screen
        name="Startseite"
        component={StartseiteStillhalterDepotPage}
      />
      <Tab.Screen
        name="Depot"
        options={{ unmountOnBlur: true }}
        component={RealStillhalterDepot}
      />
      <Tab.Screen
        name="Watchlist"
        options={{ unmountOnBlur: true }}
        component={StillhalterWatchlist}
      />
      <Tab.Screen
        name="Signale"
        options={{ unmountOnBlur: true }}
        component={SignaleStillhalter}
      />
      <Tab.Screen
        name="Clubtreffen"
        options={{ unmountOnBlur: true }}
        component={ClubtreffenStillhalter}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})
