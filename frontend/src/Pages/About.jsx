import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import { CarouselDefault } from '../components/Carousel'
import NewsletterBox from '../components/NewsletterBox'



const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>

      </div> 
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <CarouselDefault/>
         <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt distinctio possimus cupiditate, dolorem, harum ratione sed saepe quod beatae debitis dolor nihil expedita et quidem aspernatur accusantium quibusdam, modi alias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste iusto doloribus neque et ad saepe repellendus, cumque aliquam minima rem fugiat nulla veritatis dignissimos, nostrum unde quas. Maxime, enim dolor.</p>
        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure mollitia labore rerum rem reiciendis ad earum repellat, sed est, inventore doloremque dolor praesentium enim possimus quasi eius excepturi fugit veniam? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam cum ipsum dicta nulla facere obcaecati ullam aliquid animi, optio alias, fuga inventore molestias voluptas in atque? Maxime dolorum eos atque.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium non molestiae sit nam possimus amet provident obcaecati tempore eius neque, est cupiditate tempora eos, fugit tenetur dolore, culpa incidunt quaerat. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit minus laborum quas aliquid maxime et corporis, cupiditate eum a dicta dignissimos molestias neque dolorum accusamus voluptatibus ducimus delectus non atque.</p>
        

        </div>

      </div>
      <div className='text-2xl py-4 text-center'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>

      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nemo id explicabo in culpa fuga deserunt excepturi sit vero iste placeat ab, quas alias dolore possimus eligendi odit et numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet numquam fugiat in blanditiis laboriosam officiis inventore esse maxime delectus minima aliquam vero voluptatibus, debitis nam nisi expedita qui modi ad.</p>

        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nemo id explicabo in culpa fuga deserunt excepturi sit vero iste placeat ab, quas alias dolore possimus eligendi odit et numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet numquam fugiat in blanditiis laboriosam officiis inventore esse maxime delectus minima aliquam vero voluptatibus, debitis nam nisi expedita qui modi ad.</p>

        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, reprehenderit voluptate velit illum, rerum expedita voluptatibus suscipit quisquam magni amet aperiam sequi quo repellendus vero perspiciatis, iste quod atque assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eveniet atque, totam voluptatum quae, odit reiciendis non deleniti fugiat cupiditate unde quia autem ipsam libero nihil accusantium ipsum beatae delectus.</p>

        </div>

      </div>
      <NewsletterBox/>
      
    </div>
  )
}

export default About
