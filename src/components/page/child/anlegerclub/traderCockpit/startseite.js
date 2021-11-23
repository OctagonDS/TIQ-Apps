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
import { Startseite } from '../startseite'
import { StartseiteTraderCockpitPage } from './startseiteTraderCockpitPage'
import { СockpitPage } from './сockpitPage'
import { Commodities } from './commodities'
import { Indizes } from './indizes'
import { Forex } from './forex'
import { Krypto } from './krypto'
import { Signale } from './signale'

const Tab = createMaterialTopTabNavigator()

export function TraderCockpit() {
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
        component={StartseiteTraderCockpitPage}
      />
      <Tab.Screen
        name="Cockpit"
        options={{ unmountOnBlur: true }}
        component={СockpitPage}
      />
      <Tab.Screen
        name="Commodities"
        options={{ unmountOnBlur: true }}
        component={Commodities}
      />
      <Tab.Screen
        name="Indizes"
        options={{ unmountOnBlur: true }}
        component={Indizes}
      />
      <Tab.Screen
        name="Forex"
        options={{ unmountOnBlur: true }}
        component={Forex}
      />
      <Tab.Screen
        name="Krypto"
        options={{ unmountOnBlur: true }}
        component={Krypto}
      />
      <Tab.Screen
        name="Signale"
        options={{ unmountOnBlur: true }}
        component={Signale}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})
