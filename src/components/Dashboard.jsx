import React, { useState } from 'react';
import Sidebar from './Sidebar';
import RightSideBar from './RightSideBar';

function Dashboard() {
  const [activeItem, setActiveItem] = useState('message');
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="max-h-[100vh] flex max-w-screen">

      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} expanded={expanded} setExpanded={setExpanded} />
      <div className='flex-1 max-h-[100vh] overflow-y-auto bg-[#F9FAFB] z-40'>
        <RightSideBar />
      </div>
    </div>
  );
}

export default Dashboard;

