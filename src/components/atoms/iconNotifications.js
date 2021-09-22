import React from "react"
import { View, StyleSheet } from "react-native"
import Svg, { Circle, Rect, Path } from "react-native-svg"

export const IconNot = (props) => {
  return (
    <View>
      <Svg
        width={32}
        height={32}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path
          d="M8.597 10.626A7.448 7.448 0 0116 4v0a7.448 7.448 0 017.403 6.626l.336 3.022c.068.614.102.92.159 1.221a8 8 0 00.706 2.092c.137.274.296.539.614 1.069l.965 1.608c.805 1.343 1.208 2.014.921 2.521-.287.508-1.07.508-2.636.508H7.532c-1.566 0-2.349 0-2.636-.508-.287-.507.116-1.178.921-2.521l.965-1.608c.318-.53.477-.795.614-1.069a8 8 0 00.706-2.092c.057-.3.091-.607.16-1.221l.335-3.022z"
          fill="#7E869E"
          fillOpacity={0.25}
          stroke="#888888"
          strokeWidth={2}
        />
        <Path
          d="M12.136 23.208c.228.992.73 1.869 1.429 2.494.699.626 1.555.965 2.435.965.88 0 1.736-.34 2.435-.965.699-.625 1.2-1.502 1.429-2.494"
          stroke="#888888"
          strokeWidth={2}
          strokeLinecap="round"
        />
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({})
