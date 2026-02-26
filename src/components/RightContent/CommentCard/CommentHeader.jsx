import React from 'react'
import ChevronUpIcon from '../../../icons/ChevronUpIcon'

const CommentHeader = ({ role, name, date, score, isExpanded, onToggle }) => {
  return (
    <div className={`flex items-center ${isExpanded ? 'border-b mb-4' : ''} justify-between  p-4`}>
      <div className="w-full flex flex-col gap-2   ">
        <div className=" w-full flex items-center justify-between gap-2 ">
          <div className="flex flex-col md:flex-row md:items-center gap-2">
           <div>
           <span className="px-4 py-1 bg-[#EFF8FF] border border-[#B2DDFF] text-[#175CD3] text-xs font-medium rounded-lg">
              {role}
            </span>
           </div>
            <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-gray-800">{name}</span>
            <span className="w-2 h-2 bg-primary rounded-full"></span>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-2 ">
          <span className="text-xs text-secondary-text flex items-center gap-1">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.33333 1.33334V4.00001M10.6667 1.33334V4.00001M2 6.66668H14M5.33333 9.33334H5.34M8 9.33334H8.00667M10.6667 9.33334H10.6733M5.33333 12H5.34M8 12H8.00667M10.6667 12H10.6733M3.33333 2.66668H12.6667C13.403 2.66668 14 3.26363 14 4.00001V13.3333C14 14.0697 13.403 14.6667 12.6667 14.6667H3.33333C2.59695 14.6667 2 14.0697 2 13.3333V4.00001C2 3.26363 2.59695 2.66668 3.33333 2.66668Z" stroke="#667085" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            {date}
          </span>
          <button className="text-xs text-secondary-text hover:text-primary flex items-center gap-1">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.33334 1.33334V4.00001M8.00001 1.33334V4.00001M10.6667 1.33334V4.00001M5.33334 6.66668H9.33334M5.33334 9.33334H10.6667M5.33334 12H8.66667M4.00001 2.66668H12C12.7364 2.66668 13.3333 3.26363 13.3333 4.00001V13.3333C13.3333 14.0697 12.7364 14.6667 12 14.6667H4.00001C3.26363 14.6667 2.66667 14.0697 2.66667 13.3333V4.00001C2.66667 3.26363 3.26363 2.66668 4.00001 2.66668Z" stroke="#667085" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            View survey
          </button>
          <div>
          <span className={`px-4 py-1 text-xs font-medium rounded-md border border-[#ABEFC6] ${score === 'promoter'
            ? 'bg-[#ECFDF3] text-[#067647]'
            : score === 'passive'
              ? 'bg-yellow-100 border border-yellow-700 text-yellow-700'
              : 'bg-red-100 border border-red-700 text-red-700'
            }`}>
            {score.charAt(0).toUpperCase() + score.slice(1)}
          </span>
          </div>
        </div>

      </div>
      <div><button
            onClick={onToggle}
            className="p-1 hover:bg-gray-50 rounded transition-colors"
            aria-label={isExpanded ? 'Collapse' : 'Expand'}
          >
            <div className={`transition-transform duration-200 ${isExpanded ? '' : 'rotate-180'}`}>
              <ChevronUpIcon />
            </div>
          </button></div>
    </div>
  )
}

export default CommentHeader

