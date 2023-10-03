"use client"


import { useGetCardsQuery } from '@/redux/contactsSlice';
import React, { useEffect } from 'react'
import CartItem from './CartItem';

const Cart = () => {
    const { data, isLoading, isError, error } = useGetCardsQuery();

  return (
    <div className='grid grid-cols-5 gap-4 mt-4'>
      {
        data?.map((el)=><CartItem key={el.id} {...el}/>)
      }
      
    </div>
  )
}

export default Cart
