import React, { useState } from 'react'
import Card from './Card'
import data from '../../assets/CompaniesData/Data';
import {motion} from "framer-motion";

const Customers = () => {
  const [toggle,setToggle]=useState(false);
  const [hover,setHover]=useState(false);
  return (
    <div className='p-[1em] w-full mb-32 text-[#dcefd8] relative'>
    <div className='rounded-[24px] w-full  p-[1em] bg-[#dcefd8] flex flex-wrap gap-4 '>
            <div  className='cursor-pointer w-[33%] h-[14em] border-[#cadcc7] border-solid rounded-[16px] border-2 flex flex-col justify-center items-center'>
                <h1 className='text-[#43554b] text-[2.63em]  text-center font-medium  flex flex-col justify-center items-center'>Who trusts us?</h1>
            </div>
            {
              data.map((el,index)=>{
                if(index%2)
                return <Card animation={toggle} alternate={true} hidden={el.hidden}/>
                else return <Card animation={toggle} alternate={false} hidden={el.hidden}/>
              })
            }
            
        </div>
        <div onClick={()=>{setToggle((prev)=>!prev)}} onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}} className='absolute bottom-0 cursor-pointer right-[0px] p-[1.2em] flex justify-center items-center gap-2 rounded-[24px]   bg-[#262d29]'>
        <motion.div className='w-[1.5em] text-[#97d28b]'
            animate={{
                rotate:hover?"90deg":"0",
            }}
            
            transition={{duration:0.6}}
        >
        <div  className='text-[#97d28b] w-full h-full '>
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"
            
        ><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>

        </div>
        </motion.div>
        <div >
          <h1 className='text-[1.25em] text-[#dcefd8] opacity-80 '>Load More</h1>
        </div>
        </div>
</div>
  )
}

export default Customers