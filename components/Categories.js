import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const sushi = require("/Users/timo/Dokumente/Programmieren/Native/React_Native/Deliveroo_clone_app/deliveroo-clone/assets/sushi_category.jpg");
const pizza = require("/Users/timo/Dokumente/Programmieren/Native/React_Native/Deliveroo_clone_app/deliveroo-clone/assets/pizza_category.jpg");
const burger = require("/Users/timo/Dokumente/Programmieren/Native/React_Native/Deliveroo_clone_app/deliveroo-clone/assets/burger_category.jpg");
const bowl = require("/Users/timo/Dokumente/Programmieren/Native/React_Native/Deliveroo_clone_app/deliveroo-clone/assets/bowl_category.jpg");
const asian = require("/Users/timo/Dokumente/Programmieren/Native/React_Native/Deliveroo_clone_app/deliveroo-clone/assets/asian_category.jpg");

const Categories = () => {
  return (
    <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            paddingTop: 10,
            paddingHorizontal: 15,
    }}>

        {/*Category card*/}
        
        <CategoryCard imgUrl={sushi} title="Sushi" />
        <CategoryCard imgUrl={asian} title="Asian" />
        <CategoryCard imgUrl={pizza} title="Pizza" />
        <CategoryCard imgUrl={burger} title="Burger" />
        <CategoryCard imgUrl={bowl} title="Bowl" />
    </ScrollView>
  )
}

export default Categories