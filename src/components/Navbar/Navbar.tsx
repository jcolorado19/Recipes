import Image from 'next/image'
import Link from 'next/link'

import { MagnifyingGlassIcon, Bars3Icon } from '@heroicons/react/24/solid'

const Navbar = () => {
  return (
    <nav className='bg-white shadow-md fixed w-full'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          <div className='flex'>
            <Link href='/' className='flex-shrink-0'>
              <Image src='/images/logo.png' alt='Logo' width='60' height='60' />
            </Link>
          </div>
          <div className='hidden md:flex md:items-center md:space-x-4'>
            <Link href='/' className='text-gray-900 hover:text-gray-700'>
              Iniciar Sesión
            </Link>

            <div className='relative'>
              <input
                type='text'
                placeholder='Buscar'
                className='block w-full pl-3 pr-10 py-2 border rounded-md leading-5 bg-white border-gray-300 placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm'
              />
              <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
                <MagnifyingGlassIcon className='h-5 w-5 text-gray-400' />
              </div>
            </div>
          </div>
          <div className='flex items-center md:hidden'>
            <button
              type='button'
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-gray-700 focus:outline-none'
            >
              <Bars3Icon className='h-6 w-6 text-black' />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
