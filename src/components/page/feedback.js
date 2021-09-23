import React from "react"
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Platform,
  Button,
} from "react-native"
import { gStyle } from "../../styles/style"

export const Feedback = ({ navigation }) => {
  return (
    <View style={gStyle.main}>
      <ScrollView>
        <Text style={gStyle.title}>Поддержка</Text>
        <Button
          title="Продукт"
          onPress={() => navigation.navigate("Product")}
        />
      </ScrollView>
    </View>
  )
}
