import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity';
import { ChevronLeftIcon, ChevronRightIcon } from 'react-native-heroicons/solid';
import { StarIcon } from 'react-native-heroicons/solid';
import { MapPinIcon } from 'react-native-heroicons/solid';
import { QuestionMarkCircleIcon } from 'react-native-heroicons/outline';
import DishRow from '../components/DishRow';
import BasketIcon from '../components/BasketIcon';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../features/restaurantSlice';

const RestaurantScreen = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch();


    const {params: {
        id, imgUrl, title, rating, genre, 
        address, short_description, dishes, long, lat
    }} = useRoute();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    useEffect(() => {
        dispatch(setRestaurant({
            id, imgUrl, title, rating, genre, 
            address, short_description, dishes, long, lat
        }))
    }, [dispatch])

    return (
    <>
        {/* Basket Popup */}
        <BasketIcon />

        <ScrollView>
            <View className="relative">
                <Image 
                    source={{
                        uri: urlFor(imgUrl).url(),
                    }}

                    className="w-full h-56 bg-gray-300 p-4"
                />
                <TouchableOpacity className="absolute top-10 left-5 rounded-full bg-gray-100 p-2" onPress={() => navigation.goBack()}>
                    <ChevronLeftIcon color="#0CB" size={20}/>
                </TouchableOpacity>
            </View>

            {/* Below Image */}
            <View className="bg-white">

                {/* Overview */}
                <View className="pt-4 px-4">
                    <Text className="text-3xl font-bold">{title}</Text>

                    {/* Icons */}
                    <View className="flex-row space-x-2 my-2">

                        <View className="flex-row items-center space-x-2">
                            <StarIcon color="green" opacity={0.5} size={22}/>
                            <Text className="text-xs text-gray-500">
                                <Text className="text-green-500">{rating}</Text> • {genre}
                            </Text>
                        </View>

                        <View className="flex-row items-center space-x-2">
                            <MapPinIcon color="gray" opacity={0.4} size={22}/>
                            <Text className="text-xs text-gray-500">
                                Nearby • {address}
                            </Text>
                        </View>
    
                    </View>

                    {/* Short description */}
                    <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
                
                </View>
                
                {/* Allergy Button */}
                <TouchableOpacity className="flex-row items-center justify-center p-4 space-x-2 border-y border-gray-300">
                    <QuestionMarkCircleIcon opacity={0.6} color="gray" size={20} />
                    <Text className="pl-2 flex-1 font-bold text-md">Have a food allergy?</Text>
                    <ChevronRightIcon color="#0cb" />
                </TouchableOpacity>

                {/* Menu */}
                <View className="pb-36">
                    <Text className="pt-6 px-4 pb-3 bg-gray-50 font-bold text-xl">Menu</Text>

                    {/* Dishrow */}
                    {dishes.map(dish => (
                        <DishRow
                            key={dish.id}
                            id={dish._id}
                            name={dish.name}
                            image={dish.image}
                            short_description={dish.short_description}
                            price={dish.price}
                        />
                    ))}
                </View>
            </View>
        </ScrollView>
    </>
    )
}

export default RestaurantScreen