import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

function App() {
  const [activeItem, setActiveItem] = useState('message');
  return (
   <div className="flex">
   
   <Sidebar activeItem={activeItem} setActiveItem={setActiveItem} />
   <main className="ml-64">
    <Dashboard activeItem={activeItem} setActiveItem={setActiveItem} />
   </main>
   </div>
  );
}

export default App;

