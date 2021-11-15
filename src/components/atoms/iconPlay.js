import React from 'react'
import { View, StyleSheet } from 'react-native'
import Svg, { Path, G, Defs, ClipPath } from 'react-native-svg'

export const IconPlay = (props) => {
  return (
    <View>
      <Svg
        width={30}
        height={30}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <G clipPath="url(#prefix__clip0_666_816)">
          <Path
            d="M4.5 15V1.725c0-.3 0-.525.075-.825.15-.6.675-.9 1.275-.75.3.075.525.225.75.375 4.5 2.625 8.925 5.325 13.425 7.95L28.8 13.65c.375.225.675.45.975.75.375.45.375.9-.075 1.275-.15.15-.225.225-.375.3-1.725 1.05-3.525 2.1-5.25 3.075-2.025 1.2-4.125 2.475-6.15 3.675-3.9 2.25-7.725 4.575-11.625 6.825-.9.525-1.65.075-1.725-.9v-1.125C4.5 23.4 4.5 19.2 4.5 15z"
            fill="#fff"
          />
        </G>
        <Defs>
          <ClipPath id="prefix__clip0_666_816">
            <Path fill="#fff" d="M0 0h30v30H0z" />
          </ClipPath>
        </Defs>
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({})
