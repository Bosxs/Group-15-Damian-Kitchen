import React from 'react'

const RestaurantCard = ({item}) => {
    const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
    onPress={()=>navigation.navigate('Restaurant', ...item)}
    >

    </TouchableWithoutFeedback>
    
  )
}

export default RestaurantCard