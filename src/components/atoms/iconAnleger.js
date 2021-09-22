import React from "react"
import { View, StyleSheet } from "react-native"
import Svg, { Circle, Rect, Path } from "react-native-svg"

export const IconAnleger = (props) => {
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
          d="M7.58 7.539l.394.919-.394-.92a2 2 0 00-1.2 2.06l1.11 9.987a7 7 0 002.475 4.604l6.255 5.212a2 2 0 002.56 0l6.255-5.212a7 7 0 002.476-4.604l1.11-9.987a2 2 0 00-1.2-2.06l-9.133-3.913a2 2 0 00-1.576 0L7.58 7.539z"
          fill="#7E869E"
          fillOpacity={0.25}
          stroke={props.focused ? "#fff" : "#CCC"}
          strokeWidth={2}
          strokeLinecap="round"
        />
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({})
