import react, { useState, useEffect } from "react";
import Image from "next/image";
import img1 from "/public/Images/Orders_Page/orders1.png";
import avatar from "/public/Images/Smavatar.png";
import clock from "/public/Images/Orders_Page/clock.svg";
import dollar from "/public/Images/Orders_Page/dollar.svg";
import submit from "/public/Images/Orders_Page/submit.svg";
import cancel from "/public/Images/Orders_Page/cancel.svg";
import outsource from "/public/Images/Orders_Page/outsource.svg";
import flag from "/public/Images/Orders_Page/flag.svg";
import milestone from "/public/Images/Orders_Page/milestone.png";
import milestone2 from "/public/Images/Orders_Page/milestone2.png";
import milestone3 from "/public/Images/Orders_Page/milestone3.png";

// const order={
//     title:"Design a custom built Website for you.",
//     description:"Design an Ecommerce store with built-in API’s etc..",
//     fromName:"Saqib",
//     remainingTime:"04 : 17 : 39",
//     amount:"405$",
//     onSumbit:()=>{console.log("Hello1")},
//     onCancel:()=>{console.log("hello2")}
// }
let pcClassname =
  "flex flex-row mx-10 gap-5 pt-8 border-t-[0.5px] max-h-[400px] border-black mt-4 mb-4";
let phoneClassname =
  "flex flex-col mx-2 gap-2 pt-3 border-t-[0.5px] border-black mt-2 mb-2 justify-center sm:items-center";
const Orders = (props) => {
  let order = props.order;
  const [phone, setPhone] = useState();

  useEffect(() => {
    chekPhone();
  }, []);

  const chekPhone = () => {
    if (window.innerWidth >= 1024) {
      setPhone(false);
    } else setPhone(true);
  };
  if (typeof window === "object") window.addEventListener("resize", chekPhone);
  return (
    <>
      <div className={phone ? phoneClassname : pcClassname}>
        <div className="flex flex-row gap-2  lg:gap-4 basis-[55%] max-w-[1200px] justify-items-start ">
          <Image
            src={order.img1}
            alt="Picture of the author"
            width={250}
            className="w-[40%] sm:w-[60%]"
          />

          <div className=" flex flex-col gap-1 items-left justify-evenly w-[80%] ">
            <p className="font-bold text-xl xl:text-2xl 2xl:text-2xl">
              
              {order.title}
            </p>
            <p className="text-sm 2xl:text-2xl">{order.description}</p>
            <div>
              <p className="text-base font-bold inline 2xl:text-2xl mr-2">
                From: {order.fromName}
              </p>
              <Image
                className="inline"
                src={avatar}
                alt="pic"
                width={20}

              />
            </div>
            <p className=" block text-base font-bold 2xl:text-2xl">
              Due: {order.due}
            </p>
          </div>
        </div>
        {
          //Green Box
        }
        <div className="basis-[35%]  w-[100] flex flex-col justify-evenly items-start gap-5 max-w-[600px] max-h-[350px] p-[5%] lg:p-[2%] bg-[#122620] rounded-lg  2xl:ml-[80px] sm:max-w-[550px]">
          {
            //clock and remining time
          }
          <div className="flex flex-center text-wrap justify-start gap-3 items-center">
            <Image
              src={clock}
              width={30}
              alt="clock"
              className="w-[35px] sm:w-[40px] lg:w-[45px] "
            />
            <p className="text-white inline font-bold  text-2xl lg:text-3xl">
              {order.remainingTime}
            </p>
            <p className="text-white inline text-sm 2xl:text-xl ">remaining</p>
          </div>
          <div className="flex flex-center text-wrap justify-start gap-4  items-center">
            <Image
              src={dollar}
              width={30}
              alt="dollar"
              className="w-[25px] sm:w-[30px] lg:w-[35px] "
            />
            <p className="text-white inline font-bold text-2xl lg:text-3xl ">
              {order.amount}
            </p>
          </div>
          <div className="flex flex-center text-wrap justify-start gap-5  items-center">
            <Image src={flag} width={40} alt="falg"  className="w-[25px] sm:w-[30px] lg:w-[40px] "/>

            {order.milestone === "milestone" && (
              <Image src={milestone} width={200}  alt="falg" />
            )}
            {order.milestone === "milestone2" && (
              <Image src={milestone2} width={200} alt="falg" />
            )}
            {order.milestone === "milestone3" && (
              <Image src={milestone3} width={200} alt="falg" />
            )}
          </div>
        </div>
        <div className="basis-[2%] ">
      
            <div className={phone ? "flex flex-row gap-2 items-center justify-around":"flex flex-col gap-4 h-[100%] lg:w-[70px] items-center justify-around" }>
              <div
                className="border-[3px] bg-[#122620] border-[#122620]  w-[100%] p-3 rounded-lg sm:p-4 "
                role="button"
                onClick={order.onSumbit}
              >
                <Image
                  src={submit}
                  width={25}
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
                  width={25}
                  alt="outsource"
                  className="m-auto"
                />
              </div>
              <div
                className="border-[3px] border-[#E21B1B] w-[100%] p-3 rounded-lg"
                role="button"
                onClick={order.onCancel}
              >
                <Image
                  src={cancel}
                  width={25}
                  alt="cancel"
                  className="m-auto"
                />
              </div>
            </div>
          {/* ) : (
            <div className="flex flex-col gap-4 ">
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
            </div>
          )} */}
        </div>
      </div>
    </>
  );
};

export default Orders;
