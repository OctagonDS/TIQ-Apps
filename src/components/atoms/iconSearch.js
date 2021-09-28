import React from "react"
import { View, StyleSheet } from "react-native"
import Svg, { Circle, Path } from "react-native-svg"

export const IconSearch = (props) => {
  return (
    <View>
      <Svg
        width={40}
        height={40}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Circle
          cx={18.333}
          cy={18.333}
          r={10}
          fill="#7E869E"
          fillOpacity={0.25}
          stroke="#888888"
          strokeWidth={2}
        />
        <Path
          d="M33.333 33.333l-5-5"
          stroke="#888888"
          strokeWidth={2}
          strokeLinecap="round"
        />
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({})
