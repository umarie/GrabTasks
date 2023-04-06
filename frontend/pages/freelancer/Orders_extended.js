let all=17;
let Cancelled=1;
let Completed=12;
let Active=2;
import { useState } from "react";
import Orders from "@/Components/utilities/Orders";
import Image from 'next/image'
import arrow from '/public/Images/arrow.png'
import img1 from '/public/Images/orders1.png'
import img2 from '/public/Images/img2.png'
const order={
    title:"Design a custom built Website for you.",
    description:"Design an Ecommerce store with built-in API’s etc..",
    fromName:"Saqib",
    remainingTime:"04 : 17 : 39",
    amount:"405$",
    img1:img1,
    onSumbit:()=>{console.log("Hello1")},
    onCancel:()=>{console.log("hello2")}
}
const order2={
    title:"Design a custom built Website for you.",
    description:"Design an Ecommerce store with built-in API’s etc...",
    fromName:"Saqib",
    remainingTime:"04 : 17 : 39",
    amount:"405$",
    img1:img2,
    onSumbit:()=>{console.log("Hello1")},
    onCancel:()=>{console.log("hello2")}
}
const Orders_extended =()=>{
    const clickHandler=(event)=>{
        console.log(event.target.id)
        setcategory(event.target.id)
    }
  const  [category,setcategory]= useState("Active")
    return (
        <>
     
            <button className=" flex flex-row gap-4 bg-black ml-12 mt-28 pt-3 pb-4 pr-4 pl-3 text-xl font-bold text-base rounded text-white">
                 <Image width={24} height={24} src={arrow} alt="arrow"/>
                 Dashboard
                        </button>
        <h1 className="text-black mt-6 ml-12 font-bold text-3xl ">Orders</h1>  
        <div className="flex flex-row gap-36 ml-12 mt-6 text-black font-bold text-xl">
            <h2 role="button" id="Active" onClick={clickHandler} className={category!="Active"?"text-gray-400":""} >Active({Active})</h2>
            <h2 role="button" id="Completed" onClick={clickHandler} className={category!="Completed"?"text-gray-400":""}>Completed({Completed})</h2>
            <h2 role="button" id="Cancelled" onClick={clickHandler} className={category!="Cancelled"?"text-gray-400":""}>Cancelled({Cancelled})</h2>
            <h2 role="button" id="All" onClick={clickHandler} className={category!="All"?"text-gray-400":""}>All({all})</h2>
        </div>

                  <Orders order={order}/>
                  <Orders order={order2}/>
                  <Orders order={order}/>
                  <Orders order={order}/>
                  <Orders order={order}/>
                  {/* <Orders order={order}/> */}
                  {/* <Orders order={order}/> */}
                  {/* <Orders/>
                  <Orders/>
                  <Orders/>
                  <Orders/> */}
      


        </>
    )
}

export default Orders_extended