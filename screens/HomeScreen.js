import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import * as Icon from "react-native-feather";
import { TextInput } from 'react-native-web';


const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-white">
        <StatusBar barstyle="dark content"/>
        {/*search bar*/}
        <View className="flew-row items-center space-x-2 px-4 pb-2">
            <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-3">
                <Icon.Search height="25" width="25" stroke="gray" />
                <TextInput placeholer="Restaurants" className="ml-2 flex-1" />
            </View>
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen