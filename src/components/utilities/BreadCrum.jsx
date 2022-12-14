import React from 'react'

const BreadCrum = () => {
  return (
    <div className='font-font-1 text-xl my-3 flex items-center text-green-500'>
      <i className='pi pi-home mb-1' style={{fontSize:'1.3rem'}}/>
      <span>Productos</span>
      <i className='pi pi-angle-right' />
      <span>Celular Smart</span>
    </div>
  )
}

export default BreadCrum