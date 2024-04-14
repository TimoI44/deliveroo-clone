import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({ id, title, description, featuredCategory }) => {
  return (
    <View>
        <View className="mt-4 flex-row items-center justify-between px-4">
            <Text className="font-bold text-lg">{title}</Text>
            <ArrowRightIcon color="#0cb"/>
        </View>
        <Text className="text-xs text-gray-500 px-4">{description}</Text>

        <ScrollView
            horizontal
            contentContainerStyle={{
                paddingHorizontal: 15,
            }}
            showsHorizontalScrollIndicator={false}
            className="pt-4"
        >
            {/*Restaurant Cards*/}
            <RestaurantCard 
                id={1}
                imgUrl="https://links.papareact.com/gn7"
                title="Fire Sushi"
                rating={4.5}
                genre="Japanese"
                address="123 Main Street"
                short_description="This is a short description"
                dishes={[]}
                long={29}
                lat={3}
            />
            <RestaurantCard 
                id={1}
                imgUrl="https://links.papareact.com/gn7"
                title="Fire Sushi"
                rating={4.5}
                genre="Japanese"
                address="123 Main Street"
                short_description="This is a short description"
                dishes={[]}
                long={29}
                lat={3}
            />
            <RestaurantCard 
                id={1}
                imgUrl="https://links.papareact.com/gn7"
                title="Fire Sushi"
                rating={4.5}
                genre="Japanese"
                address="123 Main Street"
                short_description="This is a short description"
                dishes={[]}
                long={29}
                lat={3}
            />
        </ScrollView>
    </View>
  )
}

export default FeaturedRow