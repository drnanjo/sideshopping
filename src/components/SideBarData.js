import React from 'react';
import * as GiIcons from 'react-icons/gi';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Main Sail',
    path: '/',
    icon: <GiIcons.GiSailboat />,
    cName: 'nav-text'
  },
  {
    title: 'Life Line',
    path: '/reports',
    icon: <GiIcons.GiShoonerSailboat  />,
    cName: 'nav-text'
  },
  {
    title: 'Sail Bag',
    path: '/products',
    icon: <RiIcons.RiSailboatFill />,
    cName: 'nav-text'
  },
];