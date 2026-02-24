import React from 'react';
import { COLORS } from '../utils/Colors';

const HelpIcon = ({ isActive = false }) => {


    return (
        <>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_422_235)">
<path d="M6.0599 6.00006C6.21663 5.55451 6.526 5.1788 6.9332 4.93949C7.3404 4.70017 7.81916 4.61269 8.28468 4.69254C8.7502 4.77239 9.17244 5.01441 9.47661 5.37575C9.78079 5.73709 9.94727 6.19441 9.94656 6.66673C9.94656 8.00006 7.94656 8.66673 7.94656 8.66673M8 11.3333H8.00667M14.6667 8.00001C14.6667 11.6819 11.6819 14.6667 8 14.6667C4.3181 14.6667 1.33333 11.6819 1.33333 8.00001C1.33333 4.31811 4.3181 1.33334 8 1.33334C11.6819 1.33334 14.6667 4.31811 14.6667 8.00001Z" 
stroke={isActive ? COLORS.primary : COLORS.secondary} stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_422_235">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>
    
            </>

    );
};

export default HelpIcon;

