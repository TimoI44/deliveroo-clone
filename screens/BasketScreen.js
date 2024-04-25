import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { removeFromBasket, selectBasketItems, selectBasketTotal } from '../features/basketSlice';
import { XCircleIcon } from 'react-native-heroicons/solid';
import { urlFor } from '../sanity';

const BasketScreen = () => {

    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
    const items = useSelector(selectBasketItems);
    const basketTotal = useSelector(selectBasketTotal);
    const [groupedItems, setGroupedItems] = useState([]);
    const dispatch = useDispatch();

    useMemo(() => {
        const itemsGrouped = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item);
            return results;
        }, {})
        setGroupedItems(itemsGrouped)
    }, [items]);

  return (
    <SafeAreaView className="flex-1 bg-white">

        <View className="flex-1 bg-gray-100">

            {/* Basket Header */}
            <View className="p-5 border-b border-[#0CB] bg-white shadow-xs">

                {/* Basket Title */}
                <View>
                    <Text className="text-lg font-bold text-center">Basket</Text>
                    <Text className="text-center text-gray-400">{restaurant.title}</Text>
                </View>

                <TouchableOpacity onPress={() => navigation.goBack()} className="rounded-full bg-gray-100 absolute top-3 right-5">
                    <XCircleIcon color="#0CB" height={50} width={50}/>
                </TouchableOpacity>

            </View>

            {/* Deliver Banner */}
            <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
                <Image 
                    source={{
                        uri: "https://links.papareact.com/wru"
                    }}
                    className="rounded-full h-7 w-7 bg-gray-300 p-4"
                />
                <Text className="flex-1">Deliver in 50-75 min</Text>
                <TouchableOpacity>
                    <Text className="text-[#0cb]">Change</Text>
                </TouchableOpacity>
            </View>

            {/* Basket Items */}
            <ScrollView className="divide-y divide-gray-200">
                {Object.entries(groupedItems).map(([key, items]) => (

                    <View key={key} className="flex-row space-x-3 bg-white items-center py-2 px-5">
                        <Text className="text-[#0CB]">{items.length} x</Text>
                        <Image 
                            source={{
                                uri: urlFor(items[0]?.image).url(),
                            }}
                            className="w-12 h-12 rounded-full"
                        />
                        <Text className="flex-1">{items[0]?.name}</Text>
                        <Text className="text-gray-600">{items[0]?.price}€</Text>
                        <TouchableOpacity onPress={() => dispatch(removeFromBasket({id: key}))}>
                            <Text className="text-[#0CB] text-xs">Remove</Text>
                        </TouchableOpacity>
                    </View>

                ))}
            </ScrollView>


            {/* Basket bottom area */}
            <View className="p-5 bg-white mt-5 space-y-4">
                <View className="flex-row justify-between">
                    <Text className="text-gray-400">Subtotal</Text>
                    <Text className="text-gray-400">{basketTotal}€</Text>
                </View>
                <View className="flex-row justify-between">
                    <Text className="text-gray-400">Delivery</Text>
                    <Text className="text-gray-400">4.99€</Text>
                </View>
                <View className="flex-row justify-between">
                    <Text className="text-black">Order Total</Text>
                    <Text className="text-black font-bold">{basketTotal + 4.99}€</Text>
                </View>

                <TouchableOpacity className="bg-[#00CCBB] rounded-lg p-4">
                    <Text className="font-bold text-white text-lg text-center">Place Order</Text>
                </TouchableOpacity>
            </View>

        </View>
    </SafeAreaView>
  )
}

export default BasketScreen