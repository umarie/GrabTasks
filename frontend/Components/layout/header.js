import React from 'react'
import { useState, useEffect } from 'react';
import logoFull from "../../public/Images/GrabTasksLogoFull.png";
import userFrame from "../../public/Images/userFrame.png";
import close from "../../public/Images/x-mark.png";
import Image from 'next/image'

export default function header() {
  const [mobileview, setMobileview] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

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
      <header>
        <nav className="flex justify-between">
          <Image
            src={logoFull} 
            alt="GrabTasks Logo"
            width="40%"
            className="ml-10 mt-3 max-w-[240px]"
            loading="lazy"
          />
          <div className="mr-10 flex">
            <button className="mr-3 mt-[30px] w-[160px] h-[40px] font-quicksand border-2 border-[#F0C3C3] rounded-lg">
              Post a Project
            </button>
            <button className="mt-[30px] w-[160px] h-[40px] font-quicksand border-2 border-[#F0C3C3] rounded-lg">
              Become a Seller
            </button>
          </div>
        </nav>
      </header>
    )}

    {mobileview && (
      <header>
        <nav className="flex ">
          {/* <Image/> */}
          <Image
            src={logoFull} 
            alt="GrabTasks Logo"
            width="40%"
            className="ml-[15%] mt-3 max-w-[240px]"
            loading="lazy"
          />

        {mobileMenu? 
          <Image
            src={close}
            alt="user frame"
            width="40%"
            className="mt-8 ml-[13%] w-[5%] h-[5%] max-w-[45px]"
            loading="lazy"
            onClick={handleClick}
          />: 
          <Image
            src={userFrame}
            alt="user frame"
            className="mt-8 ml-[10%] w-[10%] h-[10%] max-w-[45px]"
            loading="lazy"
            onClick={handleClick}
          /> }

        {/* mobile menu open close code */}
          {mobileMenu && (
            <div className="bg-white h-[300px] w-[100%] absolute top-[80px] animate-sidebar">
              <div className="flex flex-col items-center">
                <Image
                  src={userFrame}
                  alt="user frame"
                  className="mt-6 w-[100px] h-[100px] max-w-[130px]"
                  loading="lazy"
                />
                <button className="mt-[30px] w-[160px] h-[40px] font-quicksand border-2 border-[#F0C3C3] rounded-lg">
                  Post a Project
                </button>
                <button className="mt-[30px] w-[160px] h-[40px] font-quicksand border-2 border-[#F0C3C3] rounded-lg">
                  Become a Seller
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>
    )}
    </>
  )
}
