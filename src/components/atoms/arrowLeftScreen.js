import React from "react"
import { View, StyleSheet } from "react-native"
import Svg, { Circle, Rect, Path } from "react-native-svg"

export const ArrowLeftScreen = (props) => {
  return (
    <View>
      <Svg
        width={27}
        height={16}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path
          d="M.293 7.293a1 1 0 000 1.414l6.364 6.364a1 1 0 001.414-1.414L2.414 8l5.657-5.657A1 1 0 006.657.93L.293 7.293zM27 7H1v2h26V7z"
          fill="#888888"
        />
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({})
