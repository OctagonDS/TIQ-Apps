import React from "react"
import { View, StyleSheet } from "react-native"
import Svg, { Path } from "react-native-svg"

export const IconForward = (props) => {
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
          d="M20.152 5.578H1.501c-.107 0-.222.006-.329-.007-.284-.04-.461-.174-.461-.395 0-.22.168-.355.461-.395.107-.013.222-.006.329-.006h18.633l-.275-.255c-1.315-1.117-2.638-2.235-3.952-3.352-.347-.295-.4-.522-.142-.696.275-.194.568-.14.932.154l4.965 4.122c.453.375.444.495 0 .863-1.679 1.379-3.34 2.757-5 4.136-.063.046-.116.1-.187.147-.23.14-.524.14-.72-.014-.212-.16-.221-.348-.053-.522.214-.214.462-.401.702-.602 1.226-1.044 2.46-2.088 3.748-3.178z"
          fill="#545A60"
        />
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({})
