import React from 'react'
import star from "/public/Images/Freelancer_Dashboard/star.svg";
import Image from "next/image";

export default function Rank_Badge() {
  return (
    <>
    <div>
                
                <div className="bg-[#122620] w-[145px] h-[28px] flex justify-center items-center rounded-md font-montserrat text-sm  text-white">
                  <h3>4.8</h3>
                  <Image width={10} src={star} alt="star" className="ml-1" />
                  <h3 className="ml-2">veteran</h3>
                </div>
              </div>
    </>
  )
}
