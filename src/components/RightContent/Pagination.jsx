import React from 'react'

const Pagination = ({ currentPage, totalItems, pageSize, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / pageSize)
  const startItem = (currentPage - 1) * pageSize + 1
  const endItem = Math.min(currentPage * pageSize, totalItems)

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1)
    }
  }

  return (
    <div className="w-full  px-6 py-3 flex items-center justify-between">
      <div className="text-sm text-gray-800 font-medium">
        {startItem}-{endItem} of {totalItems}
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`p-1.5 rounded-lg text-sm font-medium border transition-colors ${
            currentPage === 1
              ? ' text-gray-400 cursor-not-allowed'
              : ' text-gray-800 bg-white hover:bg-gray-100'
          }`}
          aria-label="Previous page"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`p-1.5 border rounded-lg text-sm font-medium transition-colors ${
            currentPage === totalPages
              ? ' text-gray-400 cursor-not-allowed'
              : ' text-gray-800 bg-white hover:bg-gray-100'
          }`}
          aria-label="Next page"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 12L10 8L6 4" stroke="currentColor" stroke-width="1.33" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        </button>
      </div>
    </div>
  )
}

export default Pagination
