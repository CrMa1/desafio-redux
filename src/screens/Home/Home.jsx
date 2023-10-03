import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { TextInput } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { changeName } from '../../features/name/nameSlice'
import { Pressable } from 'react-native'

const Home = () => {
  const [name,setName] = useState('')
  const nameREdux = useSelector((state) => state.name.value)
  const dispatch = useDispatch()
  return (
    <View>
      <Text style={{textAlign:'center',marginTop:10}}>Escribe un nombre</Text>
      <TextInput 
        placeholder={nameREdux} 
        value={name}
        onChangeText={value => setName(value)}
        style={{backgroundColor:'gray',width:'90%',margin:10,borderRadius:20}}    
      />
      <Pressable
        onPress={() => dispatch(changeName(name))}
        style={{backgroundColor:'blue',width:'90%',margin:10,borderRadius:20}}
      >
        <Text style={{color:'white',textAlign:'center'}}>Actualizar el nombre :D</Text>
      </Pressable>
    </View>
  )
}

export default Home
