import React from "react"
import { View, StyleSheet } from "react-native"
import Svg, { Path, Circle } from "react-native-svg"

export const IconFeedbackPlus = (props) => {
  return (
    <View>
      <Svg
        width={65}
        height={65}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Circle
          cx={32.5}
          cy={32.5}
          r={24.375}
          fill="#FF741F"
          // fillOpacity={0.25}
          stroke="#FF741F"
          strokeWidth={2}
        />
        <Path
          d="M32.5 40.625v-16.25M40.625 32.5h-16.25"
          stroke="#fff"
          strokeWidth={2}
          strokeLinecap="round"
        />
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({})
