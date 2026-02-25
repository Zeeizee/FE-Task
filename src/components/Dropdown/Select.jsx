import React, { useState, useEffect, useRef } from 'react'

const Select = ({ 
  textInput = '',
  icon,
  property = 'Default',
  filled = 'Default',
  showTextDescription = false,
  showLabel = false,
  showIcon = true,
  showIconLeft = false,
  label,
  description,  
  height = 36,
  gap = 8,
  options = [],
  value,
  onChange,
  placeholder = 'Select an option',
  className = '',
  leftIcon=null,

  ...props 
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState(value || textInput || placeholder)
  const dropdownRef = useRef(null)

  // Property/Variant configurations
  const propertyConfig = {
    Default: {
      background: 'bg-white',
      border: 'border border-gray-300',
      textColor: 'text-secondary-text',
      hoverBorder: 'hover:border-secondary-text'
    }
    // Add more variants here if needed
  }

  const currentProperty = propertyConfig[property] || propertyConfig.Default

  // Filled configurations
  const filledConfig = {
    Default: {
      background: 'bg-white'
    }
    // Add more filled variants here if needed
  }

  const currentFilled = filledConfig[filled] || filledConfig.Default

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  // Update selected value when value prop changes
  useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value)
    }
  }, [value])

  // Handle option selection
  const handleSelect = (option) => {
    const selectedText = typeof option === 'string' ? option : option.label || option.value
    setSelectedValue(selectedText)
    setIsOpen(false)
    
    if (onChange) {
      onChange(typeof option === 'string' ? option : option.value || option)
    }
  }

  // Determine what to display
  const displayIcon = showIcon && icon
  const displayText = selectedValue || textInput || placeholder
  
  // Icon position - rotate when open
  const iconElement = displayIcon ? (
    <span 
      className={`flex items-center justify-center transition-transform duration-200 ${
        isOpen && !showIconLeft ? 'rotate-180' : ''
      }`}
    >
      {icon}
    </span>
  ) : null

  return (
    <div className={`flex flex-col relative   ${className}`} ref={dropdownRef}>
      {showLabel && label && (
        <label className="text-sm font-medium text-gray-800 mb-1">
          {label}
        </label>
      )}
      <button 
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex flex-row  justify-between shadow items-center px-4 py-2 bg-white border border-gray-300 hover:border-secondary-text  rounded-lg ${currentProperty.textColor} text-sm cursor-pointer`}
        style={{          
          height: `${height}px`,
          gap: `${gap}px`,
        
          
        }}
        {...props}
      >
        {leftIcon && leftIcon}
        <span className="flex-1 text-left truncate">{displayText}</span>        
        {showIconLeft && iconElement}
        {!showIconLeft && iconElement}
      </button>

      {/* Dropdown Options */}
      {isOpen && options.length > 0 && (
        <div 
          className="w-full absolute top-full left-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-50 max-h-60 overflow-auto"
          
        >
          {options.map((option, index) => {
            const optionText = typeof option === 'string' ? option : option.label || option.value
            const optionValue = typeof option === 'string' ? option : option.value || option.label
            const isSelected = selectedValue === optionText

            return (
              <button
                key={index}
                type="button"
                onClick={() => handleSelect(option)}
                className={`w-full  px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors ${
                  isSelected ? 'bg-primary-selected text-primary font-medium' : 'text-secondary-text'
                } ${index === 0 ? 'rounded-t-lg' : ''} ${index === options.length - 1 ? 'rounded-b-lg' : ''}`}
              >
                {optionText}
              </button>
            )
          })}
        </div>
      )}

      {showTextDescription && description && (
        <p className="text-xs text-secondary-text mt-1">{description}</p>
      )}
    </div>
  )
}

export default Select
