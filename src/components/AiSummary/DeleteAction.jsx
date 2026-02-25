import React from 'react'
import TrashIcon from '../../icons/TrashIcon'

const DeleteAction = ({ isChecked, onToggle, selectedCount }) => {
  return (
    <div className="flex items-center gap-2  p-2 border-b border-gray-200 bg-white ">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onToggle}
        className="w-4 h-4  rounded focus:ring-primary focus:ring-2"
      />
      <button className="flex items-center gap-2 text-sm text-secondary-text hover:text-gray-800 transition-colors">
        <TrashIcon strokeColor={!selectedCount > 0 ? '#D0D5DD' : '#667085'} />
        <span className={selectedCount > 0 ? 'text-[#667085]' : 'text-[#D0D5DD]'}>Delete</span>
      </button>
     
    </div>
  )
}

export default DeleteAction

