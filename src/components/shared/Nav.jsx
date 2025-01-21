import React, { useEffect, useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { MdContactSupport } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { PiDotsNineBold } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { setSearchText } from '../../redux/AppSlice'
import Avatar from 'react-avatar';
export default function Nav() {
    const [input, setinput] = useState("")
    const { user } = useSelector((store) => store.appSlice); 
    console.log(user)
    const dispatch = useDispatch()
    useEffect(() => {
        if (input.trim() !== "") {
            dispatch(setSearchText(input))

        }


    }, [input])
    return (
        <div className='flex items-center justify-between mx-3 h-16'>
            <div className='flex items-center gap-10'>
                <div className='flex items-center gap-2'>
                    <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                        <RxHamburgerMenu size={"20px"} />
                    </div>
                    <img className='w-8' src="https://tse1.mm.bing.net/th?id=OIP.TW21b-CFGudjWw39HNhqcgHaEK&pid=Api&P=0&h=220" alt="gmail-logo" />
                    <h1 className='text-2xl font-medium text-gray-500'>Gmail</h1>
                </div>
            </div>
            <div className=' md:block hidden w-[50%] mr-60'>
                <div className='flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full '>
                    <IoIosSearch size={"24px"} className='text-gray-700' />
                    <input
                        onChange={(e) => setinput(e.target.value)}
                        type="text"
                        placeholder='Search mail'
                        className='rounded-full w-full bg-transparent outline-none px-1'
                    />
                </div>
            </div>
            <div className='md:block hidden'>

                <div className='flex items-center gap-2'>
                    <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                        <MdContactSupport size={"20px"} />

                    </div>
                    <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                        <IoSettingsOutline size={"20px"} />

                    </div>
                    <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                        <PiDotsNineBold size={"20px"} />

                    </div>
                    <div className='cursor-pointer'>
                        <Avatar src={user?.photoUrl} size={"40px"} round={true} />

                    </div>

                </div>

            </div>


        </div>
    )
}

