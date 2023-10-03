"use client"

import Cart from "@/components/Cart";
import DialogDemo from "@/components/Newcontactbutton";

import Image from "next/image";

import { useState } from "react";
export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);


    let opendilog=()=>{

        console.log("onclick is working properly")
        setIsModalOpen(!isModalOpen)
    }
    

    let handelsavecontact=()=>{
        
    }
  return (
    <main className="bg-primary w-screen min-h-screen border-solid border-2 border-primary">
      <div className=" w-3/4 m-auto relative h-full  ">
        <div className="flex justify-between  mt-24">
          <div className="">
            <h1 className="text-3xl font-bold">Contacts</h1>
            <p className="text-lg text-text-color">Lorem ipsum dolor sit amet</p>
          </div>
       
         <DialogDemo/>
         
         
        </div>
        <div>
        <Cart/>
        </div>
        
        

      </div>
    </main>
  );
}
