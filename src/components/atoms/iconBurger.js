import React from "react"
import { View, StyleSheet } from "react-native"
import Svg, { Circle, Rect, Path } from "react-native-svg"

export const IconBurger = (props) => {
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
          d="M7.292 10.208h20.416M7.292 17.5h20.416M7.292 24.792h20.416"
          stroke="#CCC"
          strokeWidth={2}
          strokeLinecap="round"
        />
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({})
