import React from 'react'
import PropTypes from 'prop-types'

const FeatureDisplay = ({ label, value }) => {

  if (value && value != '') {
    return (
      <li className='flex items-center'>
        <span className='w-28 font-bold'>{label}</span>
        <span>{value}</span>
      </li>
    )
  } else
    return null
}

FeatureDisplay.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string
}
export default FeatureDisplay