import React from 'react'

const CommentItem = ({ comment }) => {
  return (
    <div className=" border-b py-4 px-6 ">
      <div className="flex items-start gap-2 mb-2">
        <span className="text-sm font-medium text-gray-800">{comment.question}</span>
        <span className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0"></span>
      </div>
      <p className="text-sm text-gray-800 leading-relaxed">{comment.answer}</p>
      <div className='flex items-center justify-between'>
        <div>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 14.6667C14.3682 14.6667 14.6667 14.3682 14.6667 14C14.6667 13.6318 14.3682 13.3333 14 13.3333C13.6318 13.3333 13.3333 13.6318 13.3333 14C13.3333 14.3682 13.6318 14.6667 14 14.6667Z" stroke="#667085" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M18.6667 14.6667C19.0349 14.6667 19.3333 14.3682 19.3333 14C19.3333 13.6318 19.0349 13.3333 18.6667 13.3333C18.2985 13.3333 18 13.6318 18 14C18 14.3682 18.2985 14.6667 18.6667 14.6667Z" stroke="#667085" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9.33333 14.6667C9.70152 14.6667 10 14.3682 10 14C10 13.6318 9.70152 13.3333 9.33333 13.3333C8.96514 13.3333 8.66666 13.6318 8.66666 14C8.66666 14.3682 8.96514 14.6667 9.33333 14.6667Z" stroke="#667085" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

        </div>
        <div className="flex items-center gap-3 mt-3">
          <button className="text-sm text-secondary-text hover:text-primary flex items-center gap-1.5">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.1667 12.5C11.1667 11.4391 10.7452 10.4217 9.99509 9.67157C9.24495 8.92143 8.22753 8.5 7.16667 8.5M7.16667 8.5C6.1058 8.5 5.08838 8.92143 4.33824 9.67157C3.58809 10.4217 3.16667 11.4391 3.16667 12.5M7.16667 8.5C8.63943 8.5 9.83333 7.30609 9.83333 5.83333C9.83333 4.36057 8.63943 3.16667 7.16667 3.16667C5.69391 3.16667 4.5 4.36057 4.5 5.83333C4.5 7.30609 5.69391 8.5 7.16667 8.5ZM13.8333 7.16667C13.8333 10.8486 10.8486 13.8333 7.16667 13.8333C3.48477 13.8333 0.5 10.8486 0.5 7.16667C0.5 3.48477 3.48477 0.5 7.16667 0.5C10.8486 0.5 13.8333 3.48477 13.8333 7.16667Z" stroke="#667085" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            Assign comment

          </button>
          <span className='mx-2 text-secondary-text'>|</span>
          <button className="text-sm text-secondary-text hover:text-primary flex items-center gap-1.5">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.33331 8.00001H12.6666M7.99998 3.33334V12.6667" stroke="#667085" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            Add tag
          </button>
        </div>
      </div>
    </div>
  )
}

export default CommentItem

