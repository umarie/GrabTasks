import { css, Dropdown } from '@nextui-org/react'
import React from 'react'
import { useState, useEffect } from 'react';
import Image from 'next/image'
// import close from "../../public/Images/x-mark.png";
import arrowdown from '../../public/Images/down.png'

// import { Menu } from '@headlessui/react'

function MyDropdown() {
    const [dropdown, setdropdown] = useState(false);
    function handlec(){
        setdropdown(!dropdown)
    }
  return (
    <div className='relative flex flex-col items-center w-[40px] h-[20px]'>
        <button onClick={handlec} className='flex flex-row'>
            Dropdown
            <Image 
                src={arrowdown} 
                alt="Arrow Down"
                width="15%"
                className="ml-10 mt-3"
                loading="lazy"
            />
        </button>
        {dropdown &&(
            <div className='absolute flex flex-col mt-5'>
                <span>beginner</span>
                <span>intermediate</span>
                <span>expert</span>
            </div>
        )}
    </div>
  )
}

function Searchbarcomp() {

  
    return (
        <>        
        <MyDropdown/>
        </>
    );
}

export default function landingpgcomp() {
    const [mobileview, setMobileview] = useState(false);

    useEffect(() => {
        renderMobileView();
    }, []);

    const handleClick = () => {
        window.scrollTo(0, 0);
        setMobileMenu(!mobileMenu);
    };

    const renderMobileView = () => {
        if (window.innerWidth <= 720) {
        setMobileview(true);
        } else {
        setMobileview(false);
        }
    };
    useEffect(() =>{
        window.addEventListener("resize", renderMobileView);
    }, [])

  return (
    <>
    {!mobileview && (
        <>
            <div className='flex flex-col justify-center items-center bg-main-cl max-w'>
                <div className= 'bg-white mt-4 w-5/6 h-16'>

                </div>
                <div className='mt-8 w-5/6'>
                    <div className='flex flex-col content-start'>
                        <span className='text-white font-myfont not-italic font-bold text-5xl'>Thousands of services,</span>
                        <span className='text-white font-myfont not-italic font-bold text-5xl'>One search away.</span>
                    </div>
                </div>
                <div className='mt-10 w-5/6'>                   
                    <Searchbarcomp/>
                </div>
            </div>
        </>
    )}    
    {mobileview && (
        <>
            <h1>Mobile View</h1>
        </>
    )}    
    </>
  )
}
