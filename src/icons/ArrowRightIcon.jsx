import React from 'react'

const ArrowRightIcon = ({ className = '', strokeColor = '#667085' }) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M6 12L10 8L6 4" stroke={strokeColor} strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default ArrowRightIcon

