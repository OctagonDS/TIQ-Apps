import React, { useState } from 'react'
import { View } from 'react-native'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading'
import Navigations from './src/navigation/navigation'

const fonts = () =>
  Font.loadAsync({
    'ub-bold': require('./src/assets/fonts/Ubuntu-Bold.ttf'),
    'ub-bolditalic': require('./src/assets/fonts/Ubuntu-BoldItalic.ttf'),
    'ub-italic': require('./src/assets/fonts/Ubuntu-Italic.ttf'),
    'ub-light': require('./src/assets/fonts/Ubuntu-Light.ttf'),
    'ub-lightitalic': require('./src/assets/fonts/Ubuntu-LightItalic.ttf'),
    'ub-medium': require('./src/assets/fonts/Ubuntu-Medium.ttf'),
    'ub-mediumitalic': require('./src/assets/fonts/Ubuntu-MediumItalic.ttf'),
    'ub-reg': require('./src/assets/fonts/Ubuntu-Regular.ttf'),
    'os-light': require('./src/assets/fonts/OpenSans-Light.ttf'),
    'os-reg': require('./src/assets/fonts/OpenSans-Regular.ttf'),
    'os-medium': require('./src/assets/fonts/OpenSans-Medium.ttf'),
    'os-bold': require('./src/assets/fonts/OpenSans-Bold.ttf'),
  })

export default function App() {
  const [font, setFont] = useState(false)

  if (font) {
    return <Navigations />
  } else {
    return (
      <AppLoading
        startAsync={fonts}
        onFinish={() => setFont(true)}
        onError={console.warn}
      />
    )
  }
}
