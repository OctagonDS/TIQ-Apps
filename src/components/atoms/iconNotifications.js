import React from "react"
import { View, StyleSheet } from "react-native"
import Svg, { Circle, Rect, Path } from "react-native-svg"

export const IconNot = (props) => {
  return (
    <View>
      <Svg
        width={40}
        height={40}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path
          d="M10.746 13.282c.122-1.094.183-1.642.292-2.108a8 8 0 016.834-6.117C18.348 5 18.9 5 20 5v0c1.101 0 1.652 0 2.128.057a8 8 0 016.834 6.117c.11.466.17 1.014.292 2.108l.42 3.777c.133 1.2.2 1.8.353 2.378.09.338.202.67.336.994.228.553.538 1.07 1.16 2.106l1.66 2.767c.805 1.343 1.208 2.015.921 2.522-.287.507-1.07.507-2.636.507H8.532c-1.566 0-2.349 0-2.636-.507-.287-.507.116-1.179.921-2.522l1.66-2.767c.622-1.035.932-1.553 1.16-2.106a8 8 0 00.336-.994c.154-.578.22-1.178.354-2.378l.42-3.777z"
          fill="#7E869E"
          fillOpacity={0.25}
          stroke="#888888"
          strokeWidth={2}
        />
        <Path
          d="M15.17 29.01c.285 1.24.913 2.336 1.786 3.118S18.9 33.333 20 33.333c1.1 0 2.17-.423 3.044-1.205.873-.782 1.5-1.878 1.786-3.118"
          stroke="#888888"
          strokeWidth={2}
          strokeLinecap="round"
        />
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({})
