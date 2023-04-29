import React from 'react'
import { useState, useEffect } from 'react';
import Image from 'next/image'
import SearchIcon from '../../public/Images/NavSearchBar/magnifyingGlass.svg'
import DropIcon from '../../public/Images/NavSearchBar/DropDown.svg'

export default function NavSearchBar({MainWidth}) {
    const [selectedOption, setSelectedOption] = useState(false);
    const [selectedOptionbudget, setSelectedOptionbudget] = useState(false);
    const [level, setLevel] = useState("Choose..");
    const [budget, setBudget] = useState("Choose..");
    const [service, setService] = useState('')

    function searchbtnhandle(){
        console.log(service + level + budget)
    }
    console.log(MainWidth)
    const handleInput = (event) =>{
        console.log(event.target.value)
        setService(event.target.value)
    }
    
    const handletext = (event)=>{
        console.log(event.target.id)
        setLevel(event.target.id)
    }

    const handletextbudget = (event)=>{
        console.log(event.target.id)
        setBudget(event.target.id)
    }
    
  return (
    <>
    {/* Pass width by Props */}
    <div className='w-[85%] h-auto mt-10'>
        <div className='lg:w-[100%] lg:h-auto lg:mt-6'>
            <span className='text-white text-3xl m-0 lg:m-0 lg:text-5xl lg:font-bold lg:font-montserrat'>Thousand of services,</span>
            <br/>
            <span className='text-white text-3xl m-0 lg:m-0 lg:text-5xl lg:font-bold lg:font-montserrat'>One search away.</span>
        </div>

{/* The following code is for large screens search bar */}
        <div className='hidden lg:w-[100%] lg:h-[auto] lg:mt-[50px] lg:flex lg:flex-row lg:justify-between items-end '>
            <div className='w-[94%]'>
                <div className='flex flex-row'>
                    <label htmlFor="" className='ml-5 text-white text-base w-[48%]'>Service</label>
                    <label htmlFor="" className='ml-5 text-white text-base w-[23%]'>Level</label>
                    <label htmlFor="" className='ml-5 text-white text-base w-[23%]'>Budget</label>
                </div>       

                <div className='w-[100%] h-[50px] bg-white rounded-xl flex flex-row justify-between items-center'>
                    <input  placeholder='social media manager' onChange={handleInput} className='w-[48%] h-[100%] pl-5 border border-white rounded-l-xl text-gray-400 focus:outline-0'/>
                    <div className='w-[2px] h-[85%] bg-slate-300'/>
                    <div className='w-[23%] h-[100%] group block relative'>
                        <button className='w-[100%] h-[100%] flex flex-row justify-between items-center text-slate-400'>
                            <span>{level}</span>
                            <Image
                                src={DropIcon}
                            />
                        </button>
                        <div className='hidden group-hover:block absolute z-10 w-[100%] h-[auto]'>
                            <div className='w-[100%] h-[auto] flex flex-col'>
                                <span onClick={handletext} id="novice" className='w-[100%] h-[30px] text-center rounded-none border-t-[2px] border-gray-300 bg-white text-slate-400 hover:bg-gray-300 hover:font-bold hover:text-[#122620]'>novice</span>
                                <span onClick={handletext} id="intermediate" className='w-[100%] h-[30px] text-center rounded-none border-t-[2px] border-gray-300 bg-white text-slate-400 hover:bg-gray-300 hover:font-bold hover:text-[#122620]'>intermediate</span>
                                <span onClick={handletext} id="expert" className='w-[100%] h-[30px] text-center rounded-none border-t-[2px] border-gray-300 bg-white text-slate-400 hover:bg-gray-300 hover:font-bold hover:text-[#122620]'>expert</span>
                                <span onClick={handletext} id="veteran" className='w-[100%] h-[30px] text-center rounded-none border-t-[2px] border-gray-300 bg-white text-slate-400 hover:bg-gray-300 hover:font-bold hover:text-[#122620]'>veteran</span>
                            </div>
                        </div>
                    </div>
                    <div className='w-[2px] h-[85%] bg-slate-300'/>
                    <div className='w-[23%] h-[100%] group block relative'>
                        <button className='w-[100%] h-[100%] flex flex-row justify-between items-center text-slate-400'>
                            <span>{budget}</span>
                            <Image
                                src={DropIcon}
                                className='mr-3'
                            />
                        </button>
                        <div className='hidden group-hover:block absolute z-10 w-[100%] h-[auto]'>
                            <div className='w-[100%] h-[auto] flex flex-col'>
                                <span onClick={handletextbudget} id="$100" className='w-[100%] h-[30px] text-center rounded-none border-t-[2px] border-gray-300 bg-white text-slate-400 hover:bg-gray-300 hover:font-bold hover:text-[#122620]'>$100</span>
                                <span onClick={handletextbudget} id="$200" className='w-[100%] h-[30px] text-center rounded-none border-t-[2px] border-gray-300 bg-white text-slate-400 hover:bg-gray-300 hover:font-bold hover:text-[#122620]'>$200</span>
                                <span onClick={handletextbudget} id="$300" className='w-[100%] h-[30px] text-center rounded-none border-t-[2px] border-gray-300 bg-white text-slate-400 hover:bg-gray-300 hover:font-bold hover:text-[#122620]'>$300</span>
                                <span onClick={handletextbudget} id="$400" className='w-[100%] h-[30px] text-center rounded-none border-t-[2px] border-gray-300 bg-white text-slate-400 hover:bg-gray-300 hover:font-bold hover:text-[#122620]'>$400</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={searchbtnhandle} className='w-[5%] h-[50px] bg-[#D6AD60] rounded-xl flex items-center justify-center hover:bg-white hover:border-[4px] hover: border-[#D6AD60]'>
            <Image
                src={SearchIcon}
                width={25}
            />
            </button>
        </div>
    
{/* The following code is for small screens search bar */}
        <div className='w-[100%] h-auto mt-5 flex flex-col justify-start lg:hidden'>
            <label htmlFor="service" className='ml-5 text-white text-base'>Service</label>
            <input type="text" id="service" name="service" placeholder='social media manager' onChange={handleInput} className='w-[100%] h-[40px] border-2 rounded-full pl-5 focus:outline-0 focus:border-[#122620] focus:border-3'/>
            <label htmlFor="level" className='ml-5 mt-2 text-white text-base'>Level</label>
            <div id="level" name="level" className='group block relative'>
                <button className='w-[100%] h-[40px] flex flex-row justify-between items-center bg-[white] border-2 rounded-full pl-5 focus:outline-0 focus:border-[#122620] focus:border-3'>
                    <span className='text-slate-400'>{level}</span>
                    <Image
                        src={DropIcon}
                        className='mr-3'
                    />
                </button>
                <div className='hidden group-hover:block absolute z-10 w-[100%] h-[auto]'>
                    <div className='w-[100%] h-[auto] flex flex-col'>
                        <span onClick={handletext} id="novice" className='w-[100%] h-[30px] text-center rounded-sm bg-white text-slate-400 hover:bg-gray-300 hover:font-bold hover:text-[#122620]'>novice</span>
                        <span onClick={handletext} id="intermediate" className='w-[100%] h-[30px] text-center rounded-sm bg-white text-slate-400 hover:bg-gray-300 hover:font-bold hover:text-[#122620]'>intermediate</span>
                        <span onClick={handletext} id="expert" className='w-[100%] h-[30px] text-center rounded-sm bg-white text-slate-400 hover:bg-gray-300 hover:font-bold hover:text-[#122620]'>expert</span>
                        <span onClick={handletext} id="veteran" className='w-[100%] h-[30px] text-center rounded-sm bg-white text-slate-400 hover:bg-gray-300 hover:font-bold hover:text-[#122620]'>veteran</span>
                    </div>
                </div>
            </div>
            <label htmlFor="budget" className='ml-5 mt-2 text-white text-base'>Budget</label>
            <div id="budget" name="budget" className='block relative group'>
                <button className='w-[100%] h-[40px] flex flex-row justify-between items-center bg-[white] border-2 rounded-full pl-5 focus:outline-0 focus:border-[#122620] focus:border-3'>
                    <span className='text-slate-400'>{budget}</span>
                    <Image
                        src={DropIcon}
                        className='mr-3'
                    />
                </button>
                <div className='hidden group-hover:block absolute w-[100%] h-[auto] z-10'>
                    <div className='flex flex-col w-[100%] h-[auto]'>
                        <span onClick={handletextbudget} id="$100" className='w-[100%] h-[30px] text-center rounded-sm bg-white text-slate-400 hover:bg-gray-300 hover:font-bold hover:text-[#122620]'>$100</span>
                        <span onClick={handletextbudget} id="$200" className='w-[100%] h-[30px] text-center rounded-sm bg-white text-slate-400 hover:bg-gray-300 hover:font-bold hover:text-[#122620]'>$200</span>
                        <span onClick={handletextbudget} id="$300" className='w-[100%] h-[30px] text-center rounded-sm bg-white text-slate-400 hover:bg-gray-300 hover:font-bold hover:text-[#122620]'>$300</span>
                        <span onClick={handletextbudget} id="$400" className='w-[100%] h-[30px] text-center rounded-sm bg-white text-slate-400 hover:bg-gray-300 hover:font-bold hover:text-[#122620]'>$400</span>
                    </div>
                </div>
            </div>
            <button onClick={searchbtnhandle} className='w-[100%] h-[40px] flex flex-row justify-center items-center mt-7 bg-[#D6AD60] hover:bg-[#122620] border-[#D6AD60] border-2 rounded-full hover:border-[white] hover:border-3 text-white text-base hover:font-bold '>
                <Image
                    src={SearchIcon}
                    width={15}
                    className='filter invert-[93%] sepia-[0%] saturate-[7500%] hue-rotate-[316deg] brightness-[106%] contrast-[106%]'
                />
                <span className='ml-2'>Search</span>
            </button>
        </div>

    </div> 
    </>
  )
}
