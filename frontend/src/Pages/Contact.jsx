import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import { Button } from "@material-tailwind/react";
import NewsletterBox from '../components/NewsletterBox';

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2x pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>

      </div>
      <div className='my-10 flex flex-col ml-34 md:flex-row gap-18 mb-28'>
        <img className='w-full md:max-w-[480px] ' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6  pl-20'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>544748 Willms Station <br /> Suite 340,washington,USA</p>
          <p className='text-gray-500'>Tel: (415) 555-666 <br /> Email:adim@gmail.com</p>
          <p className='font-semibold text-1xl text-gray-600'>Careers at Forever</p>
          <p className='text-gray-600'>Learn more about us and job openings.</p>
          <Button className='border ml-6 hover:bg-black hover:text-white' variant="text">Explore Jobs</Button>

        </div>

      </div>
      <NewsletterBox/>
      
    </div>
  )
}

export default Contact
