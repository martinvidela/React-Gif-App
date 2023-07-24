import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([])

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) {
            console.log('Categoria ya creada')
            return
        }
        setCategories([ newCategory,...categories])

    }


    return (
        <>
          
            <h1>Gif App</h1>


            {/* Input */}
            <AddCategory
                onNewCategory={(event) => onAddCategory(event)}

            />

            {/* Listado de gifs */}
                {
                    categories.map((category) => (
                        <GifGrid
                            key={category}
                            category={category} />))
                }


       
        </>
    )
}

