import React from 'react'
import { View, StyleSheet } from 'react-native'
import Svg, { Circle, Path } from 'react-native-svg'

export const IconReplyComment = (props) => {
  return (
    <View>
      <Svg
        width={14}
        height={14}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Path
          d="M2.917 4.667v-3.5"
          stroke="#4E4D4D"
          strokeWidth={1.167}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.907 5.72A5.25 5.25 0 007 12.25h2.625c.815 0 1.223 0 1.545-.133a1.75 1.75 0 00.947-.947c.133-.322.133-.73.133-1.545V7a5.25 5.25 0 00-6.53-5.093 1.458 1.458 0 01-1.053 2.468h-.292v.292a1.458 1.458 0 01-2.468 1.052zm3.343.113A.583.583 0 005.25 7h3.5a.583.583 0 100-1.167h-3.5zM7 8.167a.583.583 0 100 1.166h1.75a.583.583 0 100-1.166H7z"
          fill="#4E4D4D"
        />
        <Path
          d="M1.167 2.917h3.5"
          stroke="#4E4D4D"
          strokeWidth={1.167}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({})
