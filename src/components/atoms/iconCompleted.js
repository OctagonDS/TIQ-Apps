import React from 'react'
import { View, StyleSheet } from 'react-native'
import Svg, { Circle, Path } from 'react-native-svg'

export const IconCompleted = (props) => {
  return (
    <View>
      <Svg
        width={24}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Circle
          cx={12}
          cy={12}
          r={9}
          fill="#FF741F"
          fillOpacity={0.15}
          stroke="#E86312"
          strokeWidth={1.2}
        />
        <Path d="M8 12l3 3 5-6" stroke="#E86312" strokeWidth={1.2} />
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({})
