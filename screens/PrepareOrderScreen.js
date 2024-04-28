import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useEffect } from 'react'
import * as Progress from "react-native-progress"
import { useNavigation } from '@react-navigation/native'

const PrepareOrderScreen = () => {
  
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Basket");    
    }, 4000)
  }, [])


  return (
    <SafeAreaView className="bg-[#0CB] flex-1 justify-center items-center">
        <Image source={require('../assets/orderLoading.gif')} className="w-96 h-96"/>
        <Text className="text-lg mx-3 my-10 text-white font-bold text-center">Waiting for Restaurant to accept your order!</Text>
        <Progress.Circle size={60} indeterminate={true} color="white" />
    </SafeAreaView>
  )
}

export default PrepareOrderScreen