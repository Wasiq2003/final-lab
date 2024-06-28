import React from 'react'
import { Button } from './ui/button'
import { FaRegHeart , FaRegTrashAlt } from "react-icons/fa";

export const UserCard = () => {
    return (
        <div className='border rounded-xl bg-slate-50 shadow-sm p-8'>
            <div className='flex'>
                <div className='flex-1'>I am a Student.</div>
                <div className='flex gap-6'>
                    <Button className='rounded-full bg-green-400 border border-black text-black flex gap-1'>
                        <FaRegHeart className='fill-red-500 border-red-500' />
                        <span>Mark as complete</span>
                    </Button>
                    <Button className='bg-transparent hover:bg-transparent'>
                        <FaRegTrashAlt className='fill-red-500 w-8 h-8' />
                    </Button>
                </div>
            </div>
        </div>
    )
}