import React from "react"
import { View, StyleSheet } from "react-native"
import Svg, { Circle, Path } from "react-native-svg"

export const Iconfeedback = (props) => {
  return (
    <View style={styles.circle}>
      <Svg
        width={61}
        height={61}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <Circle
          cx={30.5}
          cy={30.5}
          r={30.5}
          fill={props.focused ? "#fff" : "#FF741F"}
        />
        <Path
          d="M43.015 19.87l.707-.472-.707.472zm0 17.843l.707.472-.707-.472zm-1.885 1.885l-.473-.706.473.706zm-7.213 1.15l-.004-.85a.85.85 0 00-.846.85h.85zm0 .002l.76.38a.85.85 0 00.09-.38h-.85zm-2.523 5.044l-.76-.38.76.38zm-1.788 0l-.76.38.76-.38zm-2.523-5.044h-.85c0 .132.031.262.09.38l.76-.38zm0-.002h.85a.85.85 0 00-.846-.85l-.004.85zm-7.213-1.15l.472-.706-.472.706zm-1.885-1.885l-.707.472.707-.472zm0-17.843l-.707-.472.707.472zm1.885-1.885l-.472-.707.472.707zm21.26 0l.472-.707-.472.707zm3.887 10.807c0-2.382 0-4.232-.149-5.7-.15-1.483-.462-2.67-1.146-3.694l-1.414.944c.467.7.732 1.574.869 2.922.139 1.362.14 3.11.14 5.528h1.7zm-1.295 9.393c.684-1.025.995-2.211 1.146-3.694.15-1.468.149-3.318.149-5.7h-1.7c0 2.418-.001 4.166-.14 5.528-.137 1.348-.402 2.223-.869 2.922l1.414.944zm-2.12 2.12a7.683 7.683 0 002.12-2.12l-1.414-.944a5.982 5.982 0 01-1.65 1.65l.944 1.414zm-7.682 1.293c1.84-.008 3.32-.044 4.537-.212 1.232-.17 2.25-.483 3.145-1.081l-.945-1.413c-.61.407-1.355.661-2.433.81-1.09.151-2.464.188-4.311.196l.007 1.7zm.847-.848v-.002h-1.7v.002h1.7zm-2.612 5.425l2.522-5.045-1.52-.76-2.523 5.044 1.52.76zm-3.31 0c.682 1.363 2.628 1.363 3.31 0l-1.52-.76a.15.15 0 01-.27 0l-1.52.76zm-2.522-5.045l2.522 5.044 1.52-.76-2.521-5.044-1.521.76zm-.09-.382v.002h1.7v-.002h-1.7zm-6.835-.443c.895.598 1.913.91 3.145 1.081 1.218.168 2.698.204 4.537.212l.007-1.7c-1.847-.009-3.22-.045-4.312-.196-1.077-.149-1.822-.402-2.433-.81l-.944 1.413zm-2.12-2.12c.56.84 1.281 1.56 2.12 2.12l.944-1.413a5.983 5.983 0 01-1.65-1.651l-1.414.944zm-1.295-9.393c0 2.381 0 4.231.149 5.7.15 1.482.461 2.669 1.146 3.693l1.414-.944c-.467-.7-.732-1.574-.87-2.922-.138-1.362-.139-3.11-.139-5.527h-1.7zm1.295-9.394c-.685 1.025-.996 2.211-1.146 3.694-.15 1.468-.149 3.318-.149 5.7h1.7c0-2.417.001-4.166.14-5.528.137-1.348.402-2.223.869-2.922l-1.414-.944zm2.12-2.12a7.683 7.683 0 00-2.12 2.12l1.414.944a5.986 5.986 0 011.65-1.65l-.944-1.414zm9.394-1.295c-2.382 0-4.232 0-5.7.149-1.483.15-2.67.461-3.694 1.146l.944 1.414c.7-.467 1.574-.732 2.922-.87 1.362-.138 3.11-.139 5.528-.139v-1.7zm3.416 0h-3.416v1.7h3.416v-1.7zm9.394 1.295c-1.025-.685-2.212-.996-3.694-1.146-1.468-.15-3.318-.149-5.7-.149v1.7c2.417 0 4.166.001 5.528.14 1.348.137 2.223.402 2.921.869l.945-1.414zm2.12 2.12a7.684 7.684 0 00-2.12-2.12l-.945 1.414a5.984 5.984 0 011.651 1.65l1.414-.944z"
          fill={props.focused ? "#FF741F" : "#fff"}
        />
        <Circle
          cx={37.333}
          cy={28.792}
          fill={props.focused ? "#FF741F" : "#fff"}
          r={1.708}
        />
        <Circle
          cx={30.5}
          cy={28.792}
          fill={props.focused ? "#FF741F" : "#fff"}
          r={1.708}
        />
        <Circle
          cx={23.667}
          cy={28.792}
          fill={props.focused ? "#FF741F" : "#fff"}
          r={1.708}
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
