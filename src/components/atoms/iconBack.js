import React from 'react'
import { View, StyleSheet } from 'react-native'
import Svg, { Path } from 'react-native-svg'

export const IconBack = (props) => {
  return (
    <View>
      <Svg
        width={22}
        height={10}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path
          d="M2.559 4.78h18.65c.107 0 .223-.007.33.007.284.04.461.174.461.394 0 .221-.169.355-.462.395-.106.014-.222.007-.328.007H2.576l.276.254C4.166 6.955 5.49 8.072 6.804 9.19c.346.294.4.522.142.696-.275.194-.568.14-.932-.154L1.049 5.61c-.453-.375-.444-.496 0-.864 1.678-1.378 3.34-2.757 5-4.135.062-.047.115-.1.187-.147.23-.14.524-.14.719.013.213.16.222.348.053.522-.213.214-.462.401-.701.602C5.08 2.645 3.847 3.69 2.559 4.78z"
          fill="#545A60"
        />
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({})
