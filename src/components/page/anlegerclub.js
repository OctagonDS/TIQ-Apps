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
import { gStyle } from '../../styles/style'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { Startseite } from '../organisms/anlegerclub/startseite'

const Tab = createMaterialTopTabNavigator()

export function Anleger() {
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
        tabBarLabelStyle: {
          fontFamily: 'ub-medium',
          textTransform: 'none',
          fontSize: 14,
        },
      }}
    >
      <Tab.Screen name="Startseite" component={Startseite} />
      <Tab.Screen name="Starter depot" component={Startseite} />
      <Tab.Screen name="Trend depot" component={Startseite} />
      <Tab.Screen name="Stillhalter depot" component={Startseite} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})
