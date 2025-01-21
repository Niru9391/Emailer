import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import {GoogleButton} from 'react-google-button'
import { auth, provider } from '../Firebase'
import { useDispatch } from "react-redux"
import { setUser } from '../redux/AppSlice'
export default function Login() {

const dispatch=useDispatch()

    const signWithGoogle=async()=>{
        try{
            const res= await signInWithPopup(auth,provider)
            console.log(res)
            dispatch(setUser({
                displayName:res.user.displayName,
                email:res.user.email,
                photoUrl:res.user.photoURL
            }))

        }
        catch(e){
            console.log(e)
        }
    }
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-gray'>
        <div className='p-8 bg-white flex-col gap-3 rounded-md'>
            <h1 className='text-center text-xl font-medium mb-5'>
                LogIn
                <GoogleButton onClick={signWithGoogle}/>

            </h1>

        </div>
      
    </div>
  )
}
