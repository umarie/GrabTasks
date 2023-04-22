import React from 'react'
import profilepic from "/public/Images/Freelancer_Dashboard/profilepic.svg";
import Image from "next/image";


export default function Message_Cover() {
  return (
    <>
    <div className='flex justify-center items-center'>
        <Image
                  width={50}
                  src={profilepic}
                  alt="person image"
                  className="mt-4 ml-3"
                />
                <div className='flex flex-col font-montserrat mt-3'>
                <h1 className='font-bold ml-5'>John Doe</h1>
                <h2 className='text-[12px] pl-5 pr-2'>yea! i have read those text and delievered the file for you...</h2>
                </div>

                <div className='bg-[#D6AD60] w-10 h-6 text-center text-[12px] mr-4 rounded-full'>
                  <p className='mt-[2px]'>2</p>  {/* 2    //unread */}
                </div>

    </div>
    <div className="w-[90%] h-[1px] ml-[5%] mt-2 bg-black opacity-25"/>

    </>

  )
}
