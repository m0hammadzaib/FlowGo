import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TodoItem = ({Item}) => {
  return (
    <View>
      <Text>{Item}</Text>
    </View>
  )
}

export default TodoItem

const styles = StyleSheet.create({})