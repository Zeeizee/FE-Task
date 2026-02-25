import React from 'react'

const SecondaryButton = ({ 
  text = '',
  icon,
  size = 'Medium',
  property = 'Default',
  showIcon = true,
  showText = true,
  showIconRight = false,
  children,
  className = '', 
  ...props 
}) => {
  // Size configurations
  const sizeConfig = {
    Small: {
      padding: 'px-3 py-1.5',
      height: 'h-8',
      gap: 'gap-1.5',
      textSize: 'text-sm'
    },
    Medium: {
      padding: 'px-4 py-2',
      height: 'h-9',
      gap: 'gap-2',
      textSize: 'text-sm'
    },
    Large: {
      padding: 'px-5 py-2.5',
      height: 'h-10',
      gap: 'gap-2.5',
      textSize: 'text-base'
    }
  }

  const currentSize = sizeConfig[size] || sizeConfig.Medium

  // Property/Variant configurations
  const propertyConfig = {
    Default: {
      background: 'bg-white',
      border: 'border border-[#D0D5DD]',
      textColor: 'text-grey-800'
    }
    // Add more variants here if needed (e.g., 'Destructive', 'Outline', etc.)
  }

  const currentProperty = propertyConfig[property] || propertyConfig.Default

  // Determine what to display
  const displayIcon = showIcon && icon
  const displayText = showText && (text || children)
  
  // Icon position
  const iconElement = displayIcon ? (
    <span className="flex items-center justify-center">{icon}</span>
  ) : null

  return (
    <button 
      className={`border border-gray-300 hover:border-secondary-text flex flex-row justify-center shadow items-center ${currentSize.padding} ${currentSize.gap} ${currentSize.height} ${currentProperty.background} ${currentProperty.border}  rounded-lg flex-none ${currentSize.textSize} ${currentProperty.textColor} ${className}`}
      {...props}


    >
      {!showIconRight && iconElement}
      {displayText && <span>{text || children}</span>}
      {showIconRight && iconElement}
    </button>
  )
}

export default SecondaryButton