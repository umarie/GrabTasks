import React from "react";
import clicks from "../../public/Images/Freelancer_Dashboard/clicks.svg";
import edit_skill from "../../public/Images/Freelancer_Dashboard/edit_skill.svg";
import impressions from "../../public/Images/Freelancer_Dashboard/impressions.svg";
import orders from "../../public/Images/Freelancer_Dashboard/orders.svg";
import revenue from "../../public/Images/Freelancer_Dashboard/revenue.svg";
import skillimage from "../../public/Images/Freelancer_Dashboard/skillimage.svg";

import Image from "next/image";
import Specialization_Tag from "./Specialization_Tag";

export default function Skill_Cover() {
  return (
    <>
      <div className="bg-[#EEEEEE] w-[95%] h-full font-montserrat mt-2 rounded-lg md:w-[80%] md:max-w-[380px] md:ml-2 xl:w-[600px]">
        <div className="flex justify-between items-start mt-4">
          <Image width={90} src={skillimage} alt="details" className="ml-3" />
          <div className="flex flex-col">
            <h1 className="font-bold text-black text-md ">Web development</h1>
            <div className="grid grid-cols-2 gap-2 mt-1 md:grid-cols-3">
              <Specialization_Tag/>
              <Specialization_Tag/>
              <Specialization_Tag/>
              <Specialization_Tag/>
              <Specialization_Tag/>
              <Specialization_Tag/>
              <Specialization_Tag/>
              
            </div>
            <p className="font-bold text-black text-md mt-2">from $40</p>
          </div>
          <Image
            width={20}
            src={edit_skill}
            alt="details"
            className="mr-4"
          />
        </div>
        <div className="flex justify-evenly mt-5">
          <div className="flex flex-col">
            <div className="flex">
              <Image width={20} src={clicks} alt="clicks" className="" />
              <p className="text-[13px]  ml-1">454 clicks</p>
            </div>
            <div className="flex mt-3">
              <Image width={20} src={orders} alt="orders" className="" />
              <p className="text-[13px]  ml-1">104 orders</p>
            </div>
          </div>

          <div className="flex flex-col pb-3">
            <div className="flex">
              <Image
                width={20}
                src={impressions}
                alt="impressions"
                className=""
              />
              <p className="text-[13px] ml-1">3120 impressions</p>
            </div>
            <div className="flex mt-3">
              <Image width={15} src={revenue} alt="revenue" className="" />
              <p className="text-[13px]  ml-1">$5600revenue</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
