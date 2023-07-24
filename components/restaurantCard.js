import { View, Text, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

const RestaurantCard = () => {
  return (
    <TouchableWithoutFeedback>
        <View className="mr-6 bg-white rounded-3xl shadow-lg">
            <Image className="h-36 w-36 rounded-t-3xl" source={item.image} />
        </View>
    </TouchableWithoutFeedback>
    )
}

export default RestaurantCard