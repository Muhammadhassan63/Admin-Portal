import React from 'react';
import {AiOutlineHeatMap } from 'react-icons/ai';
import {  FiEdit} from 'react-icons/fi';
import { BsKanban} from 'react-icons/bs';
import { BiColorFill } from 'react-icons/bi';
import { IoMdContacts } from 'react-icons/io';

import { GrUserPolice} from 'react-icons/gr';
import { MdOutlineLocalPolice } from 'react-icons/md';
import { BsPeopleFill } from 'react-icons/bs';





export const links = [
  {
    title: 'User Management',
    links: [
      {
        name: 'officer',
        icon: <GrUserPolice />,
      },
      {
        name: 'dispatcher',
        icon: <IoMdContacts />,
      },
      {
        name: 'police station',
        icon: <MdOutlineLocalPolice />,
      },
    ],
  },
  {
    title: 'Statistics',
    links: [
      {
        name: 'heatmap',
        icon: <AiOutlineHeatMap />,
      },
      {
        name: 'graph',
        icon: <BsKanban />,
      },
    ],
  },
  {
    title: "Other Options",
    links: [
  
      {
        name: 'feedback',
        icon: <FiEdit />,
      },

      {
        name: 'reports',
        icon: <FiEdit />,
      },

      {
        name: 'wanted-criminals',
        icon: <BsPeopleFill />,
      },

      {
        name: 'color-picker',
        icon: <BiColorFill />,
      },
    ],
  },
  
];



export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];

 