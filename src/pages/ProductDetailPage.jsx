import React from 'react'

const ProductDetailPage = () => {
  return (
    <div>
      <p className='text-3xl font-Aref font-bold'>Detalles de Producto - {'Nombre del cel'}</p>
      <div className='grid grid-rows-2 grid-cols-1 sm:grid-cols-2 sm:grid-rows-1'>
        <div>
          <img src="/img/iphone.png" alt="Celular" className='w-auto h-[80vh] mx-auto' />
        </div>
        <div className='grid grid-rows-2'>
          <div className='m-5'>
            <ul>
              <li className='grid-cols-2'><span className='w-5/12 font-bold'>Marca:</span></li>
              <li><span className='w-5/12 font-bold'>Modelo:</span></li>
              <li><span className='w-5/12 font-bold'>Precio:</span></li>
              <li><span className='w-5/12 font-bold'>CPU:</span></li>
              <li><span className='w-5/12 font-bold'>RAM:</span></li>
              <li><span className='w-5/12 font-bold'>Sistema Operativo:</span></li>
              <li><span className='w-5/12 font-bold'>Resolucion de Pantalla:</span></li>
              <li><span className='w-5/12 font-bold'>Bateria:</span></li>
              <li><span className='w-5/12 font-bold'>Dimensiones:</span></li>
              <li><span className='w-5/12 font-bold'>Camaras:</span></li>
              <li className='grid grid-cols-2'><span className='w-5/12 font-bold'>Peso:</span><span>2kg</span></li>
            </ul>
            
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage