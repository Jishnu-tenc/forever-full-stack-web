import React from 'react'
import { Button, ButtonGroup } from '@material-tailwind/react'
import {assets} from '../assets/admin_assets/assets.js'

const Navbar = ({setToken}) => {
  return (
    <div className=' flex items-center py-2 px-[4%] justify-between'>
        <img className='w-[max(10%,80px)]' src={assets.logo} alt="" />
        

        <Button onClick={()=>setToken('')} size="sm" color='white'  className="flex items-center gap-3  text-blac border-black border-2 rounded-full">
        Logout
      </Button>

        
      
    </div>
  )
}

export default Navbar
