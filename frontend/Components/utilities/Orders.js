import react from "react";
import Image from "next/image";
import img1 from "/public/Images/orders1.png";
import avatar from "/public/Images/Smavatar.png";
import clock from "/public/Images/clock.png";
import dollar from "/public/Images/dollar.png";
import submit from "/public/Images/submit.png";
import cancel from "/public/Images/cancel.png";
// const order={
//     title:"Design a custom built Website for you.",
//     description:"Design an Ecommerce store with built-in API’s etc..",
//     fromName:"Saqib",
//     remainingTime:"04 : 17 : 39",
//     amount:"405$",
//     onSumbit:()=>{console.log("Hello1")},
//     onCancel:()=>{console.log("hello2")}
// }
const Orders = (props) => {
  let order = props.order;
  return (
    <>
      <div className="flex flex-row mx-10 gap-5 pt-8 border-t-[0.5px] border-black mt-4 mb-4">
        <div className="basis-[12%]">
          <Image
            src={order.img1}
            alt="Picture of the author"
            width={"145px"}
            height={"166px"}
          />
        </div>
        <div className="basis-[35%] ">
          <p className="font-bold text-xl"> {order.title}</p>
          <p className="mt-4 text-base mb-3">{order.description}</p>
          <p className="text-base font-bold inline">From: {order.fromName} </p>
          <Image
            className="inline"
            src={avatar}
            alt="pic"
            width={"25px"}
            height={"25px"}
          />
        </div>
        <div className="basis-[30%] flex flex-col gap-2 bg-[#122620] rounded-lg pt-5 ">
          <div className="flex flex-center text-wrap">
            <Image
              src={clock}
              width={"37px"}
              height={"37px"}
              alt="clock"
              className="ml-8 inline"
            />
            <p className="text-white inline font-bold text-2xl ml-4">
              {order.remainingTime}
            </p>
            <p className="text-white inline  text-base ml-2 mt-2 ">remaining</p>
          </div>
          <div className="flex flex-center">
            <Image
              src={dollar}
              width={"37px"}
              height={"37px"}
              alt="clock"
              className="ml-10"
            />
            <p className="text-white inline font-bold text-2xl ml-4">
              {order.amount}
            </p>
          </div>
        </div>
        <div className="basis-[15%]">
          <div className="flex flex-col gap-4">
            <div
              className="flex flex-row gap-3 border-[3px] border-black w-[100%] p-3 rounded-lg"
              role="button"
              onClick={order.onSumbit}
            >
              <Image src={submit} width={"23px"} height={"23px"} alt="sumbit" />
              <p>Submit Work</p>
            </div>
            <div
              className="flex flex-row gap-3 border-[3px] border-[#E21B1B] w-[100%] p-3 rounded-lg"
              role="button"
              onClick={order.onCancel}
            >
              <Image src={cancel} width={"23px"} height={"23px"} alt="sumbit" />
              <p>Cancel Order</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
