import React from 'react'
import ChevronDownIcon from '../../../icons/ChevronDownIcon'

const CommentActions = () => {
  return (
    <div className="flex flex-col gap-2 md:gap-0 md:flex-row items-center justify-between  px-6 py-4 ">
      <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
        <button className="px-4 py-2 bg-primary shadow text-white text-sm font-medium rounded-lg hover:bg-[#943AD7] transition-colors flex items-center gap-2">
          <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.83333 7.16667L0.5 3.83333L3.83333 0.5M7.16667 7.16667L3.83333 3.83333M3.83333 3.83333L7.16667 0.5M3.83333 3.83333H11.1667C11.8739 3.83333 12.5522 4.11428 13.0523 4.61438C13.5524 5.11448 13.8333 5.79276 13.8333 6.5V7.83333" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

          Reply all
        </button>
        <button className="px-4 py-2 border border-gray-300 text-gray-800 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
          <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.83333 7.16667L11.1667 3.83333M11.1667 3.83333L7.83333 0.5M11.1667 3.83333H3.16667C2.45942 3.83333 1.78115 4.11428 1.28105 4.61438C0.780951 5.11448 0.5 5.79276 0.5 6.5V7.83333" stroke="#182230" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

          Forward all
        </button>
        <button className="px-4 py-2 border border-gray-300 text-gray-800 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_571_344)">
              <path d="M8.93334 1.33335H4.00001C3.64639 1.33335 3.30725 1.47383 3.0572 1.72388C2.80715 1.97393 2.66668 2.31307 2.66668 2.66669V13.3334C2.66668 13.687 2.80715 14.0261 3.0572 14.2762C3.30725 14.5262 3.64639 14.6667 4.00001 14.6667H12C12.3536 14.6667 12.6928 14.5262 12.9428 14.2762C13.1929 14.0261 13.3333 13.687 13.3333 13.3334V8.40002M1.33334 4.00002H4.00001M1.33334 6.66669H4.00001M1.33334 9.33335H4.00001M1.33334 12H4.00001M14.252 3.75062C14.5176 3.48505 14.6668 3.12486 14.6668 2.74929C14.6668 2.37372 14.5176 2.01353 14.252 1.74796C13.9864 1.48239 13.6262 1.33319 13.2507 1.33319C12.8751 1.33319 12.5149 1.48239 12.2493 1.74796L8.90933 5.08929C8.75083 5.2477 8.63481 5.44351 8.57199 5.65862L8.01399 7.57196C7.99726 7.62932 7.99626 7.69013 8.01109 7.74802C8.02592 7.8059 8.05604 7.85874 8.09829 7.90099C8.14055 7.94325 8.19338 7.97336 8.25127 7.98819C8.30915 8.00303 8.36996 8.00202 8.42733 7.98529L10.3407 7.42729C10.5558 7.36448 10.7516 7.24846 10.91 7.08996L14.252 3.75062Z" stroke="#182230" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_571_344">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>

          Add note
        </button>
      </div>
      <button className="px-4 py-2 border border-gray-300 text-gray-800 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_571_278)">
            <path d="M12 13.3333C12 12.2724 11.5786 11.255 10.8284 10.5049C10.0783 9.75474 9.06085 9.33331 7.99998 9.33331M7.99998 9.33331C6.93911 9.33331 5.9217 9.75474 5.17155 10.5049C4.42141 11.255 3.99998 12.2724 3.99998 13.3333M7.99998 9.33331C9.47274 9.33331 10.6666 8.13941 10.6666 6.66665C10.6666 5.19389 9.47274 3.99998 7.99998 3.99998C6.52722 3.99998 5.33331 5.19389 5.33331 6.66665C5.33331 8.13941 6.52722 9.33331 7.99998 9.33331ZM14.6666 7.99998C14.6666 11.6819 11.6819 14.6666 7.99998 14.6666C4.31808 14.6666 1.33331 11.6819 1.33331 7.99998C1.33331 4.31808 4.31808 1.33331 7.99998 1.33331C11.6819 1.33331 14.6666 4.31808 14.6666 7.99998Z" stroke="#182230" stroke-linecap="round" stroke-linejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_571_278">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>

        Assign all comments
        <ChevronDownIcon />
      </button>
    </div>
  )
}

export default CommentActions

