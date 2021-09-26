import React from "react"
import { View, StyleSheet } from "react-native"
import Svg, { Circle, Rect, Path } from "react-native-svg"

export const IconRef = (props) => {
  return (
    <View>
      <Svg
        width={35}
        height={35}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path
          d="M14.583 23.333h-4.375A5.833 5.833 0 014.375 17.5v0a5.833 5.833 0 015.833-5.833h4.375M23.333 17.5H11.667M20.417 23.333h4.375a5.833 5.833 0 005.833-5.833v0a5.833 5.833 0 00-5.833-5.833h-4.375"
          stroke="#888888"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({})
