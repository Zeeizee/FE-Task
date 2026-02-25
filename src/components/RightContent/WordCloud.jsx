import React from 'react'
import UploadIcon from '../../icons/UploadIcon'
import ChevronDownIcon from '../../icons/ChevronDownIcon'

const WordCloud = () => {
  return (
    <div style={{ boxShadow: `0px 4px 22px 0px rgba(234, 236, 240, 1)`
    }} className="w-full bg-white rounded-lg  border border-gray-200 p-4 ">
      

      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h2 className="text-lg font-semibold text-gray-800 mb-1">Word Cloud</h2>
          <p className="text-sm text-secondary-text">
            The more often a word is mentioned, the bigger and bolder it appears. Commonly used words are not displayed.
          </p>
        </div>
        <div className="flex items-center gap-2 ml-4">
          <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
            <UploadIcon />
          </button>
          <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
            <ChevronDownIcon />
          </button>
        </div>
      </div>
    </div>
  )
}

export default WordCloud

