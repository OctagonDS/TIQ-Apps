import React from 'react'
import { View, StyleSheet } from 'react-native'
import Svg, { Circle, Path, Rect } from 'react-native-svg'

export const IconUploadCamera = (props) => {
  return (
    <View style={styles.circle}>
      <Svg
        width={24}
        height={22}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.8 1a4.4 4.4 0 00-4.4 4.4h13.2A4.4 4.4 0 0014.2 1H9.8zM1 7.4a2 2 0 012-2h18a2 2 0 012 2v11.4a2 2 0 01-2 2H3a2 2 0 01-2-2V7.4zm15 4.1a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"
          fill="#FF741F"
          fillOpacity={0.25}
        />
        <Path
          d="M1 8.155a2.266 2.266 0 012.266-2.266v0c.858 0 1.643-.485 2.027-1.253L6.296 2.63c.254-.507.38-.76.556-.958a2 2 0 01.976-.604C8.083 1 8.367 1 8.933 1h6.134c.566 0 .85 0 1.105.068a2 2 0 01.976.604c.176.198.302.45.556.958l1.003 2.006a2.266 2.266 0 002.027 1.253v0A2.266 2.266 0 0123 8.155v6.4c0 2.829 0 4.243-.879 5.122-.878.879-2.293.879-5.121.879H7c-2.828 0-4.243 0-5.121-.88C1 18.799 1 17.385 1 14.557V8.155z"
          stroke="#E86312"
          strokeWidth={1.6}
        />
        <Path
          d="M16.089 12a4.089 4.089 0 11-8.178 0 4.089 4.089 0 018.178 0z"
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
