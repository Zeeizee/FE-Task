import React, { useState } from 'react'
import CommentHeader from './CommentHeader'
import CommentItem from './CommentItem'
import CommentActions from './CommentActions'

const CommentCard = ({ comment }) => {
  const [isExpanded, setIsExpanded] = useState(true)

  return (
    <div  
    
    style={{ boxShadow: `0px 4px 22px 0px rgba(234, 236, 240, 1)`}}
    className="bg-white rounded-lg " >
      <CommentHeader
        role={comment.role}
        name={comment.name}
        date={comment.date}
        score={comment.score}
        isExpanded={isExpanded}
        onToggle={() => setIsExpanded(!isExpanded)}
      />
      
      {isExpanded && (
        <>
          <div className={`${isExpanded ? '' : ''}`}>
            {comment.comments.map((commentItem) => (
              <CommentItem key={commentItem.id} comment={commentItem} />
            ))}
          </div>
          <CommentActions />
        </>
      )}
    </div>
  )
}

export default CommentCard

