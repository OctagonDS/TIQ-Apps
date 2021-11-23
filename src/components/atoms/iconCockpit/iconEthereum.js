import React from 'react'
import { View, StyleSheet } from 'react-native'
import Svg, { Path, G } from 'react-native-svg'

export const IcoEthereum = (props) => {
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
          opacity={0.2}
          d="M39.892 20c0 10.988-8.907 19.895-19.895 19.895C9.01 39.895.103 30.988.103 20 .103 9.013 9.01.106 19.997.106 30.985.106 39.892 9.013 39.892 20"
          fill="#505050"
        />
        <G opacity={0.8} fill="#fff">
          <Path d="M19.933 10.77l-.122.417v12.12l.122.122 5.626-3.325-5.626-9.335z" />
          <Path d="M19.933 10.77l-5.625 9.334 5.625 3.325V10.77zM19.933 25.26l-.069.084v4.317l.07.203 5.628-7.928-5.629 3.324z" />
          <Path d="M19.933 29.864V25.26l-5.625-3.324 5.625 7.928zM19.933 23.43l5.626-3.326-5.626-2.557v5.882zM14.308 20.104l5.625 3.325v-5.882l-5.625 2.557z" />
        </G>
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({})
