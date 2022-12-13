import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext';

const items = [
  {
    id: 1,
    nombre: 'Cel 1',
    marca: 'samsung'
  },
  {
    id: 2,
    nombre: 'Cel 1',
    marca: 'samsung'
  },
  {
    id: 3,
    nombre: 'Cel 1',
    marca: 'samsung'
  },
  {
    id: 4,
    nombre: 'Cel 1',
    marca: 'samsung'
  },
  {
    id: 5,
    nombre: 'Cel 1',
    marca: 'samsung'
  },
  {
    id: 6,
    nombre: 'Cel 1',
    marca: 'samsung'
  },
  {
    id: 7,
    nombre: 'Cel 1',
    marca: 'samsung'
  },
  {
    id: 8,
    nombre: 'Cel 1',
    marca: 'samsung'
  },
  {
    id: 9,
    nombre: 'Cel 1',
    marca: 'samsung'
  }
]

const ProductListPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className='mt-4'>
      <div>
        <div className='grid grid-cols-2 content-center justify-items-stretch'>
          <p className='text-3xl font-Aref font-bold'>Productos</p>

          <div className='justify-self-end mx-1 sm:mx-5'>
            <span className='p-input-icon-left'>
              <i className='pi pi-search' />
              <InputText value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder='Termino de Busqueda' className='h-10 w-40 sm:w-60' />
            </span>
          </div>
        </div>
      </div>
      <div className='mt-5'>
        <div className='grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 grid-flow-row gap-2'>
          {
            items.map((items) => {
              return (
                <div key={items.id} className='w-40 h-40 sm:w-56 sm:h-52 md:w-60 md:h-52 xl:w-80 xl:h-72 transform hover:scale-105 duration-200 cursor-pointer'>
                  <div className='h-4/6'>
                    <img src='/img/iphone.png' className='h-full w-auto mx-auto' />
                  </div>
                  <div className='mx-2 sm:mx-4 xl:mx-6 flex items-center '>
                    <div className='w-20 sm:w-32 md:w-40 xl:w-52'>
                      <p className='font-bold text-sm md:text-base text-gray-800 truncate text-center '> Marca </p>
                      <p className='font-semibold text-sm md:text-base text-gray-700 truncate text-center '>Modelo</p>
                    </div>
                    <div className='mx-auto justify-start text-yellow-700 font-Aref min-w-fit font-bold text-xl'>$1236.6</div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default ProductListPage