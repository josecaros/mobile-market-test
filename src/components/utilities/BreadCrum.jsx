import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const BreadCrum = ({ currentProduct }) => {
  return (
    <div className='font-font-1 text-xl my-3 flex items-center text-green-500'>
      <Link to={'/'}>
        <i className='pi pi-home mb-1' style={{ fontSize: '1.3rem' }} />
        <span>Lista de Productos</span>
      </Link>
      {
        currentProduct &&
        <div>
          <i className='pi pi-angle-right' />
          <span>{currentProduct}</span>
        </div>
      }
    </div>
  )
}
BreadCrum.propTypes = {
  currentProduct: PropTypes.string
}

export default BreadCrum