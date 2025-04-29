import { View, Text } from 'react-native'
import React from 'react'
import { BatteryIcon } from '../Battary';
import { cardStyles } from './cardStyles';



const Card = (data: Card) => {
  return (
    <View style={[cardStyles.cardWrapper, { marginLeft: data.index % 2 === 0 ? 0: '4%' }]}>
      <BatteryIcon percentage={data.chargingLevel} />
      <Text style={cardStyles.day}>
        {new Date(data.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </Text>
      <Text style={cardStyles.month}>
      {new Date(data.date).getDate()}-{new Date(data.date).getMonth() + 1}-{new Date(data.date).getFullYear()}
      </Text>

    </View>
  )
}

export default Card