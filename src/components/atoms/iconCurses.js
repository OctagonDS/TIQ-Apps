import React from "react"
import { View, StyleSheet } from "react-native"
import Svg, { Circle, Rect, Path } from "react-native-svg"

export const IconCourses = (props) => {
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
          d="M27.046 5.966V30.36H8.75V5.966h18.296z"
          fill="#7E869E"
          fillOpacity={0.25}
        />
        <Rect
          x={8.75}
          y={5.833}
          width={18.958}
          height={24.792}
          rx={2}
          stroke="#fff"
          strokeWidth={2}
        />
        <Path
          d="M21.875 14.583v-2.916M5.833 13.125h5.834M5.833 18.958h5.834M5.833 24.792h5.834"
          stroke="#fff"
          strokeWidth={2}
          strokeLinecap="round"
        />
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({})
