import React, { useState } from 'react';
import HomeIcon from '../icons/HomeIcon';
import { IMAGES } from './assets';
import BarChartIcon from '../icons/BarChartIcon';
import ChatIcon from '../icons/ChatIcon';
import UsersIcon from '../icons/UsersIcon';
import ProfileIcon from '../icons/ProfileIcon';
import SettingsIcon from '../icons/SettingsIcon';
import HelpIcon from '../icons/HelpIcon';
import MenuIcon from '../icons/MenuIcon';
import MessageIcon from '../icons/MessageIcon';
import ContactIcon from '../icons/ContactIcon';
import ExpnadIcon from '../icons/ExpnadIcon';



const Sidebar = ({ activeItem, setActiveItem,expanded, setExpanded }) => {    

  const navItems = [
    { key: 'home', icon: HomeIcon, title: 'Home' },
    { key: 'menu', icon: MenuIcon, title: 'Menu' },
    { key: 'bar-chart', icon: BarChartIcon, title: 'Bar Chart' },
    { key: 'message', icon: MessageIcon, title: 'Message' },
    { key: 'chat', icon: ChatIcon, title: 'Chat' },
    { key: 'users', icon: UsersIcon, title: 'Users' },
    { key: 'contact', icon: ContactIcon, title: 'Contact' },
    { key: 'settings', icon: SettingsIcon, title: 'Settings' },
    { key: 'help', icon: HelpIcon, title: 'Help' },


  ];

  return (
    <div className={`max-h-[100vh] min-w-16 max-w-64 bg-white border-r border-gray-300 flex flex-col items-center justify-between p-2 z-40 transition-all duration-300 ${expanded ? 'w-48' : 'w-16'}`}>


      <div className="flex flex-col gap-2 relative w-full ">
        <div className="absolute  -right-8 rounded-md bg-white h-12  flex items-center justify-center p-1 cursor-pointer" onClick={() => setExpanded(!expanded)}>
            <div className='cursor-pointer'><ExpnadIcon expanded={expanded} /></div>
        </div>
        <div className="  flex items-center justify-center mb-2  h-12 ">
          <img src={IMAGES.logo} alt="logo" className="w-10 h-10" />
        </div>

        <div className={`flex w-full flex-col ${expanded ? 'items-center md:items-start' : 'items-center'} justify-center gap-1 `}>
          {navItems.map((item, index) => {
            const IconComponent = item.icon;

            return (
              <button
                onClick={() => setActiveItem(item.key)}
                key={index}
                className={`p-2 flex gap-2 ${expanded &&'md:w-full'} rounded-lg transition-colors ${item.key === activeItem
                  ? 'bg-primary-selected text-primary'
                  : 'hover:bg-primary-selected'
                  }`}
                aria-label={`Navigation item ${index + 1}`}
              >
                <IconComponent isActive={item.key === activeItem} />
                {expanded && <span className="hidden md:block text-sm font-medium">{item.title}</span>}
              </button>
            );
          })}
        </div>

      </div>
      <div className={`w-full flex ${expanded ? 'justify-center md:justify-start' : 'justify-center'} items-center gap-2 `}>
        <div className='rounded-full p-2 border border-gray-300 shadow-xs'>
          <ProfileIcon isActive={true} />
        </div>
        {expanded && <div className='hidden md:block text-sm font-medium'>John Doe</div>}
      </div>
    </div>
  );
}

export default Sidebar;
