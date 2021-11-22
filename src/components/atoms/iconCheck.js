import React from 'react'
import { View, StyleSheet } from 'react-native'
import Svg, { Path, Circle } from 'react-native-svg'

export const IconCheck = (props) => {
  return (
    <View>
      <Svg
        width={34}
        height={34}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Circle cx={17} cy={17} fill="#FF741F" fillOpacity={0.25} r={16.5} />
        <Path
          d="M7.571 14.643L17 21.714 33.5.5"
          stroke="#FF741F"
          strokeWidth={3}
        />
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({})
