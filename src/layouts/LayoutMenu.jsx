import React, { useContext } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';


const TopMenuBar = (props) => {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      <div>
        <div>
          <div className='flex justify-between m-0 w-full bg-gradient-to-r from-cyan-50 to-blue-600'>
            <Link to='/' className='flex min-w-fit'>
              <img src='/img/LogoPNG.png' className='w-20 xl:w-32 xl:h-20 h-14 m-2' />
              <div className='flex flex-col items-center'>
                <h1 className='text-5xl xl:text-7xl font-Aref text-sky-500 '>Cel-Shop</h1>
                <span className='font-Aref text-sm xl:text-lg text-gray-600'>Venta de telefonos celulares</span>
              </div>
            </Link>
            <div className='flex'>
              <div className='m-4 relative w-10 h-10 flex justify-center items-center'>
                <i className='pi pi-shopping-cart text-gray-200 p-2 hover:bg-sky-500 hover:text-blue-600 rounded-full ' style={{ fontSize: '1.8rem' }} />
                <div className='absolute rounded-full w-5 h-5 top-0 right-0 bg-red-500 text-white flex items-center justify-center border border-gray-200 text-xs'>{cartItems}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mx-5 md:mx-14 xl:mx-32'>
        {props.children}
      </div>
    </>
  )
}

TopMenuBar.propTypes = {
  children: PropTypes.ReactNodeArray
}
export default TopMenuBar