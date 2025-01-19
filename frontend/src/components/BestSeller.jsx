import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext.jsx'
import Title from './Title';
import Productitem from './Productitem';

const BestSeller = () => {

    const {products } = useContext(ShopContext);
    const [bestSeller,setBestSeller] =useState([])
    useEffect(()=>{
        const bestProdect = products.filter((item)=>(item.bestseller))
        setBestSeller(bestProdect.slice(0,6))

    },[products])

  return (
    <div className='my-10'>
       
        <div className=' p-2  bg-[#ffdad6] w-100% h-50%'>
        <div className='text-center text-3xl py-8'>
            <Title text1={'BEST'} text2={'SELLERS'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis veniam dolor praesentium possimus, delectus esse eveniet culpa consectetur, nam adipisci tempore ex unde earum, autem iste nostrum itaque qui obcaecati.
            </p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 gap-y-6 '>
            {
                bestSeller.map((item,index)=>(
                    <Productitem key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>
                ))
            }

        </div>

        </div>
      
      
    </div>
  )
}

export default BestSeller
