import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-white">
        
        <StatusBar barstyle="dark content"/>
    </SafeAreaView>
  )
}

export default HomeScreen