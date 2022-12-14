import React from 'react'
import PropTypes from 'prop-types'

const CameraDisplay = ({ primaryC, secondaryC }) => {
  console.log('prim', (primaryC && primaryC != ''))
  console.log('sec', (secondaryC && secondaryC != ""))

  if ((primaryC && primaryC !== '') || (secondaryC && secondaryC !== '')) {
    return (
      <li className='flex'>
        <span className='w-28 font-bold'>{'Camaras:'}</span>
        <div>
          <div className='flex my-1'>
            <p className='font-semibold w-24'>Primaria:</p>
            <div className='ml-2'>

              {
                Array.isArray(primaryC) ?
                  primaryC.map((cameraP, index) => {
                    return (<p key={index}><i className='pi pi-camera mx-1' />{cameraP}</p>)
                  }) :
                  <span><i className='pi pi-camera mx-1' />{primaryC}</span>
              }
            </div>
          </div>
          <div className='flex my-1'>
            <p className='font-semibold w-24'>Secundaria:</p>
            <div className='ml-2'>
              {
                Array.isArray(secondaryC) ?
                  secondaryC.map((cameraS, index) => {
                    return (<p key={index}><i className='pi pi-camera mx-1' /> {cameraS}</p>)
                  }) :
                  <span><i className='pi pi-camera mx-1' />{secondaryC}</span>
              }
            </div>
          </div>


        </div>
      </li>
    )
  }
  else null
}
CameraDisplay.propTypes = {
  primaryC: PropTypes.string | PropTypes.array,
  secondaryC: PropTypes.string | PropTypes.array
}
export default CameraDisplay