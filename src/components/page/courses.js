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
import { CourseSlideOne } from '../organisms/courses/courseSlideOne'

// const wait = (timeout) => {
//   return new Promise((resolve) => setTimeout(resolve, timeout))
// }

// function HomeScreen({ navigation }) {
//   const [isLoading, setLoading] = useState(true)
//   const [data, setData] = useState([])

//   const [refreshing, setRefreshing] = React.useState(false)

//   const url = 'https://fe20295.online-server.cloud/api/v1/courses'

//   const getCourses = async () => {
//     try {
//       const response = await fetch(url, {
//         method: 'GET',
//         headers: {
//           Accept: 'application/json',
//           'Content-Type': 'application/json',
//         },
//       })
//       const json = await response.json()
//       setData(json.data)
//     } catch (error) {
//       console.error(error)
//     } finally {
//       setLoading(false)
//     }
//   }
//   const onRefresh = React.useCallback(() => {
//     getCourses(true)
//     wait(2000).then(() => getCourses(false))
//   }, [])

//   useEffect(() => {
//     getCourses()
//   }, [])

//   return (
//     <ScrollView
//       style={{ flex: 1, backgroundColor: '#fff' }}
//       refreshControl={
//         <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
//       }
//     >
//       <View
//         style={{
//           margin: '2%',
//           marginBottom: '25%',
//           marginTop: '10%',
//           alignItems: 'center',
//         }}
//       >
//         {isLoading ? (
//           <ActivityIndicator />
//         ) : (
//           <FlatList
//             data={data}
//             numColumns={2}
//             keyExtractor={({ id }, index) => id}
//             renderItem={({ item }) => (
//               <View style={{ alignItems: 'center' }}>
//                 <Image
//                   style={{ width: 150, height: 210, marginRight: '3%' }}
//                   source={{
//                     uri: `https://fe20295.online-server.cloud/storage/${item.image_сourses}`,
//                   }}
//                 />
//                 <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
//                   {item.title}
//                 </Text>
//               </View>
//             )}
//           />
//         )}
//       </View>
//     </ScrollView>
//   )
// }

function SettingsScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}
    >
      {/* <Text>Настройки!</Text> */}
    </View>
  )
}

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
      <Tab.Screen name="Bezahlte Kurse" component={SettingsScreen} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})
