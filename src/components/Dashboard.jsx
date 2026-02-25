import React, { useState } from 'react';
import Sidebar from './Sidebar';
import RightSideBar from './RightSideBar';

function Dashboard() {
  const [activeItem, setActiveItem] = useState('message');
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="flex">

      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} expanded={expanded} setExpanded={setExpanded} />
      <div className='flex-1 '>
        <RightSideBar />
      </div>
    </div>
  );
}

export default Dashboard;

