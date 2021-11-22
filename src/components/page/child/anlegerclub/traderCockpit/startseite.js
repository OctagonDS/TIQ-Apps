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
        tabBarItemStyle: { width: 120 },
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
      <Tab.Screen name="Startseite" component={Startseite} />
      <Tab.Screen name="Cockpit" component={Startseite} />
      <Tab.Screen name="Commodities" component={Startseite} />
      <Tab.Screen name="Indizes" component={Startseite} />
      <Tab.Screen name="Forex" component={Startseite} />
      <Tab.Screen name="Krypto" component={Startseite} />
      <Tab.Screen name="Signale" component={Startseite} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})
