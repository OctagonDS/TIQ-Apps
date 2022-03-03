import React from 'react'
import { View, StyleSheet } from 'react-native'
import Svg, { Circle, Path, Rect } from 'react-native-svg'

export const IconRead = (props) => {
  return (
    <View style={styles.circle}>
      <Svg
        width={16}
        height={16}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path
          d="M1 6.972c0-1.203 0-1.804.299-2.287.298-.484.836-.753 1.912-1.29l3-1.5c.878-.44 1.317-.659 1.789-.659s.911.22 1.789.658l3 1.5c1.076.538 1.614.807 1.912 1.29C15 5.169 15 5.77 15 6.973V11c0 1.886 0 2.828-.586 3.414C13.828 15 12.886 15 11 15H5c-1.886 0-2.828 0-3.414-.586C1 13.828 1 12.886 1 11V6.972z"
          stroke="#E86312"
          strokeWidth={1.2}
        />
        <Path
          d="M3.04 9.164L1 7.125V13a2 2 0 002 2h10a2 2 0 002-2V7.125l-2.04 2.04a2 2 0 01-1.413.585H4.453a2 2 0 01-1.414-.586z"
          fill="#FF741F"
          fillOpacity={0.25}
          stroke="#E86312"
          strokeWidth={1.2}
          strokeLinecap="round"
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
