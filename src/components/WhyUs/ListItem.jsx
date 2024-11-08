import React, { useState } from 'react'
import plus from "../../assets/plus.svg"
import {motion} from "framer-motion"
const ListItem = ({title,description}) => {
    const [open,setOpen]=useState(false);
    console.log(open);
  return (
    <div onClick={()=>{setOpen(!open)}}  className='w-full cursor-pointer flex justify-between relative pt-[3em] pb-[2.5em]'>
        <div className='w-full h-[1px]  bg-[#97d28b] opacity-10 absolute top-0 '></div>
        <div className='flex-1'>
            <h1 style={{color:open&&"#97d28b"}}  className='text-[#dcefd8] hover:opacity-40 text-[2.63em] font-medium'>{title}</h1>
            <motion.div className='w-[277px] max-h-0 overflow-hidden '
                initial={{maxHeight:'0'}}
                animate={{maxHeight:open?'10em':'0'}}
                transition={{duration:0.6,ease:'easeInOut'}}
            >
                <h1 className='text-[18px] font-normal opacity-40 text-[#dcefd8] leading-[1.4] '>
                {description}
                </h1>
            </motion.div>
        </div>
        <motion.div className='w-[3.5em]   absolute right-0 top-[3.3em] text-[#97d28b]'
            animate={{
                rotate:open?"135deg":"0",
                opacity:open?"0.3":'1'
            }}
            transition={{duration:0.6}}
        >
        <div className='text-[#97d28b] w-full h-full'>
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"
            
        ><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>

        </div>
        </motion.div>

    </div>
  )
}

export default ListItem