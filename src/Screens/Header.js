import { View, Text } from 'react-native'
import React from 'react'

const Header = ({name}) => {
  return (
    <View style={{marginLeft: 15}}>
      <Text style={{fontWeight: 'bold', fontSize: 22}}>
        {name}
      </Text>
    </View>
  )
}

export default Header