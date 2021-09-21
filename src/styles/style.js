import { StyleSheet, Platform } from "react-native"

export const gStyle = StyleSheet.create({
  main: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontFamily: "ub-medium",
    textAlign: "center",
    padding: 20,
    color: "#353535",
  },
  footer: {
    // flex: 1,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: Platform.OS === "ios" ? 120 : 72,
  },
  topbar: {
    // backgroundColor: "#21b287",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 45,
    padding: 15,
  },
})
