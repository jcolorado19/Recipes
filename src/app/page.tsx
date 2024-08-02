'use client'

import SidebarCategory from '@/components/SidebarCategory/SidebarCategory'
import Table from '@/components/Table/Table'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center p-28'>
      <h1>Recetas para que hagas en casa</h1>

      <div>
        <SidebarCategory />
        <Table />
      </div>
    </main>
  )
}
