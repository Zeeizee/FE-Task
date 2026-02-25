import React from 'react'
import SearchIcon from '../icons/SearchIcon'

const SearchInput = ({ 
  placeholder = 'Search...',
  value,
  onChange,
  className = '',
  ...props 
}) => {
  return (
    <div className={`relative flex items-center rounded-lg shadow  ${className}`}>
      <div className="absolute left-3 pointer-events-none">
        <SearchIcon strokeColor="#667085" />
      </div>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full pl-10  pr-4 py-2 h-9 bg-white border border-gray-300 rounded-lg text-sm text-secondary-text placeholder-secondary-text focus:outline-none focus:border-secondary-text shadow-sm"
        {...props}
      />
    </div>
  )
}

export default SearchInput

