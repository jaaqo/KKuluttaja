import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function AnotherScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center'
  }
})
