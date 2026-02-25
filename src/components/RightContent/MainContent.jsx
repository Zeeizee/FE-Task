import React, { useState, useMemo } from 'react'
import Pagination from './Pagination'
import WordCloud from './WordCloud'
import CommentCard from './CommentCard/CommentCard'
import { commentsData } from '../../data/commentsData'

const MainContent = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 5

  const paginatedComments = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize
    const endIndex = startIndex + pageSize
    return commentsData.slice(startIndex, endIndex)
  }, [currentPage, pageSize])

  return (
    <div className="w-full flex flex-col gap-1 ">
      <Pagination
        currentPage={currentPage}
        totalItems={commentsData.length}
        pageSize={pageSize}
        onPageChange={setCurrentPage}
      />
      
      <div className="px-6  flex flex-col gap-4 max-h-[calc(100vh-215px)] overflow-y-auto">
        <WordCloud />
        
        <div className="flex flex-col gap-4">
          {paginatedComments.map((comment) => (
            <CommentCard key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MainContent