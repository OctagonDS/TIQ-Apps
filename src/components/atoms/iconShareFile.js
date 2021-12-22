import React from 'react'
import { View, StyleSheet } from 'react-native'
import Svg, { Circle, Path, Rect } from 'react-native-svg'

export const IconShareFile = (props) => {
  return (
    <View style={styles.circle}>
      <Svg
        width={25}
        height={23}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path
          d="M9.13 4.474a3.474 3.474 0 106.948 0 3.474 3.474 0 00-6.948 0h0zM3.848 13.623a3.474 3.474 0 103.474 6.016 3.474 3.474 0 00-3.474-6.016h0zM21.36 13.623a3.473 3.473 0 11-3.473 6.015 3.473 3.473 0 013.473-6.015h0z"
          stroke="#E86312"
          strokeWidth={1.6}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.131 4.539a3.477 3.477 0 01.527-1.905 10.063 10.063 0 00-6.853 11.913l.024-.03a3.474 3.474 0 011.395-1.082A8.461 8.461 0 019.13 4.54zm6.946 0a8.462 8.462 0 014.907 8.896 3.497 3.497 0 011.395 1.082l.024.03A10.062 10.062 0 0015.55 2.635a3.463 3.463 0 01.527 1.905zm2.9 15.505a3.474 3.474 0 01-1.623-.783 8.459 8.459 0 01-9.5 0 3.467 3.467 0 01-1.623.783 10.065 10.065 0 0012.746 0z"
          fill="#E86312"
        />
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({
  circle: {
    // alignItems: "center",
    // justifyContent: "center",
  },
})
