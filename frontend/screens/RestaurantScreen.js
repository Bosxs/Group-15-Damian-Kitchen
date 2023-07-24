import { useNavigation, useRoute } from '@react-navigation/native'
import React from 'react'
import { ScrollView, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native-web'

const RestaurantScreen = () => {
    const navigation = useNavigation();
    const {params}= useRoute();
    let item = params;
    console.log('reatuarant',item);
    
  return (
        <View>
            <ScrollView>
                <View className="relative">
                    <Image className="w-full h-72" source={item.image}/>
                    <TouchableOpacity
                        onPress={()=>navigation.goBack()}
                        className
                        ="
                        absolute top-14 
                        left-4 
                        bg-gray-50 
                        p-2 
                        rounded-full 
                        shadow"
                    >
                        <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)}/>
                    </TouchableOpacity>

                </View>
                <View                 
                    style={{borderTopLeftRadius: 40, borderTopRightRadius: 40}}
                    className="bg-white -mt-12 pt-6">
                    
                    <View className="px-5">
                        <Text className="text-3xl font-bold">{item.name}</Text>
                    </View>

                </View>
            </ScrollView>
                
            
        </View> 
    )
}

export default RestaurantScreen