import React from "react";
import profilepic from "/public/Images/Freelancer_Dashboard/profilepic.svg";
import Image from "next/image";
import Specialization_Tag from "./Specialization_Tag";
import Rank_Badge from "./Rank_Badge";

export default function Freelancer_Card() {
  return (
    <>
      <div className="font-montserrat w-[95%] h-[375px] max-w-[350px] shadow-2xl rounded-xl mt-4">
       <div className="flex justify-evenly items-center">
            <Image
                width={80}
                src={profilepic}
                alt="Profile Picture"
                className="mt-5"
              />
            <div className="flex flex-col justify-center items-center mt-5 mr-4">
                <h1 className="text-2xl font-bold">Hammad E.</h1>
                <h2 className="text-lg">Web Developer</h2>
            </div>
        </div>

        <p className="mt-5 text-sm pl-7 pr-5">I’m a professional web developer. I do web development in Mern stack.  I do web development in Mern ...</p>
        <p className="mt-5 text-md pl-7 opacity-50">Specializes in</p>
        <div className="grid grid-cols-3 gap-2 ml-7 mr-5 mt-2 md:grid-cols-3">
            <Specialization_Tag/>
            <Specialization_Tag/>
            <Specialization_Tag/>
            <Specialization_Tag/>
            <Specialization_Tag/>
            <Specialization_Tag/>
            <Specialization_Tag/>
            <Specialization_Tag/>
            <Specialization_Tag/>
        </div>

        <div className="flex justify-around items-center mt-5">
            <Rank_Badge/>
            <h1 className="font-bold">from $40</h1>
        </div>
      </div>
    </>
  );
}
