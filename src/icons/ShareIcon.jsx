import React from 'react';

const ShareIcon = ({ className = '', strokeColor = '#4b5563' }) => {
  return (
    <svg 
      width="16" 
      height="16" 
      viewBox="0 0 16 16" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M10.6667 4.66667L5.33333 10M10.6667 4.66667H7.33333M10.6667 4.66667V8M3.33333 12.6667H12.6667" 
        stroke={strokeColor} 
        strokeWidth="1.33333" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ShareIcon;

