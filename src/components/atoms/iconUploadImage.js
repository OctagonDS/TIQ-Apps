import React from 'react'
import { View, StyleSheet } from 'react-native'
import Svg, { Circle, Path, Rect } from 'react-native-svg'

export const IconUploadImage = (props) => {
  return (
    <View style={styles.circle}>
      <Svg
        width={22}
        height={23}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Rect
          x={1}
          y={16.286}
          width={20}
          height={5.714}
          rx={2}
          fill="#FF741F"
          fillOpacity={0.25}
        />
        <Path
          d="M1 17.714v1.429A2.857 2.857 0 003.857 22h14.286A2.857 2.857 0 0021 19.143v-1.429"
          stroke="#E86312"
          strokeWidth={1.6}
        />
        <Path
          d="M11 2l-.566-.566L11 .87l.566.565L11 2zm.8 12.857a.8.8 0 11-1.6 0h1.6zm-8.509-6.28l7.143-7.143 1.132 1.132-7.143 7.143L3.29 8.577zm8.275-7.143l7.143 7.143-1.132 1.132-7.143-7.143 1.132-1.132zM11.8 2v12.857h-1.6V2h1.6z"
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
