import React from "react"
import { View, StyleSheet } from "react-native"
import Svg, { Circle, Path } from "react-native-svg"

export const IcoProfile = (props) => {
  return (
    <View>
      <Svg
        width={24}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Circle cx={12} cy={10} r={3} fill="#fff" />
        <Circle cx={12} cy={12} r={9} stroke="#fff" strokeWidth={1.7} />
        <Path
          d="M17.872 18.808a.227.227 0 00.073-.257c-.376-1-1.132-1.88-2.164-2.518C14.697 15.363 13.367 15 12 15s-2.697.363-3.781 1.033c-1.032.638-1.788 1.519-2.164 2.518a.227.227 0 00.073.257 9.407 9.407 0 0011.744 0z"
          fill="#7E869E"
          fillOpacity={0.25}
          stroke="#fff"
          strokeWidth={1.7}
          strokeLinecap="round"
        />
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({})
