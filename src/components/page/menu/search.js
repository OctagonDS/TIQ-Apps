import React, { useState, useContext, useEffect } from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native'
import { gStyle } from '../../../styles/style'
import mainContext from '../../../store/context/context'
import { IconSearch } from '../../atoms/iconSearch'

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout))
}

export const SearchModal = ({ props, navigation }) => {
  const [isLoading, setLoading] = useState(true)
  const [query, setQuery] = useState('')
  const [dataCourses, setDataCourses] = useState([])
  const [dataKey, setDataKey] = useState([])
  const [dataNo, setDataNo] = useState(false)
  const [no, setNo] = useState(true)
  const { userProfile } = useContext(mainContext)

  const getSearch = async (query) => {
    try {
      const response = await fetch(
        `https://fe20295.online-server.cloud/api/v1/search?query=${query}`,
        {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      )
      const json = await response.json()
      setDataKey(json.key)
      setDataCourses(json.results_course)
      if (
        json.results_course.length === 0 &&
        json.results_lesson.length === 0
      ) {
        setDataNo(true)
      } else {
        setDataNo(false)
      }
      !query.trim() ? setNo(true) : setNo(false)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <View style={[gStyle.main, { alignContent: 'center' }]}>
      <Text style={styles.title}>Suche</Text>
      <View
        style={{
          flexDirection: 'row',
          marginTop: '7%',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
      >
        <TextInput
          style={styles.input}
          placeholder="Was suchen wir?"
          onChangeText={(query) => setQuery(query)}
          autoCapitalize="none"
          autoCompleteType="off"
          autoCorrect={false}
        />
        <View>
          <TouchableOpacity
            onPress={() => {
              getSearch(query)
            }}
          >
            <IconSearch fill="#FF741F" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        {no ? (
          <Text style={styles.noQuery}>spezifizieren Sie Ihre Suchanfrage</Text>
        ) : dataNo ? (
          <View>
            <Text style={styles.noQuery}>Es wurden keine Ergebnisse</Text>
            <Text style={[styles.noQuery, { marginTop: 0 }]}>
              für "{dataKey}" gefunden.
            </Text>
          </View>
        ) : (
          <View style={{ flex: 1 }}>
            <Text
              style={{
                marginVertical: 10,
                color: '#ACB3BF',
                fontFamily: 'ub-reg',
                fontSize: 13,
                paddingLeft: '10%',
              }}
            >
              Gefunden auf Anfrage "{dataKey}"
            </Text>
            <ScrollView
              contentContainerStyle={{
                paddingBottom: 10,
                paddingTop: 10,
              }}
            >
              <Text
                style={{
                  fontFamily: 'ub-reg',
                  fontSize: 14,
                  marginLeft: 25,
                  color: '#4E4D4D',
                }}
              >
                Kurse:{' '}
                <Text style={{ fontFamily: 'ub-bold', color: '#FF741F' }}>
                  {dataCourses.length}
                </Text>
              </Text>
              {dataCourses.map((userData) => (
                <View
                  key={userData.id}
                  style={{
                    flexDirection: 'row',
                    marginTop: 20,
                    justifyContent: 'flex-start',
                    marginHorizontal: 20,
                    alignItems: 'center',
                  }}
                >
                  <Image
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 25,
                    }}
                    resizeMode="cover"
                    source={{
                      uri: `https://fe20295.online-server.cloud/storage/${userData.image_сourses}`,
                    }}
                  />
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('Course', {
                        screen: 'draweModules',
                        params: {
                          itemId: userData.id,
                        },
                      })
                    }
                  >
                    <Text
                      style={{
                        fontSize: 17,
                        width: '80%',
                        fontFamily: 'ub-reg',
                        color: '#FF741F',
                        marginLeft: 10,
                        // marginTop: 25,
                      }}
                    >
                      {userData.title}
                    </Text>
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
          </View>
        )}
      </View>
    </View>
  )
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
    // marginLeft: '5%',
    height: 50,
    borderRadius: 7,
    fontSize: 18,
    paddingLeft: 10,
  },
  noQuery: {
    textAlign: 'center',
    marginTop: 35,
    fontFamily: 'ub-reg',
    fontSize: 17,
    color: '#ACB3BF',
  },
})
