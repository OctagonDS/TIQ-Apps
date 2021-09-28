import React from "react"
import { View, StyleSheet } from "react-native"
import Svg, { Circle, Rect, Path } from "react-native-svg"

export const IcoSucces = (props) => {
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
          d="M20.693 17.33a9 9 0 10-17.386 0"
          stroke="#fff"
          strokeWidth={1.7}
          strokeLinecap="round"
        />
        <Path
          d="M13.204 17.935c-.47.722-1.6.82-2.527.218-.926-.602-1.297-1.674-.828-2.396.5-.77 3.74-4.053 5.753-6.066.38-.379.995.022.803.522-1.02 2.657-2.702 6.953-3.202 7.722z"
          stroke="#fff"
          strokeWidth={1.7}
        />
        <Path
          d="M12 6v2M5.636 8.636L7.05 10.05M18.364 8.636L16.95 10.05M20.693 17.33l-1.931-.518M3.307 17.33l1.931-.518"
          stroke="#fff"
          strokeWidth={1.7}
          strokeLinecap="round"
        />
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({})
