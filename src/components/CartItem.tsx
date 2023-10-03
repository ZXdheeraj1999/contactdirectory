"use client"
import React from 'react'
import { Card } from "@prisma/client";
import MenubarDemo from './Menu';
const CartItem:React.FC<Card> = ({id,name,phone,title,email,company}) => {
  return (
    <div className='bg-[#f6f6f8]   rounded-lg shadow-lg flex items-center px-[20px] py-[30px] flex-col relative overflow-hidden'>
      <div className='w-[80px] h-[80px] bg-[#35C691] rounded-lg text-white font-extrabold text-lg tracking-widest flex justify-center items-center'>ZX</div>  
      {/* <img src={"menu.svg"} alt="" className='w-5 absolute right-3'/> */}
      <h1 className='mt-3 font-bold text-md'>{name}</h1>
      <p className='text-sm mt-3'>{title}</p>
      <p className='text-sm text-[#6418C3] font-bold'>{company}</p>
      <p className='flex mt-5 text-sm'><img className='mr-2' src={"phone.svg"} alt="" />{phone}</p>
      <p className='flex mt-5 text-sm'><img className='mr-2' src={"email.svg"} alt="" />{email}</p>
      <MenubarDemo id={id} name={name} phone={phone} title={title} email={email} company={company}/>
      
    </div>
  )
}

export default CartItem
