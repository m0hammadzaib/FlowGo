import { StyleSheet, Text, View,TextInput,Pressable} from 'react-native'
import React from 'react'

const TodoInput = ({input,value,onSubmit}) => {
  return (
    <View className='flex-row gap-4 mt-8'>
     <TextInput onChangeText={input} value={value} placeholder='Add todo' className='bg-gray-600 rounded-xl p-5'/>
     <View>
      <Pressable className='p-3 bg-red-600 rounded-lg' onPress={onSubmit}><Text>Add</Text></Pressable>
     </View>
    </View>
  )
}

export default TodoInput

const styles = StyleSheet.create({})