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



const Sidebar = ({ activeItem, setActiveItem }) => {

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
    <div className="fixed left-0 top-0 h-full w-16 bg-white border-r border-gray-300 flex flex-col items-center justify-between p-2 z-40">


      <div className="flex flex-col gap-2 relative">
        <div className="absolute top-1 -right-9 rounded-md bg-white  p-1">
          <ExpnadIcon isActive={true} />
        </div>
        <div className="  flex items-center justify-center mb-2 ">
          <img src={IMAGES.logo} alt="logo" className="w-10 h-10" />
        </div>

        <div className="flex flex-col items-center justify-center gap-1 ">
          {navItems.map((item, index) => {
            const IconComponent = item.icon;

            return (
              <button
                onClick={() => setActiveItem(item.key)}
                key={index}
                className={`p-2 rounded-lg transition-colors ${item.key === activeItem
                  ? 'bg-primary-selected text-primary'
                  : 'hover:bg-primary-selected'
                  }`}
                aria-label={`Navigation item ${index + 1}`}
              >
                <IconComponent isActive={item.key === activeItem} />
              </button>
            );
          })}
        </div>

      </div>
      <div className='rounded-full p-2 border border-gray-300 shadow-xs'>
        <ProfileIcon isActive={true} />
      </div>
    </div>
  );
};

export default Sidebar;

