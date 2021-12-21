import React from 'react'
import { View, StyleSheet } from 'react-native'
import Svg, { Path } from 'react-native-svg'

const ArrowLeft = (props) => {
  return (
    <View>
      <Svg
        width={48}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path
          d="M.94 10.94a1.5 1.5 0 000 2.12l9.545 9.547a1.5 1.5 0 102.122-2.122L4.12 12l8.486-8.485a1.5 1.5 0 10-2.122-2.122L.94 10.94zM48 10.5H2v3h46v-3z"
          fill="#fff"
        />
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({})

export default ArrowLeft
