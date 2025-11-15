import { StyleSheet, Text, View,FlatList} from 'react-native'
import React from 'react'

const TodoList = ({list}) => {
  return (
    <View className='mt-5'>
     <FlatList 
     data={list}
     keyExtractor={(item,index)=> index.toString()} 
     renderItem={({item})=> <Text className='text-white text-lg my-2'>{item}</Text>}
     />
    </View>
  )
}

export default TodoList

const styles = StyleSheet.create({})