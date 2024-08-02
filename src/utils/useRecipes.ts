interface Recipe {
  id: number
  name: string
  cuisine: string
  time: string
}

interface RecipeResponse {
  recipes: Recipe[]
  total: number
  limit: number
  skip: number
}

import { useState, useEffect } from 'react'
import axios from 'axios'

const useRecipes = (currentPage: number, itemsPerPage: number) => {
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [totalPages, setTotalPages] = useState<number>(1)

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true)
      try {
        const skip = (currentPage - 1) * itemsPerPage
        const response = await axios.get<RecipeResponse>(
          `https://dummyjson.com/recipes?limit=${itemsPerPage}&skip=${skip}`,
        )
        setRecipes(response.data.recipes)
        setTotalPages(Math.ceil(response.data.total / itemsPerPage))
      } catch (error) {
        console.error('Error fetching recipes:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchRecipes()
  }, [currentPage, itemsPerPage])

  return { recipes, loading, totalPages }
}

export default useRecipes
