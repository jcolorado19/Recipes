import { MouseEventHandler, useEffect, useRef, useState } from 'react'
import { ChevronDoubleLeftIcon, TagIcon } from '@heroicons/react/16/solid'

import styles from './style.module.scss'

const SidebarCategory = () => {
  const [toogleSidebar, setToogleSidebar] = useState(false)
  const asideCategory = useRef<HTMLDivElement>(null)

  const [category, setCategory] = useState([
    { id: '1', name: 'Easy' },
    { id: '2', name: 'Medium' },
    { id: '3', name: 'Hard' },
  ])

  const handleToogleSidebar: MouseEventHandler = (event) => {
    event.stopPropagation()
    setToogleSidebar(!toogleSidebar)
  }

  const handleCLickOutside = (e: MouseEvent) => {
    if (
      asideCategory.current &&
      !asideCategory.current.contains(e.target as Node)
    ) {
      setToogleSidebar(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleCLickOutside)

    return () => {
      document.removeEventListener('click', handleCLickOutside)
    }
  }, [toogleSidebar])

  return (
    <aside
      ref={asideCategory}
      className={`${styles['sidebar-category']} ${
        toogleSidebar
          ? styles['sidebar-category--open']
          : styles['sidebar-category--close']
      }`}
    >
      <h2 className={styles['sidebar-category__title']}>Nivel de dificultad</h2>
      {toogleSidebar ? (
        <ChevronDoubleLeftIcon
          className={`${styles.icon} ${styles['icon__toggle']}`}
          onClick={handleToogleSidebar}
        />
      ) : (
        <TagIcon
          className={`${styles.icon} ${styles['icon__toggle']} ${styles['icon__toggle--close']}`}
          onClick={handleToogleSidebar}
        />
      )}

      <ul className={styles['sidebar-category__list']}>
        {category.map((cat, index) => {
          return (
            <li key={cat.id} className={styles['sidebar-category__item']}>
              {cat.name}
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default SidebarCategory
