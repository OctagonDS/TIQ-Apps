import React, { useContext, useState } from 'react'
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Platform,
  Image,
  Button,
  TextInput,
} from 'react-native'
import { gStyle } from '../../../styles/style'
import mainContext from '../../../store/context/context'

export const ProfilePage = (props) => {
  const [displayName, setDisplayName] = useState(null)
  const { userProfile, loggingIn, doLogout, doUpdate } = useContext(mainContext)

  return (
    <View style={gStyle.main}>
      <ScrollView>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ marginBottom: 20 }}>
            <Image
              style={{ width: 65, height: 65 }}
              resizeMode="cover"
              source={{
                uri: userProfile && userProfile.avatar,
              }}
            />
          </View>
          <Text style={{ color: '#000' }}>
            Привет {userProfile && userProfile.display_name}
          </Text>
          <Text style={{ color: '#000' }}>
            Login: {userProfile && userProfile.name}
          </Text>
          <Text>Email: {userProfile && userProfile.email}</Text>
          <View style={{ marginTop: 10 }}>
            <View style={{ marginTop: '8%' }}>
              <View style={{}}>
                <Text style={{ color: '#FF741F' }}>
                  Name <Text style={{ color: '#DA1414' }}>*</Text>
                </Text>
              </View>
              <TextInput
                style={{
                  backgroundColor: '#f1f1f1',
                  padding: 10,
                  width: 200,
                }}
                onChangeText={(displayName) => setDisplayName(displayName)}
                value={displayName}
                autoCapitalize="none"
                autoCompleteType="off"
                autoCorrect={false}
                disabled={loggingIn}
              />
            </View>
            <View style={{ marginTop: 10 }}>
              <Button
                title="Update"
                onPress={() => {
                  doUpdate(displayName)
                }}
                disabled={loggingIn}
              >
                Update From Wordpress
              </Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
