import React from "react"
import { View, StyleSheet } from "react-native"
import Svg, { Circle, Rect, Path } from "react-native-svg"

export const IconNot = (props) => {
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
          d="M9.403 11.622l.027-.237a8 8 0 017.832-7.01h.238v0h.238a8 8 0 017.832 7.01l.027.237.367 3.305c.093.834.139 1.25.227 1.656.127.58.317 1.144.568 1.682.176.376.391.736.823 1.455l1.226 2.043c.805 1.343 1.208 2.014.921 2.521-.287.508-1.07.508-2.636.508H7.907c-1.566 0-2.349 0-2.636-.508-.287-.507.116-1.178.921-2.521l1.226-2.043c.432-.72.647-1.079.823-1.455a8 8 0 00.568-1.682c.088-.406.134-.822.227-1.656l.367-3.305z"
          fill="#7E869E"
          fillOpacity={0.25}
          stroke={props.focused ? "#fff" : "#CCC"}
          strokeWidth={2}
        />
        <Path
          d="M13.274 25.384c.25 1.085.799 2.044 1.563 2.728.764.684 1.7 1.055 2.663 1.055.963 0 1.9-.371 2.663-1.055.764-.684 1.314-1.643 1.563-2.728"
          stroke={props.focused ? "#fff" : "#CCC"}
          strokeWidth={2}
          strokeLinecap="round"
        />
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({})
