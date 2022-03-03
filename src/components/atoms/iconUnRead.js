import React from 'react'
import { View, StyleSheet } from 'react-native'
import Svg, { Circle, Path, Rect } from 'react-native-svg'

export const IconUnRead = (props) => {
  return (
    <View style={styles.circle}>
      <Svg
        width={16}
        height={13}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Rect
          x={1}
          y={1}
          width={14}
          height={10.5}
          rx={2}
          fill="#FF741F"
          fillOpacity={0.25}
          stroke="#E86312"
          strokeWidth={1.2}
        />
        <Path
          d="M7.106 6.678L1 3.625V9.5a2 2 0 002 2h10a2 2 0 002-2V3.625L8.894 6.678a2 2 0 01-1.788 0z"
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
