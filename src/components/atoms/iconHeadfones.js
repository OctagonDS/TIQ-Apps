import React from 'react'
import { View, StyleSheet } from 'react-native'
import Svg, { Circle, Path, Rect } from 'react-native-svg'

export const IconHeadfones = (props) => {
  return (
    <View style={styles.circle}>
      <Svg
        width={13}
        height={14}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path
          d="M12 7.188c0-1.642-.58-3.215-1.61-4.376C9.357 1.652 7.958 1 6.5 1s-2.858.652-3.89 1.812C1.58 3.972 1 5.546 1 7.188"
          stroke="#fff"
          strokeWidth={1.6}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Rect
          x={1}
          y={6.5}
          width={2.75}
          height={4.813}
          rx={1.375}
          fill="#7E869E"
          fillOpacity={0.25}
          stroke="#fff"
          strokeWidth={1.6}
          strokeLinejoin="round"
        />
        <Rect
          x={9.25}
          y={6.5}
          width={2.75}
          height={4.813}
          rx={1.375}
          fill="#7E869E"
          fillOpacity={0.25}
          stroke="#fff"
          strokeWidth={1.6}
          strokeLinejoin="round"
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
