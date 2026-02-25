import React, { useState } from 'react'
import AiSummaryTabs from './AiSummaryTabs'
import DeleteAction from './DeleteAction'
import HistoryCard from './HistoryCard'
import { aiSummaryHistory } from '../../data/aiSummaryData'

const AiSummaryContent = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('history')
  const [selectedItems, setSelectedItems] = useState([])
  const [selectAll, setSelectAll] = useState(false)

  const handleTabChange = (tab) => {
    setActiveTab(tab)
    setSelectedItems([])
    setSelectAll(false)
  }

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedItems([])
    } else {
      setSelectedItems(aiSummaryHistory.map(item => item.id))
    }
    setSelectAll(!selectAll)
  }

  const handleSelectItem = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(item => item !== id))
      setSelectAll(false)
    } else {
      setSelectedItems([...selectedItems, id])
      if (selectedItems.length + 1 === aiSummaryHistory.length) {
        setSelectAll(true)
      }
    }
  }

  const handleClose = () => {
    if (onClose) {
      onClose()
    }
  }

  const handleMaximize = () => {
    // This will be handled by parent component if needed
    console.log('Maximize AI Summary')
  }

  return (
    <div className="h-full flex flex-col bg-[#F9FAFB] ">
      <AiSummaryTabs
        activeTab={activeTab}
        onTabChange={handleTabChange}
        onClose={handleClose}
        onMaximize={handleMaximize}
      />

      {activeTab === 'history' && (
        <>
          <DeleteAction
            isChecked={selectAll}
            onToggle={handleSelectAll}
            selectedCount={selectedItems.length}
          />

          <div className="flex-1 overflow-y-auto  p-4  bg-white mt-2" >
            {aiSummaryHistory.map((item) => (
              <HistoryCard
                key={item.id}
                item={item}
                isSelected={selectedItems.includes(item.id)}
                onSelect={handleSelectItem}
              />
            ))}
          </div>
        </>
      )}

      {activeTab === 'summary' && (
        <div className="flex-1 flex items-center justify-center text-secondary-text">
          <p className="text-sm">AI Summary content will be displayed here</p>
        </div>
      )}
    </div>
  )
}

export default AiSummaryContent
