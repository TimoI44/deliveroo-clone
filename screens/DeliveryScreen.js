import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { XMarkIcon } from 'react-native-heroicons/solid';
import * as Progress from "react-native-progress";
import MapView, { Marker } from "react-native-maps";


const DeliveryScreen = () => {

    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);



    return (
        <View className="bg-[#0cb] flex-1">
            {/* Top part */}
            <SafeAreaView className="z-50">

                {/* Header */}
                <View className="flex-row justify-between p-5 items-center">
                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                        <XMarkIcon size={30} color="white" />
                    </TouchableOpacity>
                    <Text className="text-lg font-light text-white">Order Help</Text>
                </View>

                {/* Time card */}
                <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
                    {/* Time Card Text and Image */}
                    <View className="flex-row justify-between">

                        <View>
                            <Text className="text-lg text-gray-400">Estimated Arrival</Text>
                            <Text className="text-3xl font-bold">45-55 Minutes</Text>
                        </View>

                        <Image 
                            source={{uri: "https://links.papareact.com/fls"}}
                            className="h-20 w-20"
                        />
                    </View>

                    <Progress.Bar size={30} indeterminate={true} color="#0CB" />
                    <Text className="mt-3 text-gray-500">Your order at {restaurant.title} is being prepared</Text>

                </View>
            </SafeAreaView>

            {/* Map */}
            <MapView
                initialRegion={{
                    longitude: restaurant.long,
                    latitude: restaurant.lat,
                    longitudeDelta: 0.005,
                    latitudeDelta: 0.005,
                }}

                className="flex-1 -mt-10 z-0 "
                mapType='mutedStandard'
            >
                <Marker 
                    coordinate={{
                        longitude: restaurant.long,
                        latitude: restaurant.lat,
                    }}
                    title={restaurant.title}
                    description={restaurant.short_description}
                    identifier='origin'
                    pinColor='#0CB'
                />
            </MapView>

            {/* Footer */}
            <SafeAreaView className="flex-row bg-white items-center space-x-5 h-28">
                    <Image 
                        source={{uri: "https://links.papareact.com/wru"}}
                        className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"
                    />
                    <View className="flex-1">
                        <Text className="text-lg">Jonh Smith</Text>
                        <Text className="text-gray-400">Your Rider</Text>
                    </View>

                    <Text className="font-bold text-[#0CB] text-lg mr-5">Call</Text>
            </SafeAreaView>

        </View>
    )
}

export default DeliveryScreen