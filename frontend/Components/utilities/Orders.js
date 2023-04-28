import react, {useState, useEffect} from "react";
import Image from "next/image";
import img1 from "/public/Images/Orders_Page/orders1.png";
import avatar from "/public/Images/Smavatar.png";
import clock from "/public/Images/Orders_Page/clock.png";
import dollar from "/public/Images/Orders_Page/dollar.png";
import submit from "/public/Images/Orders_Page/submit.png";
import cancel from "/public/Images/Orders_Page/cancel.png";
import outsource from "/public/Images/Orders_Page/outsource.png";
import flag from "/public/Images/Orders_Page/milestoneflag.png";
import milestone from "/public/Images/Orders_Page/milestone.png";
import milestone2 from "/public/Images/Orders_Page/milestone2.png";
import milestone3 from "/public/Images/Orders_Page/milestone3.png";
import bar from "/public/Images/Orders_Page/bar.png";

// const order={
//     title:"Design a custom built Website for you.",
//     description:"Design an Ecommerce store with built-in API’s etc..",
//     fromName:"Saqib",
//     remainingTime:"04 : 17 : 39",
//     amount:"405$",
//     onSumbit:()=>{console.log("Hello1")},
//     onCancel:()=>{console.log("hello2")}
// }
let pcClassname="flex flex-row mx-10 gap-5 pt-8 border-t-[0.5px] max-h-[400px] border-black mt-4 mb-4"
let phoneClassname="flex flex-col mx-4 gap-5 pt-8 border-t-[0.5px] border-black mt-4 mb-4 "
const Orders = (props) => {
  let order = props.order;
  const [phone, setPhone]=useState()

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
    <>
    <div className={phone?phoneClassname:pcClassname}> 
    <div className="flex flex-row gap-[5%] basis-[55%] max-w-[800px]">
    <div className={(phone)?"min-w-[160px] max-h-[115px] ":"w-[50%] 2xl:max-h-[350px] 2xl:max-w-[483px] 2xl:ml-[8%]"}>
    <Image
            src={order.img1}
            alt="Picture of the author"
            width="100%" 
            height="100%" 
            layout="responsive" 
            objectFit="contain"
          />
    </div>
    <div className="w-[80%]">
    <p className="font-bold text-xl 2xl:text-5xl"> {order.title}</p>
          <p className="mt-[2%] text-base 2xl:text-3xl">{order.description}</p>
          <p className="text-base font-bold inline 2xl:text-3xl">From: {order.fromName} </p>

          <Image
            className="inline"
            src={avatar}
            alt="pic"
            width={"25%"}
            height={"25%"}
          />
          <p className=" block text-base font-bold mt-[2%] 2xl:text-3xl">Due: {order.due} </p>
    </div>
    </div>
    
        {/* <div className={(phone)?"":"basis-[21%]"}>
          <Image
            src={order.img1}
            alt="Picture of the author"
            width="100%" 
            height="100%" 
            layout="responsive" 
            objectFit="contain"
            className={(phone)?"min-w-[150px] ":"2xl:max-h-[350px] 2xl:max-w-[483px] 2xl:ml-[8%]"}
          />
          {phone && (<div className="inline max-w-[800px] 2xl:ml-[8%]" >
          <p className="font-bold 2xl:text-5xl"> {order.title}</p>
          <p className="mt-4 text-base mb-3 2xl:text-3xl">{order.description}</p>
          <p className="text-base font-bold inline 2xl:text-3xl">From: {order.fromName} </p>

          <Image
            className="inline"
            src={avatar}
            alt="pic"
            width={"25%"}
            height={"25%"}
          />
          <p className=" block text-base font-bold mt-2 2xl:text-3xl">Due: {order.due} </p>
        </div>)}
        </div>
        
        <div className="max-w-[800px] 2xl:ml-[8%]" >
        {!phone && (<> <p className="font-bold 2xl:text-5xl"> {order.title}</p>
          <p className="mt-4 text-base mb-3 2xl:text-3xl">{order.description}</p>
          <p className="text-base font-bold inline 2xl:text-3xl">From: {order.fromName} </p>

          <Image
            className="inline"
            src={avatar}
            alt="pic"
            width={"25%"}
            height={"25%"}
          />
          <p className=" block text-base font-bold mt-2 2xl:text-3xl">Due: {order.due} </p></>)}
         
        </div> */}
        <div className="basis-[35%] max-w-[600px] max-h-[350px] flex flex-col gap-5 bg-[#122620] rounded-lg pt-5 2xl:ml-[80px] sm:max-w-[550px]">
          <div className="flex flex-center text-wrap align-middle">
            <div  className="ml-[6%] mt-[2%] w-[8%] h-[8%] inline 2xl:w-[10%]" >
             <Image
              src={clock}
              width={"100%"}
              height={"100%"}
              alt="clock"
             
              layout="responsive" 
              objectFit="contain"
            /></div>
      
            <p className="text-white inline font-bold text-2xl ml-[5%] mt-[4%] 2xl:text-5xl">
              {order.remainingTime}
            </p>
            <p className="text-white inline  text-base ml-[2%] mt-[4.5%] 2xl:text-3xl">remaining</p>
          </div>
          <div className="flex flex-center align-middle">
            <div className="ml-[8%] mt-[2%] w-[6%] h-[6%]">
            <Image
              src={dollar}
              width={"100%"}
              height={"100%"}
              alt="dollar"
              layout="responsive" 
              objectFit="contain"
            />
            </div>
            <p className="text-white inline font-bold text-2xl ml-[6%] mt-[3%] 2xl:text-5xl">
              {order.amount}
            </p>
          </div>
          <div className="flex flex-center align-middle">
            <div  className="ml-[8%] mt-[2%] w-[6%] h-[6%] ">
            <Image
              src={flag}
              width={"100%"}
              height={"100%"}
              alt="falg"
              layout="responsive" 
              objectFit="contain"
            />
            </div>
            {(order.milestone==="milestone") &&
            <Image src={milestone} width={"50%"} height={"10%"} alt="falg"  className="mx-5 mb-4"/>}
             {(order.milestone==="milestone2") &&
            <Image src={milestone2} width={"50%"} height={"10%"} alt="falg"  className="mx-5 mb-4"/>}
            {(order.milestone==="milestone3") &&
            <Image src={milestone3} width={"50%"} height={"10%"} alt="falg"  className="mx-5 mb-4"/>}
          
          </div>
        </div>
        <div className="basis-[2%] min-w-[70px] max-w-[500px]">
        {(phone)?(
        <div className="flex flex-row gap-4 mx-auto" >
            <div
              className="border-[3px] bg-[#122620] border-[#122620]  w-[100%] p-3 rounded-lg "
              role="button"
              onClick={order.onSumbit}
            >
              <Image
                src={submit}
                width={"23px"}
                height={"23px"}
                alt="sumbit"
                className="m-auto"
              />
            </div>
            <div
              className="border-[3px]  bg-[#122620] border-[#122620] w-[100%]  p-3 rounded-lg "
              role="button"
              onClick={order.onCancel}
            >
              <Image
                src={outsource}
                width={"23px"}
                height={"23px"}
                alt="outsource"
                className="m-auto"
              />
            </div>
            <div
              className="flex flex-row gap-3 border-[3px] border-[#E21B1B] w-[100%] p-4 rounded-lg"
              role="button"
              onClick={order.onCancel}
            >
              <Image
                src={cancel}
                width={"23px"}
                height={"23px"}
                alt="cancel"
                className="m-auto"
              />
            </div>
          </div>):(<div className="flex flex-col gap-4 " >
            <div
              className="border-[3px] bg-[#122620] border-[#122620]  w-[100%] p-[25%] rounded-lg 2xl:w-[100px]"
              role="button"
              onClick={order.onSumbit}
            >
              <Image
                src={submit}
                width="100%"
                height="100%"
                alt="sumbit"
                className="m-auto"
                layout="responsive" 
                objectFit="contain"
              />
            </div>
            <div
              className="border-[3px]  bg-[#122620] border-[#122620] w-[100%]  p-[25%] rounded-lg 2xl:w-[100px]"
              role="button"
              onClick={order.onCancel}
            >
              <Image
                src={outsource}
                width={"100%"}
                height={"100%"}
                alt="outsource"
                className="m-auto"
                layout="responsive" 
                objectFit="contain"
              />
            </div>
            <div
              className="flex flex-row gap-3 border-[3px] border-[#E21B1B] w-[100%] p-[25%] rounded-lg 2xl:w-[100px] "
              role="button"
              onClick={order.onCancel}
            >
              <Image
                src={cancel}
                width={"100%"}
                height={"100%"}
                alt="cancel"
                className="m-auto"
                layout="responsive" 
                objectFit="contain"
              />
            </div>
          </div>)}
        </div>
      </div>
 
    </>
  );
};

export default Orders;
