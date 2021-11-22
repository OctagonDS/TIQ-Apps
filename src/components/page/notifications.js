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
  const [countNot, setCountNot] = useState([])

  const Count = async () => {
    return setCountNot([
      {
        id: 1,
        image:
          'https://fe20295.online-server.cloud/storage/images/XQqDqA8bCinXZXYpfvzlGVc8KTOf01IByfN7v6Tj.jpg',
        title: 'Пользователь Name ответил на ваш комментарий',
      },
      { id: 2, image: null, title: 'Скоро появится новый курс!' },
      {
        id: 3,
        image:
          'https://fe20295.online-server.cloud/storage/images/xQWnGjld0hQQixmedrYi5AucwqHbsYjbDxh9fJIV.png',
        title: 'Добавлен новый курс!',
      },
      {
        id: 4,
        image:
          'https://fe20295.online-server.cloud/storage/images/XQqDqA8bCinXZXYpfvzlGVc8KTOf01IByfN7v6Tj.jpg',
        title:
          'Пользователь Name ответил на ваш комментарий. Пользователь Name ответил на ваш комментарий',
      },
      { id: 5, image: null, title: 'Скоро появится новый курс!' },
      {
        id: 6,
        image:
          'https://fe20295.online-server.cloud/storage/images/xQWnGjld0hQQixmedrYi5AucwqHbsYjbDxh9fJIV.png',
        title: 'Добавлен новый курс!',
      },
    ])
  }

  useEffect(() => {
    Count()
  }, [])

  return (
    <View style={gStyle.main}>
      {countNot.length == 0 ? (
        <Text style={styles.not}>Sie haben keine neuen Benachrichtigungen</Text>
      ) : (
        <FlatList
          data={countNot}
          contentContainerStyle={{
            paddingBottom: Platform.OS === 'android' ? 72 : 110,
          }}
          ListHeaderComponent={
            <Text style={styles.not}>Neue Benachrichtigungen</Text>
          }
          keyExtractor={({ id }, index) => id.toString()}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                // alignItems: 'center',
                marginHorizontal: 10,
                marginVertical: 5,
                paddingHorizontal: 10,
                paddingVertical: 10,
              }}
            >
              <View>
                <Image
                  style={{ width: 50, height: 50, borderRadius: 25 }}
                  resizeMode="cover"
                  source={
                    item.image != null
                      ? { uri: item.image }
                      : require('../../assets/img/black-geo.png')
                  }
                />
              </View>
              <TouchableOpacity
                onPress={() =>
                  Alert.alert('Проверка', 'Кнопки', [
                    {
                      text: 'Позже',
                      onPress: () => console.log('Ask me later pressed'),
                    },
                    {
                      text: 'Купить',
                      onPress: () => console.log('Cancel Pressed'),
                    },
                  ])
                }
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
            </View>
          )}
        />
      )}
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
