import React from "react"
import { View, StyleSheet } from "react-native"
import Svg, { Circle, Path } from "react-native-svg"

export const IconSearchClose = (props) => {
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
          cx={20}
          cy={20}
          r={15}
          fill="#7E869E"
          fillOpacity={0.25}
          stroke="#fff"
          strokeWidth={1.2}
        />
        <Path d="M15 25l10-10M25 25L15 15" stroke="#fff" strokeWidth={1.2} />
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({})
