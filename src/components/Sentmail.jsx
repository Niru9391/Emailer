import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../redux/AppSlice";
import { collection, addDoc } from "firebase/firestore";
import { serverTimestamp } from 'firebase/firestore'
import { db } from "../Firebase";
export default function Sentmail() {
    const [formdata, setData] = useState({
        to: "",
        subject: "",
        massage: ""
    })
    const changeHandler = (e) => {
        setData({ ...formdata, [e.target.name]: e.target.value })
    }
    const submitHandle = async (e) => {
        e.preventDefault();
        // console.log(formdata)
        await addDoc(collection(db, "emails",), {
            to: formdata.to,
            subject: formdata.subject,
            massage: formdata.massage,
            createdAt: serverTimestamp(),
        })

        dispatch(setOpen(0))
        setData({
            to: "",
            subject: "",
            massage: ""

        })


    }
    const HandleSubmit =((e)=>{
        if (e.key === "Enter") { 
            e.preventDefault(); 
            submitHandle(e);
        }
        
    })
    const dispatch = useDispatch()
    const open = useSelector(store => store.appSlice.open)
    return (
        <div className={`${open ? "block" : "hidden"} bg-white mx-auto shadow-xl shadow-slate-600 rounded-t-md`}>
            <div className="flex px-3 py-2 bg-blue-600 justify-between rounded-t-md">
                <h1 className="text-white font-medium">New Message</h1>
                <div onClick={() => dispatch(setOpen(0))} className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
                    <RxCross2 size={"20px"} />
                </div>
            </div>
            <form onSubmit={submitHandle} action="" className="flex flex-col p-3 gap-2">
                <input value={formdata.to}
                    onChange={changeHandler}
                    type="text"
                    placeholder="To"
                    name="to"
                    className="outline-none border border-gray-300 rounded-md py-1 px-2"
                    aria-label="Recipients"
                    onKeyDown={HandleSubmit}
                />
                <input
                    onChange={changeHandler}
                    value={formdata.subject}
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    className="outline-none border border-gray-300 rounded-md py-1 px-2"
                    aria-label="Subject"
                />
                <textarea
                    onChange={changeHandler}
                    value={formdata.massage}

                    type="text"
                    name="massage"
                    placeholder="Write your massage here..."
                    cols="30"
                    rows="5"
                    className="outline-none border border-gray-300 rounded-md py-1 px-2"
                    aria-label="massage"
                    onKeyDown={HandleSubmit}
                ></textarea>
                <button
                    onClick={() => dispatch(setOpen(0))}
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 rounded-full w-fit px-4 py-2 text-white font-medium">
                    Send
                </button>
            </form>
        </div>
    );
}
