import React from 'react'
import { View, StyleSheet } from 'react-native'
import Svg, { Path, G, Defs, ClipPath } from 'react-native-svg'

export const IconPlay = (props) => {
  return (
    <View>
      <Svg
        width={25}
        height={25}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <G clipPath="url(#prefix__clip0_666_816)">
          <Path
            d="M3.75 12.5V1.438c0-.25 0-.438.063-.688.124-.5.562-.75 1.062-.625.25.063.438.188.625.313 3.75 2.187 7.438 4.437 11.188 6.625L24 11.375c.313.188.563.375.813.625.312.375.312.75-.063 1.063-.125.125-.188.187-.313.25-1.437.875-2.937 1.75-4.375 2.562-1.687 1-3.437 2.063-5.125 3.063-3.25 1.875-6.437 3.812-9.687 5.687-.75.438-1.375.063-1.438-.75v-.937C3.75 19.5 3.75 16 3.75 12.5z"
            fill="#fff"
          />
        </G>
        <Defs>
          <ClipPath id="prefix__clip0_666_816">
            <Path fill="#fff" d="M0 0h25v25H0z" />
          </ClipPath>
        </Defs>
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({})
