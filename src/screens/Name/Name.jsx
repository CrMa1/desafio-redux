import React from 'react'
import { useSelector } from 'react-redux'
import { Text, View } from 'react-native'

const Name = () => {
  const nameChanged = useSelector((state) => state.name.value)
  return (
    <View>
      <Text>{nameChanged}</Text>
    </View>
  )
}

export default Name
