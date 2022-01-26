import React, { useEffect, useState, useContext } from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Platform,
  Animated,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native'
import { gStyle } from '../../../styles/style'
import mainContext from '../../../store/context/context'

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout))
}
const image = require('../../../assets/img/grey-geo.png')
const url = 'https://fe20295.online-server.cloud/api/v1/courses_progress'

export function SuccessScale({ props, navigation }) {
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [refreshing, setRefreshing] = React.useState(false)
  const { userProfile } = useContext(mainContext)

  const getCourses = async () => {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      const json = await response.json()
      setData(json.data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }
  const onRefresh = React.useCallback(() => {
    getCourses(true)
    wait(2000).then(() => getCourses(false))
  }, [])

  useEffect(() => {
    getCourses()
    return () => {
      setData([])
      setLoading(true)
    }
  }, [])

  return (
    <View style={gStyle.main}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data.filter(
            (item) =>
              item &&
              item.courseLessonsProgress.filter(
                (countProgress) =>
                  userProfile && userProfile.idAdmin === countProgress.id
              ).length !== 0
          )}
          numColumns={2}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          contentContainerStyle={{
            paddingTop: '2%',
            paddingBottom: Platform.OS === 'android' ? 30 : 60,
          }}
          keyExtractor={({ id }, index) => id.toString()}
          renderItem={({ item }) => (
            <View style={styles.courses}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Course', {
                    screen: 'draweModules',
                    params: {
                      itemId: item.id,
                    },
                  })
                }
                style={{ position: 'relative', width: 165, height: 165 }}
              >
                <ImageBackground
                  source={image}
                  resizeMode="cover"
                  style={styles.imageBack}
                  imageStyle={{ borderRadius: 5 }}
                >
                  <Image
                    style={styles.imageProduct}
                    source={{
                      uri: item.image_сourses,
                    }}
                  />
                </ImageBackground>
              </TouchableOpacity>
              <View style={{ width: 165, height: 60 }}>
                <View style={styles.progress}>
                  <View style={styles.progressBar}>
                    <Animated.View
                      style={
                        ([styles.progressBarLevel],
                        {
                          backgroundColor: '#FF741F',
                          width: `${
                            item.courseLessonsCount !== 0
                              ? (item.courseLessonsProgress.filter(
                                  (countProgress) =>
                                    userProfile &&
                                    userProfile.idAdmin === countProgress.id
                                ).length /
                                  item.courseLessonsCount) *
                                100
                              : item.courseLessonsCount
                          }%`,
                          borderRadius: 5,
                        })
                      }
                    />
                  </View>
                  <Text style={styles.percent}>
                    {item.courseLessonsCount !== 0
                      ? Math.round(
                          (item.courseLessonsProgress.filter(
                            (countProgress) =>
                              userProfile &&
                              userProfile.idAdmin === countProgress.id
                          ).length /
                            item.courseLessonsCount) *
                            100
                        )
                      : item.courseLessonsCount}
                    %
                  </Text>
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('Course', {
                        screen: 'draweModules',
                        params: {
                          itemId: item.id,
                        },
                      })
                    }
                  >
                    <Text style={styles.title}>{item.title}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  courses: {
    alignItems: 'center',
    width: '50%',
    marginTop: 20,
    // marginBottom: 20,
    position: 'relative',
  },
  progress: {
    flexDirection: 'row',
    width: 165,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  progressBar: {
    height: 10,
    width: '70%',
    backgroundColor: '#EEEEEE',
    borderRadius: 8,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  percent: {
    paddingRight: 10,
    fontFamily: 'ub-light',
    fontSize: 12,
    letterSpacing: -0.33,
  },
  progressBarLevel: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  title: {
    fontFamily: 'ub-reg',
    letterSpacing: -0.33,
    fontSize: 16,
    textAlign: 'left',
    lineHeight: 18.38,
    color: '#4E4D4D',
    fontStyle: 'normal',
    fontWeight: 'normal',
  },
  fireTop: {
    position: 'absolute',
    width: 34,
    height: 34,
    left: 0,
    bottom: 0,
    backgroundColor: '#FF741F',
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  imageProduct: {
    width: '95%',
    height: 153,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  imageBack: {
    flex: 1,
    width: 165,
    height: 165,
    borderRadius: 8,
    justifyContent: 'space-around',
  },
})
