import React from 'react'
import { View, StyleSheet } from 'react-native'
import Svg, { Circle, Path, Rect } from 'react-native-svg'

export const IconDownload = (props) => {
  return (
    <View style={styles.circle}>
      <Svg
        width={22}
        height={22}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Rect
          x={1}
          y={15.286}
          width={20}
          height={5.714}
          rx={2}
          fill="#FF741F"
          fillOpacity={0.25}
        />
        <Path
          d="M11 13.857l-.566.566.566.566.566-.566-.566-.566zM11.8 1a.8.8 0 00-1.6 0h1.6zM3.291 7.28l7.143 7.143 1.132-1.132L4.423 6.15 3.29 7.28zm8.275 7.143l7.143-7.143-1.132-1.131-7.143 7.142 1.132 1.132zm.234-.566V1h-1.6v12.857h1.6z"
          fill="#E86312"
        />
        <Path
          d="M1 16.714v1.429A2.857 2.857 0 003.857 21h14.286A2.857 2.857 0 0021 18.143v-1.429"
          stroke="#E86312"
          strokeWidth={1.6}
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
