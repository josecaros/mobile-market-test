import React from 'react'
import PropTypes from 'prop-types'

const FeatureDisplay = ({ label, value, extra }) => {

  if (value && value != '') {
    return (
      <li className='flex items-center'>
        <span className='w-28 font-bold'>{label}</span>
        <span>{extra && extra}{value}</span>
      </li>
    )
  } else
    return null
}

FeatureDisplay.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  extra: PropTypes.string
}
export default FeatureDisplay