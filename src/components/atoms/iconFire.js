import React from "react"
import { View, StyleSheet } from "react-native"
import Svg, { Path } from "react-native-svg"

export const IcoFire = (props) => {
  return (
    <View>
      <Svg
        width={24}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path
          d="M9.5 10C9.5 9.21 8.447 9 8.168 9.74 7.492 11.53 7 13.134 7 14a5 5 0 0010 0c0-.93-.568-2.711-1.322-4.663-.975-2.528-1.463-3.792-2.066-3.86a1.026 1.026 0 00-.575.107C12.5 5.864 12.5 7.243 12.5 10a1.5 1.5 0 01-3 0z"
          fill="#7E869E"
          fillOpacity={0.25}
          stroke="#fff"
          strokeWidth={1.7}
        />
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({})
