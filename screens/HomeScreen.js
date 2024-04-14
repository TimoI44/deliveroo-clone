import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
    UserIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
    AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline"
import FeaturedRow from '../components/FeaturedRow'
//@ts-ignore vscode shows error line can be removed after vscode restarded
import Categories from '../components/Categories'

const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);

    return(
        <SafeAreaView className="bg-white pt-5">

            {/* Header */}
            <View className="flex-row pb-3 mx-4 space-x-2 items-center">
                <Image
                    source={{
                        uri: "https://links.papareact.com/wru"
                    }}
                    className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                />

                <View className="flex-1">
                    <Text className="font-bold text-xs text-gray-400">Deliver Now!</Text>
                    <Text className="font-bold text-xl">Current Location
                        <ChevronDownIcon size={20} color="#0CB"/></Text>
                </View>

                <UserIcon color="#0CB" size={35}/>
            </View>

            {/*Search*/}
            <View className="flex-row items-center space-x-2 pb-2 mx-4">
                <View className="flex-row space-x-2 bg-gray-200 p-3 flex-1">
                    <MagnifyingGlassIcon color="gray" size={20} />
                    <TextInput 
                        placeholder='Restaurants and cuisines'
                        keyboardType='default'
                    />
                </View>

                <AdjustmentsVerticalIcon size={20} color="#0CB"/>
            </View>

            {/*Body*/}
            <ScrollView className="bg-gray-100" showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:130}}>

                {/*Categories*/}
                <Categories />

                {/*Featured Row*/}
                <FeaturedRow
                    id={1}
                    title="Featured"
                    description="Paid placements from our partners"
                    featuredCategory="featured"
                />
                <FeaturedRow
                    id={2}
                    title="Featured"
                    description="Paid placements from our partners"
                    featuredCategory="featured"
                />
                <FeaturedRow
                    id={3}
                    title="Featured"
                    description="Paid placements from our partners"
                    featuredCategory="featured"
                />

            </ScrollView>

        </SafeAreaView>
    )
}

export default HomeScreen