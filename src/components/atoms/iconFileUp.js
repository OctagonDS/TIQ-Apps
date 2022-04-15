import React from 'react'
import { View, StyleSheet } from 'react-native'
import Svg, { Circle, Path, Rect } from 'react-native-svg'

export const IconFileUp = (props) => {
  return (
    <View style={styles.circle}>
      <Svg
        width={13}
        height={16}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path
          d="M7.286 4.143V1H5c-1.886 0-2.828 0-3.414.586C1 2.172 1 3.114 1 5v6.143c0 1.885 0 2.828.586 3.414.586.586 1.528.586 3.414.586h3c1.886 0 2.828 0 3.414-.586.586-.586.586-1.529.586-3.414V5.714H8.857c-.74 0-1.111 0-1.341-.23-.23-.23-.23-.6-.23-1.341z"
          fill="#7E869E"
          fillOpacity={0.25}
        />
        <Path
          d="M7.42 1H4.144C2.66 1 1.92 1 1.46 1.46 1 1.92 1 2.661 1 4.143V12c0 1.482 0 2.222.46 2.683.46.46 1.201.46 2.683.46h4.714c1.482 0 2.223 0 2.683-.46.46-.46.46-1.201.46-2.683V5.58c0-.322 0-.482-.06-.627-.06-.144-.173-.258-.4-.485L8.532 1.46c-.227-.227-.34-.34-.485-.4C7.902 1 7.742 1 7.42 1z"
          stroke="#fff"
          strokeWidth={1.2}
        />
        <Path
          d="M7.286 1v3.143c0 .74 0 1.111.23 1.341.23.23.6.23 1.341.23H12"
          stroke="#fff"
          strokeWidth={1.2}
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
