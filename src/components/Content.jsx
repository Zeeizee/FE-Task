import React from 'react'
import AiSummaryContent from './AiSummary/AiSummaryContent'
import MainContent from './RightContent/MainContent'


const Content = ({ viewAiSummary, setViewAiSummary }) => {
    return (
        <div  className='w-full  min-w-[650px] overflow-y-auto  flex  gap-4  '>
            

            
            <div className={` transition-all  duration-300 ${viewAiSummary ? 'w-[calc(100%-345px)]' : 'w-full'}`}>
            <MainContent />            
            </div>
           
            {viewAiSummary && <div className={` ${viewAiSummary ? 'w-[345px]' : 'w-0'} transition-all duration-700 h-full fixed right-0 border-l border-gray-300 z-50`}>
            <AiSummaryContent onClose={() => setViewAiSummary(false)} />
            </div>}

        </div>
    )
}

export default Content