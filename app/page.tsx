'use client'
import Navbar from "./ui/navbar";
import Image from "next/image";
import Link from "next/link";
import { InstagramEmbed } from 'react-social-media-embed';

export default function Home() {
  return (
  <>
    <div className="flex flex-col">
 
      <div className="h-dvh w-full bg-center bg-cover bg-[url('/homepage_bg.jpg')] text-white">
        <div className="flex flex-col text-center mt-80">
          <h1 className="text-4xl md:text-8xl font-bold mx-10 md:mx-40 md:px-8">Greetings and Welcome!</h1>
          <h2 className="font-bold text-xl md:text-2xl p-4">Join Our Community</h2>
          <div className="m-auto border border-white p-3 px-8 rounded-full hover:bg-white hover:text-black duration-300 ease-in-out">
            <Link href="/about">Learn More</Link>
          </div>
        </div>  
      </div>
      <div className="flex justify-center mt-4">
        <InstagramEmbed url="https://www.instagram.com/ppidevon/" width={700}/>
      </div>
      
      <h1 className="font-bold text-4xl md:text-4xl pt-4 text-center ">Our Sponsors</h1>
      <div className="mt-4 flex flex-col md:flex-row w-full items-center justify-between px-14">
      <Image className="w-56 m-4 md:m-0" src="/sponsors/IDX.png" width={2000} height={2000} alt=""/>
      <Image className="w-56 m-4 md:m-0" src="/sponsors/ID_Clear.svg" width={2000} height={200} alt=""/>
      <Image className="w-56 m-4 md:m-0" src="/sponsors/ksei.png" width={2000} height={2000} alt=""/>

      
      </div>
    </div>
  </>
  );
}