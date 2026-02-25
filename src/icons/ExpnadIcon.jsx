import React from 'react';
import { COLORS } from '../utils/Colors';

const ExpnadIcon = ({ expanded = false }) => {


    return (
        <>
            <svg width="18" height="18" style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease-in-out' }} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 11.3333L7.33333 8L4 4.66667M8.66667 11.3333L12 8L8.66667 4.66667" stroke={expanded ? COLORS.primary : COLORS.secondary} stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </>

    );
};

export default ExpnadIcon;

