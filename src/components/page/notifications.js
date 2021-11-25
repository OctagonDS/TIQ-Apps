import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Platform,
  FlatList,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native'
import { gStyle } from '../../styles/style'

export const Notifications = (props) => {
  const [countNotMark, setCountNotMark] = useState([])
  const [countNot, setCountNot] = useState([])

  const CountMark = async () => {
    return setCountNotMark([
      {
        id: 1,
        image:
          'https://fe20295.online-server.cloud/storage/images/XQqDqA8bCinXZXYpfvzlGVc8KTOf01IByfN7v6Tj.jpg',
        title: 'Пользователь Name ответил на ваш комментарий',
        time: '1 день назад',
      },
      {
        id: 2,
        image: null,
        title: 'Скоро появится новый курс!',
        time: '2 дня назад',
      },
      {
        id: 3,
        image:
          'https://fe20295.online-server.cloud/storage/images/xQWnGjld0hQQixmedrYi5AucwqHbsYjbDxh9fJIV.png',
        title: 'Добавлен новый курс!',
        time: '5 дней назад',
      },
      {
        id: 4,
        image:
          'https://fe20295.online-server.cloud/storage/images/XQqDqA8bCinXZXYpfvzlGVc8KTOf01IByfN7v6Tj.jpg',
        title:
          'Пользователь Name ответил на ваш комментарий. Пользователь Name ответил на ваш комментарий',
        time: 'Давно',
      },
      {
        id: 5,
        image: null,
        title: 'Скоро появится новый курс!',
        time: 'Давно',
      },
      {
        id: 6,
        image:
          'https://fe20295.online-server.cloud/storage/images/xQWnGjld0hQQixmedrYi5AucwqHbsYjbDxh9fJIV.png',
        title: 'Добавлен новый курс!',
        time: 'Давно',
      },
      {
        id: 7,
        image:
          'https://fe20295.online-server.cloud/storage/images/XQqDqA8bCinXZXYpfvzlGVc8KTOf01IByfN7v6Tj.jpg',
        title: 'Пользователь Name ответил на ваш комментарий. ',
        time: 'Давно',
      },
      {
        id: 8,
        image:
          'https://fe20295.online-server.cloud/storage/images/xQWnGjld0hQQixmedrYi5AucwqHbsYjbDxh9fJIV.png',
        title: 'Добавлен новый курс!',
        time: 'Давно',
      },
      {
        id: 9,
        image:
          'https://fe20295.online-server.cloud/storage/images/XQqDqA8bCinXZXYpfvzlGVc8KTOf01IByfN7v6Tj.jpg',
        title:
          'Пользователь Name ответил на ваш комментарий. Пользователь Name ответил на ваш комментарий',
        time: 'Давно',
      },
    ])
  }

  const Count = async () => {
    return setCountNot([
      {
        id: 1,
        image:
          'https://fe20295.online-server.cloud/storage/images/XQqDqA8bCinXZXYpfvzlGVc8KTOf01IByfN7v6Tj.jpg',
        title: 'Пользователь Name ответил на ваш комментарий',
        time: '1 минуту назад',
      },
      {
        id: 2,
        image: null,
        title: 'Скоро появится новый курс!',
        time: '3 минуты назад',
      },
      {
        id: 3,
        image:
          'https://fe20295.online-server.cloud/storage/images/xQWnGjld0hQQixmedrYi5AucwqHbsYjbDxh9fJIV.png',
        title: 'Добавлен новый курс!',
        time: '5 минут назад',
      },
      {
        id: 4,
        image:
          'https://fe20295.online-server.cloud/storage/images/XQqDqA8bCinXZXYpfvzlGVc8KTOf01IByfN7v6Tj.jpg',
        title:
          'Пользователь Name ответил на ваш комментарий. Пользователь Name ответил на ваш комментарий',
        time: '10 минут назад',
      },
    ])
  }

  useEffect(() => {
    Count()
    CountMark()
  }, [])

  return (
    <View style={gStyle.main}>
      <FlatList
        data={countNot}
        ListHeaderComponent={
          <View style={{ marginTop: 20, marginBottom: 10 }}>
            <Text
              style={{
                textAlign: 'left',
                marginLeft: 15,
                fontSize: 16,
                fontFamily: 'ub-reg',
                color: 'rgba(130,141,153,0.7)',
              }}
            >
              Neue Benachrichtigungen
            </Text>
          </View>
        }
        ListFooterComponent={
          <FlatList
            data={countNotMark}
            ListHeaderComponent={
              <View style={{ marginVertical: 10 }}>
                <Text
                  style={{
                    textAlign: 'left',
                    marginLeft: 15,
                    fontSize: 16,
                    fontFamily: 'ub-reg',
                    color: 'rgba(130,141,153,0.7)',
                  }}
                >
                  Angesehen
                </Text>
              </View>
            }
            contentContainerStyle={{
              paddingBottom: Platform.OS === 'android' ? 72 : 110,
            }}
            keyExtractor={({ id }, index) => id.toString()}
            renderItem={({ item }) => (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  marginHorizontal: 15,
                  marginVertical: 0,
                  paddingVertical: 10,
                }}
              >
                <View>
                  <Image
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 25,
                      marginHorizontal: 5,
                    }}
                    resizeMode="cover"
                    source={
                      item.image != null
                        ? { uri: item.image }
                        : require('../../assets/img/grey-logo.jpg')
                    }
                  />
                </View>
                <View>
                  <TouchableOpacity
                    onPress={() => {}}
                    style={{
                      width: '82%',
                      paddingLeft: 5,
                      paddingRight: 10,
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: 'ub-reg',
                        fontSize: 15,
                        color: '#454A4F',
                      }}
                    >
                      {item.title}
                    </Text>
                  </TouchableOpacity>
                  <Text
                    style={{
                      paddingLeft: 5,
                      paddingRight: 10,
                      fontSize: 11,
                      marginTop: 4,
                      color: '#ACB3BF',
                    }}
                  >
                    {item.time}
                  </Text>
                </View>
              </View>
            )}
          />
        }
        contentContainerStyle={{
          paddingBottom: Platform.OS === 'android' ? 72 : 110,
        }}
        keyExtractor={({ id }, index) => id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              marginHorizontal: 15,
              marginVertical: 0,
              paddingVertical: 10,
            }}
          >
            <View>
              <Image
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  marginHorizontal: 5,
                }}
                resizeMode="cover"
                source={
                  item.image != null
                    ? { uri: item.image }
                    : require('../../assets/img/grey-logo.jpg')
                }
              />
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {}}
                style={{
                  width: '82%',
                  paddingLeft: 5,
                  paddingRight: 10,
                }}
              >
                <Text
                  style={{
                    fontFamily: 'ub-reg',
                    fontSize: 15,
                    color: '#454A4F',
                  }}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  paddingLeft: 5,
                  paddingRight: 10,
                  fontSize: 11,
                  marginTop: 4,
                  color: '#ACB3BF',
                }}
              >
                {item.time}
              </Text>
            </View>
          </View>
        )}
      />
      <ScrollView></ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  not: {
    textAlign: 'center',
    fontFamily: 'ub-reg',
    marginTop: '5%',
    fontSize: 20,
    marginBottom: 20,
    color: '#FF741F',
  },
})
