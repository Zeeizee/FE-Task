import React from 'react'
import AiSummaryContent from './AiSummary/AiSummaryContent'
import MainContent from './RightContent/MainContent'


const Content = ({ viewAiSummary, setViewAiSummary }) => {
    return (
        <div  className='w-full h-[calc(100vh-118px)] overflow-y-auto  flex bg-[#F9FAFB] gap-4 '>
            

            
            <div className={` transition-all duration-300 ${viewAiSummary ? 'w-2/3' : 'w-full'}`}>
            <MainContent />            
            </div>
           
            {viewAiSummary && <div className={` ${viewAiSummary ? 'w-1/3' : 'w-0'} transition-all duration-700 h-full bg-white z-50`}>
            <span className='text-2xl font-bold' onClick={() => setViewAiSummary(false)}>AI Summary</span>
            <AiSummaryContent />
            </div>}

        </div>
    )
}

export default Content