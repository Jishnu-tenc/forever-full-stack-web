import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 ml-[-3px] text-sm'>
            <div>
                <img className='mb-5 w-32' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-700'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, vero perspiciatis quisquam cumque numquam autem. Sapiente error porro eaque molestias, vel explicabo, odio laudantium itaque, cum debitis fugit saepe ducimus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur reiciendis impedit explicabo, maiores laborum saepe possimus quasi dolore atque eius exercitationem accusamus blanditiis eligendi quibusdam reprehenderit corporis magni inventore eos.
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>

                </ul>
            </div>
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+1-1212-456-7800</li>
                    <li>Forever//shop//@2024.com</li>

                </ul>
            </div>

        </div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024@ fover.com - All Right Reserved.</p>
        <div>

        </div>
      
    </div>
  )
}

export default Footer
