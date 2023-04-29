import {React, ReactDOM} from 'react'
import { useState, useEffect } from 'react';
import Image from 'next/image'

import C1 from '../../public/Images/LandingStatic/CCharge.svg'
import C2 from '../../public/Images/LandingStatic/CProgress.svg'
import C3 from '../../public/Images/LandingStatic/CService.svg' 
import F1 from '../../public/Images/LandingStatic/FCharge.svg'
import F2 from '../../public/Images/LandingStatic/FPayment.svg'
import F3 from '../../public/Images/LandingStatic/FRank.svg' 

import NavSearchBar from './LandingSearchBar';
import NavNavbar from './LandingNavbar';

import Swipe from "react-easy-swipe";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

export default function LandingStaticComp() {
    const [CcurrentSlide, CsetCurrentSlide] = useState(0);
    const [FcurrentSlide, FsetCurrentSlide] = useState(0);

    const ClientList = [
        {
        src: C1,
        text: "No Client side service charges"
        },
        {
        src: C2,
        text: "Project progress tracker"
        },
        {
        src: C3,
        text: "Dedicated Service"
        }
    ]

    const FreeLancerList = [
        {
        src: F1,
        text: "Only 7% service charges"
        },
        {
        src: F2,
        text: "Easy & direct bank payments for Pakistani freelancers"
        },
        {
        src: F3,
        text: "Efficient random ranking algorithms (No gig rank problem)"
        }
    ]
 
    const ChandleNextSlide = () => {
        let newSlide = CcurrentSlide === ClientList.length - 1 ? 0 : CcurrentSlide + 1;
        CsetCurrentSlide(newSlide);
    };

    const ChandlePrevSlide = () => {
        let newSlide = CcurrentSlide === 0 ? ClientList.length - 1 : CcurrentSlide - 1;
        CsetCurrentSlide(newSlide);
    };
  
    const FhandleNextSlide = () => {
        let newSlide = FcurrentSlide === FreeLancerList.length - 1 ? 0 : FcurrentSlide + 1;
        FsetCurrentSlide(newSlide);
    };

    const FhandlePrevSlide = () => {
        let newSlide = FcurrentSlide === 0 ? FreeLancerList.length - 1 : FcurrentSlide - 1;
        FsetCurrentSlide(newSlide);
    };
  
    return (
    <>
    <div className='hidden lg:w-[90%] lg:h-auto lg:mt-20 lg:flex lg:flex-col lg:justify-center lg:items-center'>
        <div>
            <span className='text-white text-5xl m-0'>Why </span>
            <span className='text-[#D6AD60] italic text-5xl m-0'>Clients</span>
            <span className='text-white text-5xl m-0'> choose Us?</span>
        </div>

        <div className='w-[95%] h-auto flex flex-row justify-evenly items-center mt-10'>
            <div className='w-[240px] h-[240px] bg-white border-2 border-blue rounded-xl flex flex-col justify-evenly items-center'>
                <Image
                    src={C1}
                    width={80}
                    height={80}
                    className="w-[80px] h-[80px] duration-500"
                    loading="lazy"
                />
                <div className='w-[170px] h-auto font-semibold text-xl text-[#122620] text-center'>
                    <span>No Client side service charges</span>
                </div>
            </div>

            <div className='w-[240px] h-[240px] bg-white border-2 border-blue rounded-xl flex flex-col justify-evenly items-center'>
                <Image
                    src={C2}
                    width={80}
                    height={80}
                    className="w-[80px] h-[80px] duration-500"
                    loading="lazy"
                />
                <div className='w-[170px] h-auto font-semibold text-xl text-[#122620] text-center'>
                    <span>Project progress tracker</span>
                </div>
            </div>

            <div className='w-[240px] h-[240px] bg-white border-2 border-blue rounded-xl flex flex-col justify-evenly items-center'>
                <Image
                    src={C3}
                    width={80}
                    height={80}
                    className="w-[80px] h-[80px] duration-500"
                    loading="lazy"
                />
                <div className='w-[170px] h-auto font-semibold text-xl text-[#122620] text-center'>
                    <span>Dedicated Service</span>
                </div>
            </div>
        </div>
    </div>

    <div className='hidden lg:w-[90%] lg:h-auto lg:mt-20 lg:flex lg:flex-col lg:justify-center lg:items-center'>
        <div>
            <span className='text-white text-5xl m-0'>Why </span>
            <span className='text-[#D6AD60] italic text-5xl m-0'>Freelancers</span>
            <span className='text-white text-5xl m-0'> choose Us?</span>
        </div>

        <div className='w-[95%] h-auto flex flex-row justify-evenly items-center mt-10'>
            <div className='w-[240px] h-[240px] bg-white border-2 border-blue rounded-xl flex flex-col justify-evenly items-center'>
                <Image
                    src={F1}
                    width={80}
                    height={80}
                    className="w-[80px] h-[80px] duration-500"
                    loading="lazy"
                />
                <div className='w-[170px] h-auto font-semibold text-xl text-[#122620] text-center'>
                    <span>Only 7% service charges</span>
                </div>
            </div>

            <div className='w-[240px] h-[240px] bg-white border-2 border-blue rounded-xl flex flex-col justify-evenly items-center'>
                <Image
                    src={F2}
                    width={80}
                    height={80}
                    className="w-[80px] h-[80px] duration-500"
                    loading="lazy"
                />
                <div className='w-[170px] h-auto font-semibold text-xl text-[#122620] text-center'>
                    <span>Easy & direct bank payments for Pakistani freelancers</span>
                </div>
            </div>

            <div className='w-[240px] h-[240px] bg-white border-2 border-blue rounded-xl flex flex-col justify-evenly items-center'>
                <Image
                    src={F3}
                    width={80}
                    height={80}
                    className="w-[80px] h-[80px] duration-500"
                    loading="lazy"
                />
                <div className='w-[170px] h-auto font-semibold text-xl text-[#122620] text-center'>
                    <span>Efficient random ranking algorithms (No gig rank problem)</span>
                </div>
            </div>
        </div>
    </div>

    <div className='w-[100%] h-auto mt-10 flex flex-col justify-center items-center lg:hidden'>
        <div>
            <span className='text-white text-3xl m-0'>Why </span>
            <span className='text-[#D6AD60] italic text-3xl m-0'>Clients</span>
            <span className='text-white text-3xl m-0'> Choose Us?</span>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <div className="mt-5 w-[300px] h-[220px] flex flex-row justify-center items-center">
                <span>
                    <FiChevronLeft onClick={ChandlePrevSlide} className='text-white hover:text-black w-[30px] h-[30px] color-white border-[1px] border-white rounded-full hover:bg-white'/>
                </span>
                <div className="w-full h-full flex overflow-hidden relative ml-[10px] justify-center items-center">
                    <Swipe
                        onSwipeLeft={ChandleNextSlide}
                        onSwipeRight={ChandlePrevSlide}
                        className="relative z-10 w-full h-full"
                    >
                        {ClientList.map((l, index) => {
                            if (index === CcurrentSlide) {
                            return (
                                <div className='w-[220px] h-[220px] bg-white border-2 border-blue rounded-xl flex flex-col justify-evenly items-center'>
                                    <Image
                                        src={l.src}
                                        width={80}
                                        height={80}
                                        className="w-[80px] h-[80px] duration-500"
                                        loading="lazy"
                                    />
                                    <span className='text-center w-[170px] font-semibold text-xl text-[#122620]'>{l.text}</span>
                                </div>
                            );
                            }
                        })}
                    </Swipe>
                </div>
                <span >
                    <FiChevronRight onClick={ChandleNextSlide} className='text-white hover:text-black w-[30px] h-[30px] color-white border-[1px] border-white rounded-full hover:bg-white'/>
                </span>
            </div>
            <div className="relative flex justify-center p-2">
                {ClientList.map((_, index) => {
                    return (
                    <div
                        className={
                        index === CcurrentSlide
                            ? "h-4 w-4 bg-[#D6AD60] rounded-full mx-2 mb-2 cursor-pointer"
                            : "h-4 w-4 bg-white rounded-full mx-2 mb-2 cursor-pointer"
                        }
                        key={index}
                        onClick={() => {
                        CsetCurrentSlide(index);
                        }}
                    />
                    );
                })}
            </div>
        </div>
    </div>

    <div className='w-[100%] h-auto mt-7 flex flex-col justify-center items-center lg:hidden'>
        <div>
            <span className='text-white text-3xl m-0'>Why </span>
            <span className='text-[#D6AD60] italic text-3xl m-0'>Freelancers</span>
            <span className='text-white text-3xl m-0'> Choose Us?</span>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <div className="mt-5 w-[300px] h-[220px] flex flex-row justify-center items-center">
            <span>
                <FiChevronLeft onClick={FhandlePrevSlide} className='text-white hover:text-black w-[30px] h-[30px] color-white border-[1px] border-white rounded-full hover:bg-white'/>
            </span>
            <div className="w-full h-full flex overflow-hidden relative ml-[10px] justify-center items-center">
                <Swipe
                    onSwipeLeft={FhandleNextSlide}
                    onSwipeRight={FhandlePrevSlide}
                    className="relative z-10 w-full h-full"
                >
                    {FreeLancerList.map((l, index) => {
                        if (index === FcurrentSlide) {
                        return (
                            
                            <div className='w-[220px] h-[220px] bg-white border-2 border-blue rounded-xl flex flex-col justify-evenly items-center'>
                                <Image
                                    src={l.src}
                                    width={80}
                                    height={80}
                                    className="w-[80px] h-[80px] duration-500"
                                    loading="lazy"
                                />
                                <span className='text-center w-[170px] font-semibold text-xl text-[#122620]'>{l.text}</span>
                            </div>
                        );
                        }
                    })}
                </Swipe>
            </div>
            <span >
                <FiChevronRight onClick={FhandleNextSlide} className='text-white hover:text-black w-[30px] h-[30px] color-white border-[1px] border-white rounded-full hover:bg-white'/>
            </span>
        </div>

        <div className="relative flex justify-center p-2">
            {FreeLancerList.map((_, index) => {
                return (
                <div
                    className={
                    index === FcurrentSlide
                        ? "h-4 w-4 bg-[#D6AD60] rounded-full mx-2 mb-2 cursor-pointer"
                        : "h-4 w-4 bg-white rounded-full mx-2 mb-2 cursor-pointer"
                    }
                    key={index}
                    onClick={() => {
                    FsetCurrentSlide(index);
                    }}
                />
                );
            })}
        </div>
    </div>
    </div>
    </>
  )
}
