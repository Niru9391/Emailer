import React, { useState } from 'react';
import { LuPencil } from "react-icons/lu";
import { MdInbox } from "react-icons/md";
import { MdOutlineStarRate } from "react-icons/md";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { AiOutlineSend } from "react-icons/ai";
import { MdOutlineDrafts } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

import { useDispatch } from 'react-redux';
import { setOpen } from '../redux/AppSlice';

const sideitem = [
  {
    icon: <MdInbox size={'24px'} />, 
    text: "Inbox",
  },
  {
    icon: <MdOutlineStarRate size={'24px'} />,
    text: "Starred",
  },
  {
    icon: <RiNotificationSnoozeLine size={'24px'} />,
    text: "Snoozed",
  },
  {
    icon: <AiOutlineSend size={'24px'} />,
    text: "Sent",
  },
  {
    icon: <MdOutlineDrafts size={'24px'} />,
    text: "Draft",
  },
  {
    icon: <MdKeyboardArrowDown size={'24px'} />,
    text: "More",
  }
];

export default function Sidebar() {
 const  dispatch =useDispatch()
  return (
    <div className="w-[15%]">
      <div className="p-3">
        <button onClick={()=>dispatch(setOpen(1))} className="flex items-center gap-2 p-4 rounded-2xl hover:shadow-md bg-[#C2E7FF]">
          <LuPencil size={'24px'} /> 
          Compose
        </button>
      </div>
      <div className="text-gray-500">
        {sideitem.map((item, index) => (
          <div
            className="flex items-center gap-9 pl-7 py-1 rounded-r-full hover:cursor-pointer hover:bg-gray-200 my-2"
            key={index} 
          >
            {item.icon}
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
