let All = 17;
let Cancelled = 1;
let Completed = 12;
let Active = 2;
let OutSourced=2;
import { useState, useEffect } from "react";
import Orders from "@/Components/utilities/Orders";
import Image from "next/image";
import arrow from "/public/Images/Orders_Page/arrow.png";
import img1 from "/public/Images/Orders_Page/orders1.svg";
import img2 from "/public/Images/Orders_Page/orders2.svg";
import milestone from "/public/Images/Orders_Page/milestone.png";
import milestone2 from "/public/Images/Orders_Page/milestone2.png";
import milestone3 from "/public/Images/Orders_Page/milestone3.png";
const order = {
  title: "Design a custom built Website for you.",
  description: "Design an Ecommerce store with built-in API’s etc..",
  fromName: "Saqib",
  remainingTime: "04 : 17 : 39",
  amount: "405$",
  img1: img1,
  milestone:"milestone",
  due:"12-2-2023",
  onSumbit: () => {
    console.log("Hello1");
  },
  onCancel: () => {
    console.log("hello2");
  },
};
const order2 = {
  title: "Design a custom built Website for you.",
  description: "Design an Ecommerce store with built-in API’s etc...",
  fromName: "Saqib",
  remainingTime: "04 : 17 : 39",
  amount: "405$",
  img1: img2,
  milestone:"milestone2",
  due:"18-2-2023",
  onSumbit: () => {
    console.log("Hello1");
  },
  onCancel: () => {
    console.log("hello2");
  },
};
const Orders_Page = () => {
  const clickHandler = (event) => {
    console.log(event.target.id);
    setcategory(event.target.id);
    setmenu()
  };
  const [category, setcategory] = useState("Active");
  const [menuClass, setClass]=useState({open:"false",class:"hidden absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"})
  const [phone, setPhone]=useState()

  const setmenu=()=>{
    if(menuClass.open=="true")
    setClass({open:"false",class:"hidden absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"})
    else setClass({open:"true",class:"absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"})
  }
  useEffect(() => {
    chekPhone()
  }, [])
  

  const chekPhone=()=>{
      if(window.innerWidth >=1024)
      {
          setPhone(false);
      }   
      else setPhone(true)
    }
    if(typeof window==="object")
      window.addEventListener("resize",chekPhone)

  return (
    <div className="font-montserrat">
      {!phone?<div>
        <button className=" flex flex-row gap-4 bg-black ml-12 mt-28 pt-3 pb-4 pr-4 pl-3 font-bold text-base rounded text-white">
        <Image width={"24%"} height={"24%"} src={arrow} alt="arrow" />
        Dashboard
      </button>
      <h1 className="text-black mt-6 ml-12 font-bold text-3xl">Orders</h1>
      <div className="flex flex-row gap-36 ml-12 mt-6 text-black font-bold text-xl ">
        <h2
          role="button"
          id="Active"
          onClick={clickHandler}
          className={category != "Active" ? "text-gray-400" : ""}
        >
          Active({Active})
        </h2>
        <h2
          role="button"
          id="OutSourced"
          onClick={clickHandler}
          className={category != "OutSourced" ? "text-gray-400" : ""}
        >
          OutSourced({OutSourced})
        </h2>
        <h2
          role="button"
          id="Completed"
          onClick={clickHandler}
          className={category != "Completed" ? "text-gray-400" : ""}
        >
          Completed({Completed})
        </h2>
        <h2
          role="button"
          id="Cancelled"
          onClick={clickHandler}
          className={category != "Cancelled" ? "text-gray-400" : ""}
        >
          Cancelled({Cancelled})
        </h2>
        <h2
          role="button"
          id="All"
          onClick={clickHandler}
          className={category != "All" ? "text-gray-400" : ""}
        >
          All({All})
        </h2>
      </div>
      </div>:
      <div>
        <h1 className="text-black mt-6 ml-12 font-bold text-3xl 2xl:text-8xl">Orders</h1>
      <div>
  <div className="flex justify-center">
    <button onClick={setmenu} class="inline-flex  justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
      Order type 
      <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
  <div id="menu" class={menuClass.class} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
    <div class="py-1">
      <p class="text-gray-700 block px-4 py-2 text-sm" role="button" onClick={clickHandler} tabindex="-1" id="Active">Active {Active}</p>
      <p class="text-gray-700 block px-4 py-2 text-sm" role="button" onClick={clickHandler} tabindex="-1" id="OutSourced">OutSourced {OutSourced}</p>
      <p class="text-gray-700 block px-4 py-2 text-sm" role="button" onClick={clickHandler} tabindex="-1" id="All">All {All}</p>
      <p class="text-gray-700 block px-4 py-2 text-sm" role="button" onClick={clickHandler} tabindex="-1" id="Cancelled">Cancelled {Cancelled}</p>
      <p class="text-gray-700 block px-4 py-2 text-sm" role="button" onClick={clickHandler} tabindex="-1" id="Completed">Completed {Completed}</p>
    </div>
  </div>
      </div> </div>}
      <Orders order={order} />
      <Orders order={order2} />
      <Orders order={order} />
      <Orders order={order2} />
      <Orders order={order} />
    </div>
  );
};

export default Orders_Page;
