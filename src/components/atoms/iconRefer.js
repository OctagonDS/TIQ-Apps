import React from "react"
import { View, StyleSheet } from "react-native"
import Svg, { Path } from "react-native-svg"

export const IcoReferalMain = (props) => {
  return (
    <View>
      <Svg
        width={24}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path
          d="M10 16H7a4 4 0 01-4-4v0a4 4 0 014-4h3M16 12H8M14 16h3a4 4 0 004-4v0a4 4 0 00-4-4h-3"
          stroke="#fff"
          strokeWidth={1.7}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({})
