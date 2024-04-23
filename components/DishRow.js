import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { urlFor } from '../sanity'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';

const DishRow = ({ id, name, image, short_description, price }) => {

    const [isPressed, setIsPressed] = useState(false);

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
            
            {isPressed && (
                <View className="bg-white px-4">
                    <View className="flex-row items-center space-x-2 pb-3">

                        <TouchableOpacity>
                            <MinusCircleIcon
                                color="#0cb"
                                size={38}
                            />
                        </TouchableOpacity>

                        <Text>0</Text>

                        <TouchableOpacity>
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