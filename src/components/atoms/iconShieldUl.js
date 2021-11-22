import React from 'react'
import { View, StyleSheet } from 'react-native'
import Svg, { Path } from 'react-native-svg'

export const IconShieldUl = (props) => {
  return (
    <View>
      <Svg
        width={30}
        height={30}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path
          d="M23.295 7.902L15.63 4.617a1.6 1.6 0 00-1.26 0L6.705 7.902a1.6 1.6 0 00-.957 1.67l.863 6.903a6.6 6.6 0 002.324 4.252l5.04 4.2a1.6 1.6 0 002.05 0l5.04-4.2a6.6 6.6 0 002.324-4.252l.863-6.904a1.6 1.6 0 00-.957-1.669z"
          // fill="#7E869E"
          fillOpacity={0.25}
          stroke="#FF741F"
          strokeWidth={1.4}
          strokeLinecap="round"
        />
        <Path
          d="M11.25 15l3.319 3.319a.5.5 0 00.77-.076L20 11.25"
          stroke="#FF741F"
          strokeWidth={1.4}
          strokeLinecap="round"
        />
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({})
