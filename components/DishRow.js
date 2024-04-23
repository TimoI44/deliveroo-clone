import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { urlFor } from '../sanity'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, removeFromBasket, selectBasketItemsWithId } from '../features/basketSlice';

const DishRow = ({ id, name, image, short_description, price }) => {

    const [isPressed, setIsPressed] = useState(false);
    //The items of this dish that are in the basket
    const items = useSelector((state) => selectBasketItemsWithId(state, id));
    const dispatch = useDispatch();

    const addItemToBasket = () => {
        dispatch(addToBasket({ id, name, image, short_description, price }));
    }

    const removeItemFromBasket = () => {
        if(items.length === 0) return;

        dispatch(removeFromBasket({id}));
    }

    return (
        <>
            <TouchableOpacity className={`border border-gray-200 bg-white p-4 ${isPressed && "border-b-0"}`}
                onPress={() => setIsPressed(!isPressed)}>
                    
                <View className="flex-row">
                    {/* Description */}
                    <View className="flex-1 pr-2">
                        <Text className="text-lg mb-1">{name}</Text>
                        <Text className="text-gray-500">{short_description}</Text>
                        <Text className="text-gray-500 mt-2">{price}€</Text>
                    </View>
                    
                    {/* Image */}
                    <View>
                        <Image
                            style={{
                                borderWidth: 1,
                                borderColor: "#F3F3F4"
                            }}
                            className="h-20 w-20 bg-gray-300 p-4"
                            source={{
                                uri: urlFor(image).url(),
                            }}
                        />
                    </View>
                </View>
            </TouchableOpacity>
            
            {/* Add to basket options */}
            {isPressed && (
                <View className="bg-white px-4">
                    <View className="flex-row items-center space-x-2 pb-3">

                        <TouchableOpacity 
                            onPress={removeItemFromBasket}
                            disabled={items.length <= 0}
                            >
                            <MinusCircleIcon
                                color={items.length > 0 ? "#0cb" : "gray"}
                                size={38}
                            />
                        </TouchableOpacity>

                        <Text>{items.length}</Text>

                        <TouchableOpacity onPress={addItemToBasket}>
                            <PlusCircleIcon
                                color="#0cb"
                                size={38}
                            />
                        </TouchableOpacity>

                    </View>
                </View>
            )}
        </>
    )
}

export default DishRow