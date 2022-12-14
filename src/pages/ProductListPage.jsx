import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext';
import { Link } from 'react-router-dom';
import BreadCrum from '../components/utilities/BreadCrum';
import { getProductList } from '../api/Productos/RestProductos';
import { useQuery } from 'react-query';

const ProductListPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { data: products } = useQuery(['products'], getProductList)

  return (
    <>
      <BreadCrum />
      <div className='mt-4'>
        <div>
          <div className='grid grid-cols-2 content-center justify-items-stretch'>
            <p className='text-4xl font-Aref font-bold'>Productos</p>

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
              products?.data?.filter((item) => {
                let brand = `${item.brand.toLowerCase()}`
                let model = `${item.model.toLowerCase()}`

                if (searchTerm == '')
                  return item
                else if (brand.includes(searchTerm?.toLowerCase()) || model.includes(searchTerm?.toLowerCase()))
                  return item
              }).map((item) => {
                return (
                  <Link key={item.id} to={`/detalle/${item.id}`}
                    className='w-40 sm:w-56 md:w-60 xl:w-80  h-48 sm:h-60 md:h-60 xl:h-96 transform hover:scale-105 duration-200'>
                    <div className='h-4/6'>
                      <img src={item.imgUrl && item.imgUrl != '' ? item.imgUrl : '/img/iphone.png'} className='h-full w-auto mx-auto' />
                    </div>
                    <div className='mx-2 sm:mx-4 xl:mx-6 flex items-center '>
                      <div className='w-20 sm:w-32 md:w-40 xl:w-52'>
                        <p className='font-bold text-sm md:text-base text-gray-800 truncate text-center '> {item.brand} </p>
                        <p className='font-semibold text-sm md:text-base text-gray-700 truncate text-center '>{item.model}</p>
                      </div>
                      <div className='mx-auto justify-start text-yellow-700 font-Aref min-w-fit font-bold text-xl'>${item.price}</div>
                    </div>
                  </Link>
                )
              })

            }
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductListPage