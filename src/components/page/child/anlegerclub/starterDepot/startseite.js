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
import { StartseiteDepotPage } from './startseiteDepotPage'
import { AktieDesMonats } from './aktieDesMonats'
import { RealDepot } from './realDepot'
import { DaxMillionar } from './daxMillionar'
import { RealTimeSignale } from './realTimeSignale'

const Tab = createMaterialTopTabNavigator()

export function StarterDepot() {
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
        component={StartseiteDepotPage}
      />
      <Tab.Screen
        name="Aktie des monats"
        options={{ unmountOnBlur: true }}
        component={AktieDesMonats}
      />
      <Tab.Screen
        name="Depot"
        options={{ unmountOnBlur: true }}
        component={RealDepot}
      />
      <Tab.Screen
        name="Dax millionär"
        options={{ unmountOnBlur: true }}
        component={DaxMillionar}
      />
      <Tab.Screen
        name="Trade signale"
        options={{ unmountOnBlur: true }}
        component={RealTimeSignale}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})
