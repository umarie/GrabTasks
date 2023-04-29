import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';

import SearchBar from '../Components/layout/LandingSearchBar';
import Navbar from '../Components/layout/LandingNavbar';
import Static from '../Components/layout/LandingStaticComp';

export default function landingPage({categories}) {
  return (
    <>
      <div className='w-full h-auto bg-[#122620] border border-black flex justify-center items-center flex-col'>

        <Navbar/>
        <SearchBar MainWidth={"85%"}/>
        <Static/>

      </div>

    </>
  )
}

export async function getStaticProps(){
  // Here we can use Axios if we want as well
  const response = ['Appetizers','Salads','Soups','Entrees','Sandwiches','Pizza','Desserts','Beverages']
  const categories = response
  console.log(categories)
  return {
      props: {
        // posts: posts.slice(0,20)
        categories: categories,
      }
  }
}