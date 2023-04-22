import React from "react";
import { useState, useEffect } from "react";
import Header from "@/Components/layout/header";
import editprofile from "/public/Images/Freelancer_Dashboard/editprofile.svg";
import profilepic from "/public/Images/Freelancer_Dashboard/profilepic.svg";
import star from "/public/Images/Freelancer_Dashboard/star.svg";
import skillimage from "../../public/Images/Freelancer_Dashboard/skillimage.svg";
import clock from "../../public/Images/Freelancer_Dashboard/clock.svg";
import dollar from "../../public/Images/Freelancer_Dashboard/dollar.svg";
import details from "../../public/Images/Freelancer_Dashboard/details.svg";
import withdraw from "../../public/Images/Freelancer_Dashboard/withdraw.svg";
import add from "../../public/Images/Freelancer_Dashboard/add.svg";

import Image from "next/image";
import Message_Cover from "@/Components/utilities/Message_Cover";
import Skill_Cover from "@/Components/utilities/Skill_Cover";

export default function Dashboard() {
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
      <Header />



      <>
        <div className="flex flex-col justify-center items-center mt-2 md:flex-row md:items-start lg:justify-start lg:ml-[2%] 2xl:justify-center">
          {/* Profile Section */}
          <div className="bg-[#EBD6AF] w-[95%] h-[150px] rounded-lg max-w-[450px] md:max-w-[280px] md:h-[280px]  lg:w-[55%] lg:h-[350px] lg:max-w-[400px]">
            <div className="flex justify-evenly items-center">
              <Image
                width={60}
                src={profilepic}
                alt="Profile Picture"
                className="ml-[5%] mt-5"
              />
              <div>
                <h1 className="font-montserrat font-bold text-xl mt-3">
                  Umair Farooq
                </h1>
                <div className="bg-[#122620] flex justify-center items-center rounded-md font-montserrat text-sm  text-white">
                  <h3>4.8</h3>
                  <Image width={10} src={star} alt="star" className="ml-1" />
                  <h3 className="ml-2">Veteran</h3>
                </div>
              </div>
              <Image
                width={25}
                src={editprofile}
                alt="edit profile"
                className="ml-[5%] mb-4"
              />
            </div>
            <p className="font-montserrat text-[12px] ml-[6%] pl-5 pr-5 mt-3 lg:text-[14px] lg:ml-[4%]">
              HI! I’m a professional web developer. I do web development in Mern
              stack and...
            </p>
          </div>






          {/* Orders section */}
          <div
            className="bg-[#EEEEEE] w-[95%] h-[280px] font-montserrat rounded-lg mt-3 max-w-[450px] md:mt-0 md:ml-2
          lg:h-[350px] lg:max-w-[730px]"
          >
            <h1 className="font-bold text-xl ml-5 mt-5 xl:text-2xl">Active Orders</h1>
            <div className="w-[90%] h-[1px] ml-[5%] bg-black opacity-50" />
            <div className="flex justify-evenly items-center lg:justify-evenly">
              <Image
                width={120}
                src={skillimage}
                alt="skill image"
                className="mt-4 ml-3 min-w-[120px]"
              />
              <div className="mt-3">
                <h1 className="pr-2 pl-3 text-sm font-semibold break-word lg:text-md xl:text-[18px]">
                  Redesign a custom made website on Wordpress.
                </h1>
                <p className="pr-5 pl-3 text-[12px] xl:text-sm">
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
           {mobileview && (<div className="flex justify-evenly items-center mt-5">
              <Image width={20} src={clock} alt="clock" className="ml-7" />
              <p className="mr-7 text-sm">2 day remaining</p>
              <Image width={15} src={dollar} alt="dollar" className="ml-7" />
              <p className="mr-7 text-sm">$450</p>
            </div>)}
            <div className="flex justify-end items-center mr-5 mt-5">
              <button className="bg-[#122620] w-[130px] h-9  text-white text-[12px] font-montserrat rounded-2xl">
                Show All Orders
              </button>
            </div>
          </div>







          {/* Payment Section */}
          {!mobileview && (
            <div
              className="bg-[#122620] w-[95%] h-[320px] font-montserrat rounded-lg  max-w-[450px] md:ml-4 
            md:max-w-[350px] lg:w-[50%] lg:h-[380px] lg:max-w-[340px] lg:mr-2"
            >
              <h1 className="font-bold text-white text-xl ml-5 mt-5 xl:text-2xl">
                Earnings
              </h1>
              <hr className="w-[90%] h-[1px] ml-[5%] bg-white opacity-50" />
              <div className="flex justify-between items-center">
                <p className="text-white text-md ml-5 mt-5">This month</p>
                <p className="font-bold text-white text-md mr-10 mt-5">$500</p>
              </div>
              <hr className="w-[90%] h-[1px] ml-[5%] mt-2 bg-white opacity-50" />
              <div className="flex justify-between items-center">
                <p className=" text-white text-md ml-5 mt-5">Pending</p>
                <p className="font-bold text-white text-md mr-10 mt-5">$150</p>
              </div>
              <hr className="w-[90%] h-[1px] ml-[5%] mt-2 bg-white opacity-50" />
              <div className="flex justify-center items-center mt-20">
                <button className="bg-[#D6AD60]  w-[90%] h-14  text-white text-[12px] font-montserrat rounded-2xl">
                  <div className="flex justify-between items-center">
                    <h1 className="font-bold text-white text-[16px] ml-8">
                      Withdraw
                    </h1>
                    <Image
                      width={30}
                      src={withdraw}
                      alt="withdraw"
                      className="mr-5"
                    />
                  </div>
                </button>
              </div>
              <div className="flex justify-center items-center mt-3">
                <button className="bg-[#122620]  w-[90%] h-14  text-white text-[12px] border-2 border-[#D6AD60] font-montserrat rounded-2xl">
                  <div className="flex justify-between items-center">
                    <h1 className="font-bold text-white text-[16px] ml-8">
                      Payment Details
                    </h1>
                    <Image
                      width={25}
                      src={details}
                      alt="details"
                      className="mr-5"
                    />
                  </div>
                </button>
              </div>
            </div>
          )}
        </div>






        <div className="flex flex-col justify-center items-center mt-2 md:flex-row md:mt-0 lg:justify-start lg:ml-[2%] 2xl:ml-[12%] 2xl:justify-start">
          {/* Inbox Section */}
          <div className="bg-[#EEEEEE] w-[95%] h-[280px] font-montserrat rounded-lg mt-3 max-w-[450px] md:mt-0 
           md:w-[370px] lg:min-w-[330px] lg:w-[30%] lg:h-[350px] ">
            <h1 className="font-bold text-xl ml-5 mt-5 xl:text-2xl">Inbox</h1>
            <div className="w-[90%] h-[1px] ml-[5%] bg-black opacity-25" />
            <Message_Cover />
            <Message_Cover />
            <div className="flex justify-end items-center mr-5 mt-5">
              <button className="bg-[#122620] w-[130px] h-9  text-white text-[12px] font-montserrat rounded-2xl">
                All Messages
              </button>
            </div>
          </div>






          {/* Payment Section */}
          {mobileview && (
            <div className="bg-[#122620] w-[95%] h-[320px] font-montserrat rounded-lg mt-5 max-w-[450px] md:ml-4 md:max-w-[350px]">
              <h1 className="font-bold text-white text-xl ml-5 mt-5">
                Earnings
              </h1>
              <hr className="w-[90%] h-[1px] ml-[5%] bg-white opacity-50" />
              <div className="flex justify-between items-center">
                <p className="text-white text-md ml-5 mt-5">This month</p>
                <p className="font-bold text-white text-md mr-10 mt-5">$500</p>
              </div>
              <hr className="w-[90%] h-[1px] ml-[5%] mt-2 bg-white opacity-50" />
              <div className="flex justify-between items-center">
                <p className=" text-white text-md ml-5 mt-5">Pending</p>
                <p className="font-bold text-white text-md mr-10 mt-5">$150</p>
              </div>
              <hr className="w-[90%] h-[1px] ml-[5%] mt-2 bg-white opacity-50" />
              <div className="flex justify-center items-center mt-5">
                <button className="bg-[#D6AD60]  w-[90%] h-14  text-white text-[12px] font-montserrat rounded-2xl">
                  <div className="flex justify-between items-center">
                    <h1 className="font-bold text-white text-xl ml-8">
                      Withdraw
                    </h1>
                    <Image
                      width={35}
                      src={withdraw}
                      alt="withdraw"
                      className="mr-5"
                    />
                  </div>
                </button>
              </div>
              <div className="flex justify-center items-center mt-3">
                <button className="bg-[#122620]  w-[90%] h-14  text-white text-[12px] border-2 border-[#D6AD60] font-montserrat rounded-2xl">
                  <div className="flex justify-between items-center">
                    <h1 className="font-bold text-white text-xl ml-8">
                      Payment Details
                    </h1>
                    <Image
                      width={35}
                      src={details}
                      alt="details"
                      className="mr-5"
                    />
                  </div>
                </button>
              </div>
            </div>
          )}





          
          {!mobileview && (
          <div className="flex flex-col justify-center items-center">
            {/* Skills Section */}
            <div className="bg-white w-[95%] h-[320px] font-montserrat rounded-lg mt-5 max-w-[450px] md:mt-0 md:max-w-[750px] lg:max-w-[850px]">
              <h1 className="font-bold text-black text-xl ml-5 mt-5 lg:mt-0 xl:text-2xl">
                My Skills
              </h1>
              <div className="flex justify-between items-center mt-3 max-w-[440px] lg:max-w-[1250px]">
                <button className="bg-[#122620]  w-[40%] h-10 ml-[4%]  text-white text-[12px] font-montserrat rounded-2xl md:max-w-[200px]">
                  <div className="flex justify-evenly items-center ">
                    <Image width={15} src={add} alt="add" className="" />
                    <h1 className="font-bold text-white text-md">
                      Add a Skill
                    </h1> 
                  </div>
                </button>
                <p className="underline text-sm mr-3">view all</p>
              </div>
              <div className="flex flex-col justify-center items-center mt-2 md:flex-row lg:max-w-[850px]">
                <Skill_Cover />
                <Skill_Cover />
              </div>
            </div>
          </div>
        )}
        </div>






        {mobileview && (
          <div className="flex flex-col justify-center items-center">
            {/* Skills Section */}
            <div className="bg-white w-[95%] h-[320px] font-montserrat rounded-lg mt-5 max-w-[450px] md:mt-0 md:max-w-[750px]">
              <h1 className="font-bold text-black text-xl ml-5 mt-5">
                My Skills
              </h1>
              <div className="flex justify-between items-center mt-3 max-w-[440px] md:max-w-[750px]">
                <button className="bg-[#122620]  w-[40%] h-10 ml-[4%]  text-white text-[12px] font-montserrat rounded-2xl md:max-w-[170px]">
                  <div className="flex justify-evenly items-center ">
                    <Image width={15} src={add} alt="add" className="" />
                    <h1 className="font-bold text-white text-md">
                      Add a Skill
                    </h1>
                  </div>
                </button>
                <p className="underline text-sm mr-3">view all</p>
              </div>
              <div className="flex flex-col justify-center items-center mt-2 md:flex-row md:justify-center md:items-center ">
                <Skill_Cover />
                <Skill_Cover />
              </div>
            </div>
          </div>
        )}
      </>
    </>
  );
}
