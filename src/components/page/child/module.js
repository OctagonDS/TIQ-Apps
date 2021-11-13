import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  ActivityIndicator,
  FlatList,
  Image,
  RefreshControl,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from 'react-native'
import { gStyle } from '../../../styles/style'

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout))
}
const image = require('../../../assets/img/black-geo.png')

export function Modules({ props, route }) {
  const { itemId } = route.params
  const { titleCourses } = route.params
  const { titleDescription } = route.params

  const url = `https://fe20295.online-server.cloud/api/v1/course/${JSON.stringify(
    itemId
  )}`

  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const [refreshing, setRefreshing] = React.useState(false)

  const getModules = async () => {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      const json = await response.json()
      setData(json.data.modules)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }
  const onRefresh = React.useCallback(() => {
    getModules(true)
    wait(2000).then(() => getModules(false))
  }, [])

  useEffect(() => {
    getModules()
  }, [])

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}
    >
      <View
        style={{
          // width: '100%',
          justifyContent: 'center',
        }}
      >
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={{
            // flex: 1,
            width: '95%',
            height: 164,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          imageStyle={{ borderRadius: 5 }}
        >
          <View>
            <Text style={{ color: '#fff' }}>
              {JSON.stringify(titleCourses)}
            </Text>
            <Text style={{ color: '#fff' }}>
              {JSON.stringify(titleDescription)}
            </Text>
          </View>
        </ImageBackground>
      </View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          numColumns={2}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          contentContainerStyle={{
            paddingTop: '2%',
            paddingBottom: Platform.OS === 'android' ? 72 : 110,
          }}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <View
              style={{
                alignItems: 'center',
                width: '50%',
                marginTop: 20,
                // marginBottom: 20,
                position: 'relative',
              }}
            >
              <Text>{item['id']}</Text>
              <Text>{item['title']}</Text>
            </View>
          )}
        />
      )}
    </View>
  )
  // return (
  //   <View style={[gStyle.main, { alignContent: 'center' }]}>
  //     <View>
  //       <Text>{url}</Text>
  //     </View>
  //   </View>
  // )
}

export const styles = StyleSheet.create({
  title: {
    fontFamily: 'ub-reg',
    fontSize: 40,
    color: '#545A60',
    alignSelf: 'center',
  },
  input: {
    borderWidth: 2,
    borderColor: '#FF741F',
    width: '80%',
    marginLeft: '10%',
    marginTop: '7%',
    height: 50,
    borderRadius: 7,
    fontSize: 18,
    paddingLeft: 10,
  },
})
