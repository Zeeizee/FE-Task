import React from 'react';
import { COLORS } from '../utils/Colors';

const ChatIcon = ({ isActive = false }) => {


    return (
        <>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_422_215)">
<path d="M12 5.99999H13.3333C13.687 5.99999 14.0261 6.14047 14.2761 6.39052C14.5262 6.64057 14.6667 6.97971 14.6667 7.33333V14.6667L12 12H8C7.64638 12 7.30724 11.8595 7.05719 11.6095C6.80714 11.3594 6.66667 11.0203 6.66667 10.6667V9.99999M9.33333 5.99999C9.33333 6.35362 9.19286 6.69275 8.94281 6.9428C8.69276 7.19285 8.35362 7.33333 8 7.33333H4L1.33333 9.99999V2.66666C1.33333 1.93333 1.93333 1.33333 2.66667 1.33333H8C8.35362 1.33333 8.69276 1.4738 8.94281 1.72385C9.19286 1.9739 9.33333 2.31304 9.33333 2.66666V5.99999Z" 
stroke={isActive ? COLORS.primary : COLORS.secondary} stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_422_215">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>
      
            </>

    );
};

export default ChatIcon;

