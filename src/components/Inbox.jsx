import React, { useState } from 'react'
import { MdCropSquare, MdInbox, MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { FaCaretDown } from "react-icons/fa";
import { IoMdRefresh } from "react-icons/io";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { GoTag } from "react-icons/go";
import { FaUserFriends } from "react-icons/fa";
import Massages from './Massages';


const mailtype = [
  {
    icon: <MdInbox size={'20px'} />,
    text: "Primary"


  },
  {
    icon: <GoTag size={'20px'} />,
    text: "Promotions"
  },
  {
    icon: <FaUserFriends size={'20px'} />,
    text: "Social"


  }
]

export default function Inbox() {
  const [mailtypeselected, setmailtypeselected] = useState(0)
  return (
    <div className='flex-1 bg-white rouded-xl mx-5'>
      <div className='flex items-center justify-between px-4'>
        <div className='flex items-center gap-2 text-gray-700 py-2'>
          <div className='flex items-center gap-1  '>
            <MdCropSquare  size={'20px'}  className="  hover:bg-gray-100 hover:cursor-pointer"/>
            <FaCaretDown size={'20px'} className="hover:bg-gray-100 hover:cursor-pointer" />
            
          </div>
          <div className='p-2 rounded-full hover:bg-gray-100 hover:cursor-pointer'>
            <IoMdRefresh size={'20px'} />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-100 hover:cursor-pointer'>
            <PiDotsThreeVerticalBold size={'20px'} />
          </div>

        </div>
        <div className='flex items-center gap-2'>
          <p className='text-sm text-gray-500'> 1-50 of 1500  </p>
            
            <button>
              <MdKeyboardArrowLeft  className='hover:rounded-full  hover:bg-gray-300' size="24px"/>
            </button>
            <button>
              <MdKeyboardArrowRight  className='hover:rounded-full  hover:bg-gray-300'  size="24px"/>
            
            </button>

         

        </div>


      </div>
      <div className='h-[90vh] overflow-y-auto'>
        <div className='flex items-center gap-1'>
          {
            mailtype.map((item, index) => {
              return (
                <button className={`${mailtypeselected === index ? 'border-b-4 border-b-blue-600 text-blue-600' : ''}flex items-center gap-5 p-1 w-52 hover:bg-gray-100 
                  }`
                } key={index}
                  onClick={() => setmailtypeselected(index)}
                >

                  {item.icon}
                  <span> {item.text}</span>

                </button>
              )
            })
          }

        </div>

        <Massages />
      </div>

    </div>
  )
}
