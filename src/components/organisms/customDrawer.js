import React, { useContext } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Button,
  Share,
  Image,
  TouchableOpacity,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { IcoProfile } from '../atoms/iconProfile'
import { IcoSucces } from '../atoms/iconSuc'
import { IcoFire } from '../atoms/iconFire'
import { IcoFAQ } from '../atoms/iconFAQ'
import { IcoReferalMain } from '../atoms/iconRefer'
import { IcoOut } from '../atoms/iconOut'
import { IcoFacebook } from '../atoms/iconFacebook'
import { IcoInsta } from '../atoms/iconInst'
import { IcoYouTube } from '../atoms/iconYouTube'

import mainContext from '../../store/context/context'
import * as WebBrowser from 'expo-web-browser'

const image = require('../../assets/img/black-geo.png')
let avatar = require('../../assets/img/avatar2.jpg')
let UserName = 'UserName'

export function CustomDrawer() {
  const navigation = useNavigation()

  const { userProfile, loggingIn, doLogout } = useContext(mainContext)

  let urlRef = [
    `https://kurse.traderiq.net/optionen-kompass?affiliate=${
      userProfile && userProfile.name
    }`,
    `https://kurse.traderiq.net/pdf?affiliate=${
      userProfile && userProfile.name
    }`,
    `https://kurse.traderiq.net/geheimnisse-der-stillhalter-live?affiliate=${
      userProfile && userProfile.name
    }`,
  ]

  let randomNumber = Math.floor(Math.random() * urlRef.length)

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: urlRef[randomNumber],
      })
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <ImageBackground source={image} resizeMode="cover" style={{ flex: 1 }}>
      <View style={styles.header}>
        {/* <View style={styles.headerCenter}> */}
        <View style={styles.imageAvatarBack}>
          <View style={styles.imageAvatar}>
            <Image
              source={{
                uri: userProfile && userProfile.avatar,
              }}
              style={{ width: 65, height: 65 }}
              resizeMode="cover"
            />
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.userName}>
            {userProfile && userProfile.display_name}
          </Text>
        </View>
        {/* </View> */}
      </View>
      <View style={{ borderBottomColor: '#DADADA', borderBottomWidth: 1 }}>
        <View
          style={{
            alignItems: 'flex-end',
            marginRight: '5%',
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate('Profile')}
            style={{
              flexDirection: 'row',
              marginTop: '7%',
            }}
          >
            <Text style={[styles.textItem, { alignSelf: 'center' }]}>
              Profil
            </Text>
            <View style={{ marginLeft: 20 }}>
              <IcoProfile />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('SuccessScale')}
            style={{
              flexDirection: 'row',
              marginTop: '4%',
            }}
          >
            <Text style={[styles.textItem, { alignSelf: 'center' }]}>
              Erfolgsskala
            </Text>
            <View style={{ marginLeft: 20 }}>
              <IcoSucces />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Favorit')}
            style={{
              flexDirection: 'row',
              marginTop: '4%',
            }}
          >
            <Text style={[styles.textItem, { alignSelf: 'center' }]}>
              Favoriten
            </Text>
            <View style={{ marginLeft: 20 }}>
              <IcoFire />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('FAQ')}
            style={{
              flexDirection: 'row',
              marginTop: '4%',
            }}
          >
            <Text style={[styles.textItem, { alignSelf: 'center' }]}>FAQ</Text>
            <View style={{ marginLeft: 20 }}>
              <IcoFAQ />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => doLogout()}
            disabled={loggingIn}
            style={{
              flexDirection: 'row',
              marginTop: '15%',
              marginBottom: '7%',
            }}
          >
            <Text style={styles.textItem}>Log Out</Text>
            <View style={{ marginLeft: 20 }}>
              <IcoOut />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <View
          style={{
            alignItems: 'flex-end',
            marginRight: '5%',
          }}
        >
          <TouchableOpacity
            onPress={onShare}
            style={{
              flexDirection: 'row',
              marginTop: '12%',
            }}
          >
            <Text style={styles.textItem}>Teilen</Text>
            <View style={{ marginLeft: 20 }}>
              <IcoReferalMain />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          marginBottom: '40%',
        }}
      >
        <TouchableOpacity
          onPress={() => WebBrowser.openBrowserAsync('https://traderiq.net/')}
          style={{
            alignItems: 'center',
            marginTop: '15%',
          }}
        >
          <Text
            style={{ color: '#fff', fontFamily: 'ub-medium', fontSize: 20 }}
          >
            Trader IQ
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: '6%',
          }}
        >
          <TouchableOpacity
            // onPress={() => WebBrowser.openBrowserAsync("https://google.com")}
            style={{
              marginRight: '5%',
            }}
          >
            <Text
              style={{ color: '#fff', fontFamily: 'ub-medium', fontSize: 12 }}
            >
              AGB’s
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={() => WebBrowser.openBrowserAsync("https://google.com")}
            style={{}}
          >
            <Text
              style={{ color: '#fff', fontFamily: 'ub-medium', fontSize: 12 }}
            >
              Impressum
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={() => WebBrowser.openBrowserAsync("https://google.com")}
            style={{
              marginLeft: '5%',
            }}
          >
            <Text
              style={{ color: '#fff', fontFamily: 'ub-medium', fontSize: 12 }}
            >
              Datenschutz
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: '8%',
          }}
        >
          <TouchableOpacity
            onPress={() =>
              WebBrowser.openBrowserAsync('https://www.facebook.com/traderiq')
            }
            style={{
              marginRight: '10%',
            }}
          >
            <IcoFacebook />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              WebBrowser.openBrowserAsync(
                'https://www.instagram.com/mytraderiq/'
              )
            }
            style={{}}
          >
            <IcoInsta />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              WebBrowser.openBrowserAsync('https://www.youtube.com/user/GeldIQ')
            }
            style={{
              marginLeft: '10%',
            }}
          >
            <IcoYouTube />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  )
}

export const styles = StyleSheet.create({
  header: {
    justifyContent: 'space-between',
    height: '17%',
    alignItems: 'center',
    borderBottomColor: '#DADADA',
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 25,
  },
  headerCenter: {
    alignItems: 'center',
    marginBottom: 20,
    flexDirection: 'row',
  },
  imageAvatarBack: {
    width: 66,
    height: 66,
    borderRadius: 100,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageAvatar: {
    overflow: 'hidden',
    borderRadius: 100,
    width: 65,
    height: 65,
    backgroundColor: '#fff',
  },
  userName: {
    paddingLeft: 25,
    // marginRight: '5%',
    fontFamily: 'ub-medium',
    fontSize: 16,
    color: '#FF741F',
    // width: '50%',
  },
  textItem: {
    color: '#fff',
    fontFamily: 'ub-medium',
    fontSize: 17,
  },
})
