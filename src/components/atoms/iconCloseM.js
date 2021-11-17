import React from 'react'
import { View, StyleSheet } from 'react-native'
import Svg, { Path } from 'react-native-svg'

export const IconCloseModal = (props) => {
  return (
    <View>
      <Svg
        width={20}
        height={20}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path
          stroke="#fff"
          strokeWidth={3}
          d="M1.037 1.916l17.25 16.5M18.309 2.085L1.035 18.561"
        />
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({})
