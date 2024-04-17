import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CategoryCard from './CategoryCard'
import sanityClient from '../sanity';
import { useEffect } from 'react';

const Categories = () => {

  //Stores the sanity data
  const [categories, setCategories] = useState([]);

  //Getting sanity data
  useEffect(() => {
    sanityClient.fetch(`
      *[_type == "category"] | order(_createdAt asc)
    `).then((data) => {
        setCategories(data);
    })
}, [])

  return (
    <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            paddingTop: 10,
            paddingHorizontal: 15,
    }}>

        {/*Category card*/}
        
        {categories?.map(category => (
          <CategoryCard
            key={category._id}
            imgUrl={category.image}
            title={category.name}
          />
        ))}

    </ScrollView>
  )
}

export default Categories