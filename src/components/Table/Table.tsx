import React, { useState } from 'react'

import useRecipes from '@/utils/useRecipes'

const RecipeTable = () => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const itemsPerPage = 10

  const { recipes, loading, totalPages } = useRecipes(currentPage, itemsPerPage)

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage)
    }
  }

  return (
    <div className='p-10'>
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          marginBottom: '1rem',
        }}
      >
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '8px' }}>
              Nombre Receta
            </th>
            <th style={{ border: '1px solid black', padding: '8px' }}>
              Cocina
            </th>
            <th style={{ border: '1px solid black', padding: '8px' }}>
              Tiempo Preparación
            </th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={3} style={{ textAlign: 'center', padding: '8px' }}>
                Cargando...
              </td>
            </tr>
          ) : (
            recipes.map((recipe) => (
              <tr key={recipe.id}>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  {recipe.name}
                </td>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  {recipe.cuisine}
                </td>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  {recipe.time}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div className='flex justify-center items-center gap-2'>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <span>
          Página {currentPage} de {totalPages}
        </span>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Siguiente
        </button>
      </div>
    </div>
  )
}

export default RecipeTable
