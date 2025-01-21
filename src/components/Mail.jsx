import React from 'react'
import { IoMdArrowBack, IoMdMore } from 'react-icons/io'
import { PiLineVerticalThin } from "react-icons/pi";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { BiArchiveIn } from "react-icons/bi";
import { MdDeleteOutline, MdOutlineAddTask, MdOutlineDriveFileMove, MdOutlineMarkEmailUnread, MdOutlineReport, MdOutlineWatchLater } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { deleteDoc,doc } from 'firebase/firestore';
import { db } from '../Firebase';
import {motion } from 'framer-motion'
export default function Mail() {
  const params=useParams()
  const Delete_mail= async(id)=>{
    try{
      await deleteDoc(doc(db,"emails",id));
      navigate("/");
    }
    catch(e)
    {
      console.log(e)
    }

  }
  const navigate = useNavigate();
  const { selectedEmail } = useSelector((store) => store.appSlice);
 // console.log(selectedEmail);
  return (
    <motion.div 
    initial={{ opacity: 0, x:-20}}
    animate={{ opacity: 1, y:0 }}
    transition={{ duration: 1 }}
    className='flex-1 bg-rounded-xl mx-5' >
      <div className='flex items-center justify-bewteen px-4'>
        <div className='flex items-center gap-2 text-gray-700 py-2'>

          <div onClick={() => navigate("/")} className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
            <IoMdArrowBack size="20px" />
          </div>
          <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
            <BiArchiveIn size="20px" />

          </div>
          <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
            <MdOutlineReport size="20px" />

          </div>
          <div  onClick ={()=>Delete_mail(params.id)}     className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
            <MdDeleteOutline size="20px"  />

          </div>
          <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
            <MdOutlineMarkEmailUnread size="20px" />

          </div>
          <div >
            <PiLineVerticalThin size="20px" />

          </div>
          <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
            <MdOutlineWatchLater size="20px" />

          </div>
          <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
            <MdOutlineAddTask size="20px" />

          </div>
          <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
            <MdOutlineDriveFileMove size="20px" />

          </div>
          <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
            <IoMdMore size="20px" />

          </div>



        </div>
        <div className='flex items-center gap-2 ml-auto'>
          <p className='text-sm text-gray-500'> 1 of 1500  </p>

          <button>
            <MdKeyboardArrowLeft className='hover:rounded-full  hover:bg-gray-300' size="24px" />
          </button>
          <button>
            <MdKeyboardArrowRight className='hover:rounded-full  hover:bg-gray-300' size="24px" />

          </button>



        </div>





      </div>
      <div className='h-[90vh] overflow-y-auto p-4'>
        <div className='flex items-center justify-between bg-white gap-1'>
          <div className='flex items-center gap-2'>
            <h1 className='text-xl font-medium'>{selectedEmail?.subject}</h1>
            <span className='text-sm bg-gray-200 rounded-md px-2'>inbox</span>

          </div>
          <div className='flex-none text-gray-400 my-5 textsm'>
            <p>
             {selectedEmail?.createdAt?.toDate().toLocaleString()}
            </p>

          </div>

        </div>
        <div className='text-gray-500 text-sm'>
          <h1>
         { selectedEmail?.to}

          </h1>
          <span>to me</span>

        </div>
        <div className='my-10 '>
          {selectedEmail?.massage}
        </div>

      </div>


    </motion.div>
  )
}
