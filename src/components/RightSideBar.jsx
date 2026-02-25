import React, { useState } from 'react'
import Header from './Header'
import SecondaryHeader from './SecondaryHeader'
import Content from './Content'
const RightSideBar = () => {
  const [viewAiSummary, setViewAiSummary] = useState(false)
  return (
   
    <div className='max-h-[100vh] bg-[#F9FAFB] '>

        <Header />
        <SecondaryHeader viewAiSummary={viewAiSummary} setViewAiSummary={setViewAiSummary} />
        <Content viewAiSummary={viewAiSummary} setViewAiSummary={setViewAiSummary} />
    </div>
  )
}

export default RightSideBar