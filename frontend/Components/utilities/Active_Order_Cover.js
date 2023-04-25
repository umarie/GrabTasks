import React from "react";
import { useState, useEffect } from "react";
import skillimage from "../../public/Images/Freelancer_Dashboard/skillimage.svg";
import clock from "../../public/Images/Freelancer_Dashboard/clock.svg";
import dollar from "../../public/Images/Freelancer_Dashboard/dollar.svg";
import profilepic from "/public/Images/Freelancer_Dashboard/profilepic.svg";
import Image from "next/image";

export default function Active_Order_Cover() {
  const [mobileview, setMobileview] = useState(false);

  useEffect(() => {
    renderMobileView();
  }, []);

  const renderMobileView = () => {
    if (window.innerWidth <= 1024) {
      setMobileview(true);
    } else {
      setMobileview(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", renderMobileView);
  }, []);

  return (
    <>
      <div className="flex justify-evenly items-center lg:justify-evenly">
        <Image
          width={120}
          src={skillimage}
          alt="skill image"
          className="mt-4 ml-3 min-w-[120px]"
        />
        <div className="mt-3">
          <h1 className="pr-2 pl-3 text-sm font-semibold break-word lg:text-md xl:text-[16px] cursor-pointer">
            Redesign a custom made website on Wordpress.
          </h1>
          <p className="pr-5 pl-3 text-[12px] xl:text-sm cursor-pointer">
            We are looking for a web...
          </p>
          <div className="flex mt-3">
            <span className="pr-1 pl-3 text-[12px] xl:text-sm">from: </span>
            <span className="pr-1 text-[12px] font-semibold xl:text-sm">
              Saqib J.
            </span>
            <Image
              width={20}
              src={profilepic}
              alt="client image"
              className=""
            />
          </div>
        </div>
        {!mobileview && (
        <div className="flex flex-col mr-2">
          <div className="flex justify-evenly items-center mt-9">
            <Image width={20} src={clock} alt="clock" className="" />
            <p className=" text-[12px] xl:ml-2">2 day remaining</p>
          </div>
          <div className="flex justify-evenly items-center mt-2">
            <Image width={15} src={dollar} alt="dollar" className="" />
            <p className="text-[12px]">$450</p>
          </div>
        </div>
      )}
      </div>
      {mobileview && (
        <div className="flex justify-evenly items-center mt-5">
          <Image width={20} src={clock} alt="clock" className="ml-7" />
          <p className="mr-7 text-sm">2 day remaining</p>
          <Image width={15} src={dollar} alt="dollar" className="ml-7" />
          <p className="mr-7 text-sm">$450</p>
        </div>
      )}


    </>
  );
}
