import React from 'react'
import CalendarIcon from '../../icons/CalendarIcon'
import PadlockIcon from '../../icons/PadlockIcon'
import PeopleIcon from '../../icons/PeopleIcon'
import ArrowRightIcon from '../../icons/ArrowRightIcon'

const HistoryCard = ({ item, isSelected, onSelect }) => {
  return (
    <div className='w-full flex items-center gap-2 '>
    <input
    type="checkbox"
    checked={isSelected}
    onChange={() => onSelect(item.id)}
    className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary focus:ring-2 mt-1"
  />
    <div className="flex-1 hover:bg-gray-50 cursor-pointer  flex justify-between gap-1 items-center shadowbg-white border border-gray-200 rounded-lg p-3 mb-3 hover:shadow-sm transition-shadow px-4">
      
      <div className="flex-1 flex items-start gap-3">
       
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-gray-800 mb-2">{item.title}</h3>
          
          <div className="flex flex-wrap  gap-1 px-1">
            {item.timeAgo && (
              <div className="flex items-center gap-1.5 text-xs text-secondary-text">
                <CalendarIcon />
                <span>{item.timeAgo}</span>
              </div>
            )}
            {item.date && item.timeAgo && <span className=' text-[#EAECF0] mx-1'>|</span>}
            {item.date && (
              <div className="flex items-center gap-1.5 text-xs text-secondary-text">
                <CalendarIcon />
                <span>{item.date}</span>
              </div>
            )}
            {item.isPrivate && <span className='text-[#EAECF0] mx-1'>|</span>}
            {item.isPrivate && (
              <div className="flex items-center gap-1.5 text-xs text-secondary-text">
                <PadlockIcon />
                <span>private</span>
              </div>
            )}
             {item.participants && <span className='text-[#EAECF0] mx-1'>|</span>}
            {item.participants && (
              <div className="flex items-center gap-1.5 text-xs text-secondary-text">
                <PeopleIcon />
                <span>{item.participants} participants</span>
              </div>
            )}
            
            
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                Time period: {item.timePeriod}
              </span>
              {item.assignee && (
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                  Assign: {item.assignee}
                </span>
              )}
            </div>
        </div>
        
        
      </div>
      <div className=''>
      <button className="text-white p-1  hover:bg-gray-50 rounded transition-colors ">
          <ArrowRightIcon />
        </button>
    </div>
    </div>
    </div>
  )
}

export default HistoryCard

