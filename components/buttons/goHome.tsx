import { Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { buttonStyles } from './goBackStyles'


const GoHome = () => {
  return (
    <Link href="/" style={buttonStyles.backLink}>
      <Text>Go Home</Text> 
    </Link>
  )
}

export default GoHome