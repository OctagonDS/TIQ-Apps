import React from "react"
import { View, StyleSheet } from "react-native"
import Svg, { Path } from "react-native-svg"

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
          d="M27.263 7.906L18.13 3.992a1.6 1.6 0 00-1.26 0L7.737 7.906a1.6 1.6 0 00-.96 1.648l1.11 9.987a6.6 6.6 0 002.334 4.341l6.255 5.212a1.6 1.6 0 002.048 0l6.255-5.212a6.6 6.6 0 002.334-4.341l1.11-9.987a1.6 1.6 0 00-.96-1.648z"
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
