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
import { RealTrendDepot } from './realDepot'
import { DepotWatchlist } from './watchlist'
import { SignaleTrendDepot } from './signale'
import { ClubtreffenDepot } from './clubtreffen'
import { StartseiteTrendDepotPage } from './startseiteTrendDepotPage'

const Tab = createMaterialTopTabNavigator()

export function TrendDepot() {
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
        tabBarItemStyle: { width: 'auto' },
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#ACB3BF',
        tabBarIndicatorStyle: {
          backgroundColor: '#FF741F',
        },
        tabBarLabelStyle: {
          fontFamily: 'ub-medium',
          textTransform: 'none',
          fontSize: 14,
        },
      }}
    >
      <Tab.Screen
        name="Startseite"
        options={{ unmountOnBlur: true }}
        component={StartseiteTrendDepotPage}
      />
      <Tab.Screen
        name="Depot"
        options={{ unmountOnBlur: true }}
        component={RealTrendDepot}
      />
      <Tab.Screen
        name="Watchlist"
        options={{ unmountOnBlur: true }}
        component={DepotWatchlist}
      />
      <Tab.Screen
        name="Signale"
        options={{ unmountOnBlur: true }}
        component={SignaleTrendDepot}
      />
      <Tab.Screen
        name="Clubtreffen"
        options={{ unmountOnBlur: true }}
        component={ClubtreffenDepot}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})
