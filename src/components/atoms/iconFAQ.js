import React from "react"
import { View, StyleSheet } from "react-native"
import Svg, { Circle, Path } from "react-native-svg"

export const IcoFAQ = (props) => {
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
          fill="#7E869E"
          fillOpacity={0.25}
          stroke="#fff"
          strokeWidth={1.7}
        />
        <Circle
          cx={12}
          cy={18}
          r={0.75}
          fill="#fff"
          stroke="#fff"
          strokeWidth={0.5}
        />
        <Path
          d="M12 16v-.857c0-.714.357-1.381.951-1.777l.599-.4a3.257 3.257 0 001.45-2.71V10a3 3 0 00-3-3v0a3 3 0 00-3 3v0"
          stroke="#fff"
          strokeWidth={1.7}
        />
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({})
