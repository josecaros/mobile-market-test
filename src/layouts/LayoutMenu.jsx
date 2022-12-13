import React from 'react'
import BreadCrum from '../components/utilities/BreadCrum';
import PropTypes from 'prop-types';


const TopMenuBar = (props) => {

  return (
    <>
      <div>
        <div>
          <div className='flex m-0 w-full bg-gradient-to-r from-cyan-50 to-blue-600'>
            <div className='flex min-w-fit'>
              <img src='/img/LogoPNG.png' className='w-20 h-14 m-2' />
              <div className='flex flex-col items-center'>
                <h1 className='text-5xl font-Aref text-sky-500 '>Cel-Shop</h1>
                <span className='font-Aref text-sm text-gray-600'>Venta de telefonos celulares</span>
              </div>
            </div>
            <div className='w-full flex flex-row-reverse'>
              <div className='m-4 relative w-10 h-10 flex justify-center items-center'>
                <i className='pi pi-shopping-cart text-gray-200 p-2 hover:bg-sky-500 hover:text-blue-600 rounded-full ' style={{fontSize:'1.8rem'}} />
                <div className='absolute rounded-full w-5 h-5 top-0 right-0 bg-red-500 text-white flex items-center justify-center border border-gray-200 text-xs'>22</div>
              </div>
            </div>
          </div>
        </div>
        <div className='ml-5 md:ml-14'>
          <BreadCrum />
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