import React from "react"
import { View, StyleSheet } from "react-native"
import Svg, { Circle, Path } from "react-native-svg"

export const IconMentor = (props) => {
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
          d="M28.77 29.819c-.665-1.86-2.13-3.505-4.168-4.677-2.037-1.173-4.534-1.809-7.102-1.809-2.568 0-5.065.636-7.102 1.809-2.038 1.172-3.502 2.816-4.167 4.677"
          stroke={props.focused ? "#fff" : "#CCC"}
          strokeWidth={2}
          strokeLinecap="round"
        />
        <Circle
          cx={17.5}
          cy={11.667}
          fill="#7E869E"
          fillOpacity={0.25}
          stroke={props.focused ? "#fff" : "#CCC"}
          strokeWidth={2}
          strokeLinecap="round"
          r={5.833}
        />
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({})
