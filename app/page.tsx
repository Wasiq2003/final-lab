import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { IoIosAdd } from "react-icons/io";
import React from 'react'
import HomePage from './(main)/home/page';

export const Home = () => {
  return (
    <main className=' flex flex-col h-screen w-screen '>
      <div className=' grid grid-cols-3 p-10'>
        <div className=' flex flex-col w-[500px] border border-black justify-center items-center bg-purple-400'>
          <div>Total Tasks</div>
          <div>04</div>
        </div>
        <div className=' flex flex-col w-[500px]  border border-black justify-center items-center bg-green-200'>
          <div>Completed Tasks</div>
          <div>02</div>
        </div>
        <div className=' flex flex-col w-[500px]  border border-black justify-center items-center bg-orange-300'>
          <div>Panding Tasks</div>
          <div>02</div>
        </div>
      </div>
      <div className=' flex '>
        <Input>
        </Input>
        <Button size={'lg'} className=' border '>Add Tasks<span><IoIosAdd /></span></Button>
      </div>
      <HomePage />
    </main>
  )
}

export default Home