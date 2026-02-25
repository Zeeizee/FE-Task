import React from 'react'
import MaximizeIcon from '../../icons/MaximizeIcon'
import CloseIcon from '../../icons/CloseIcon'

const AiSummaryTabs = ({ activeTab, onTabChange, onClose, onMaximize }) => {
  return (
    <div className="flex items-center justify-between border-b border-gray-200 px-6 pt-4 bg-white">
      <div className="flex items-center gap-6">
        <button
          onClick={() => onTabChange('summary')}
          className={`text-sm font-medium transition-colors pb-2 ${
            activeTab === 'summary'
              ? 'text-primary border-b-2 border-primary'
              : 'text-secondary-text hover:text-gray-800'
          }`}
        >
          AI summary
        </button>
        <button
          onClick={() => onTabChange('history')}
          className={`text-sm font-medium transition-colors pb-2 relative ${
            activeTab === 'history'
              ? 'text-primary border-b-2 border-primary'
              : 'text-secondary-text hover:text-gray-800'
          }`}
        >
          History (2)
        </button>
      </div>
      <div className="flex items-center gap-2 -mt-2">
        <button
          onClick={onMaximize}
          className="p-1.5 hover:bg-gray-50 rounded transition-colors"
          aria-label="Maximize"
        >
          <MaximizeIcon />
        </button>
        <button
          onClick={onClose}
          className="p-1.5 hover:bg-gray-50 rounded transition-colors -mt-2"
          aria-label="Close"
        >
          <CloseIcon />
        </button>
      </div>
    </div>
  )
}

export default AiSummaryTabs

