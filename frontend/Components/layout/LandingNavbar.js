import React from 'react'
import Image from 'next/image'

import Writing from '../../public/Images/Header/Writing.svg'
import Technology from '../../public/Images/Header/Technology.svg'
import DigitalMarketing from '../../public/Images/Header/DigitalMarketing.svg'
import Graphics from '../../public/Images/Header/Graphics.svg'
import Audio from '../../public/Images/Header/Audio.svg'
import Business from '../../public/Images/Header/Business.svg'
import Lifestyle from '../../public/Images/Header/Lifestyle.svg'
import DropDown from '../../public/Images/Header/Dropdown.svg'

function NavComp({name, src}){
    // console.log(data)
    return(
      <div className='group w-[130px] h-[75px] flex flex-col mt-5 hover:cursor-pointer'>
        <div className=' w-[130px] h-[50px] flex justify-center items-center'>
         <Image
          src={src}
          width={45}
         
          className='group-hover:filter group-hover:invert-[75%] group-hover:sepia-[70%] group-hover:saturate-[351%] group-hover:hue-rotate-[346deg] group-hover:brightness-[89%] group-hover:contrast-[88%]'
          />
        </div>
        <div className=' w-[130px] h-[25px] flex justify-center items-center'>
          <span className='text-white text-[14px] m-0 group-hover:filter group-hover:invert-[75%] group-hover:sepia-[70%] group-hover:saturate-[351%] group-hover:hue-rotate-[346deg] group-hover:brightness-[89%] group-hover:contrast-[88%]'>{name}</span> 
          <Image
            src={DropDown}
            className='ml-2 group-hover:filter group-hover:invert-[75%] group-hover:sepia-[70%] group-hover:saturate-[351%] group-hover:hue-rotate-[346deg] group-hover:brightness-[89%] group-hover:contrast-[88%]'
          />
        </div>

      </div>
    )
}

export default function NavNavbar() {
  const categories = [
      {
        name: "Writing",
        src: Writing,
        subTopics: [], 
      },
      {
        name: "Technology",
        src: Technology,
        subTopics: [], 
      },
      {
        name: "Digital Marketing",
        src: DigitalMarketing,
        subTopics: [], 
      },
      {
        name: "Graphics",
        src: Graphics,
        subTopics: [], 
      },
      {
        name: "Audio",
        src: Audio,
        subTopics: [], 
      },
      {
        name: "Business",
        src: Business,
        subTopics: [], 
      },
      {
        name: "Lifestyle",
        src: Lifestyle,
        subTopics: [], 
      }
    ]
  return (
    <>
    <div className='w-[100%] grid grid-cols-3 lg:w-[90%] lg:h-auto lg:m-5 lg:flex lg:flex-row lg:justify-between'>
        {
          categories.map(
              (data, index) => {
                console.log(data)
                  return (
                    <NavComp key={index} {...data}/>
                  )
              }
          )
        }
    </div>
    </>
  )
}
