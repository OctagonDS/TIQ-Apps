import React from 'react'
import { View, StyleSheet } from 'react-native'
import Svg, { Path } from 'react-native-svg'

export const IconCancel = (props) => {
  return (
    <View>
      <Svg
        width={30}
        height={30}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M26.25 15c0 6.213-5.037 11.25-11.25 11.25S3.75 21.213 3.75 15 8.787 3.75 15 3.75 26.25 8.787 26.25 15zM15 16.414l-4.293 4.293-1.414-1.414L13.586 15l-4.293-4.293 1.414-1.414L15 13.586l4.293-4.293 1.414 1.414L16.414 15l4.293 4.293-1.414 1.414L15 16.414z"
          fill="#fff"
        />
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({})
