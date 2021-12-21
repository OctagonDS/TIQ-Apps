import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { gStyle } from '../../styles/style'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { CourseSlideOne } from '../page/child/courses/courseSlideOne'
import { CourseSlideTwo } from '../page/child/courses/courseSlideTwo'

const Tab = createMaterialTopTabNavigator()

export function Courses() {
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
        },
        tabBarActiveTintColor: '#FF741F',
        tabBarInactiveTintColor: '#545A60',
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
      <Tab.Screen name="Kostenlose Kurse" component={CourseSlideOne} />
      <Tab.Screen name="Bezahlte Kurse" component={CourseSlideTwo} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})
