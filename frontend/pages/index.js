import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Orders_Page from './freelancer/Orders_Page'
import Header from '@/Components/layout/header'
import Landingpgcomp from '@/Components/layout/landingpgcomp'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header/>
      {/* <Landingpgcomp/>   */}
      <Orders_Page/>
    </>
  )
}