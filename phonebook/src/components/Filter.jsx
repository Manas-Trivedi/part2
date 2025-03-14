import React from 'react'

const Filter = ({value, onChange, placeholder}) => {
  return (
    <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
    />
  )
}

export default Filter