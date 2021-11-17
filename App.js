import React, { useState } from 'react'
import { View } from 'react-native'
import * as Font from 'expo-font'
import { Navigations } from './src/navigation/navigation'

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
  })

export default function App() {
  const [font, setFont] = useState(true)

  return <Navigations />
}
