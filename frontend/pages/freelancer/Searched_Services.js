import React from "react";
import Image from "next/image";
import outsource_logo from "../../public/Images/Freelancer_Searched_services/outsource_logo.svg"
import Header from "@/Components/layout/header";
import Freelancer_Card from "@/Components/utilities/Freelancer_Card";

export default function Searched_Services() {
  let searched_Word = "Web developer";
  return (
    <>
    <Header />

    <>
      <span className="font-montserrat text-lg ml-[5%] xl:text-2xl">Showing Results for </span>
      <span className="font-montserrat text-lg font-bold xl:text-2xl">"{searched_Word}"</span>

      <div className="flex mt-2 ml-[5%]">
        <Image
          width={30}
          src={outsource_logo}
          alt="edit profile"
          className=""
        />
      <p className="font-montserrat text-sm ml-3 xl:text-lg">
        Marks if a fellow freelancer is actively outsourcing work. Go Grab the Tasks.
      </p>
      </div>
      <div className="w-[90%] h-[1px] ml-[5%] mt-2 bg-black opacity-50" />
      <div className="grid grid-cols-1 gap-4 ml-5 mt-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        <Freelancer_Card/>
        <Freelancer_Card/>
        <Freelancer_Card/>
        <Freelancer_Card/>
        <Freelancer_Card/>
        <Freelancer_Card/>
        <Freelancer_Card/>
        <Freelancer_Card/>
        <Freelancer_Card/>
        <Freelancer_Card/>
        <Freelancer_Card/>
        <Freelancer_Card/>
      </div>
    </>
    </>
  );
}
