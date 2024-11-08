import React from 'react'
import ListItem from './ListItem'
import { items } from '../../assets/WhyUs/listItems'

const WhyUs = () => {
  return (
    <div className='w-full  flex flex-col justify-start pt-[5em] mb-48 items-center relative'>
       <div className="w-[78%] flex ">
        <div className='w-[50%]'>
          <h1 className="sticky top-[4em] font-normal opacity-[0.7] text-[#dcefd8]">Why us?</h1>
        </div>
        <div className='w-[50%] flex flex-col items-center justify-center'>
            {
                items.map((el)=>{
                    return(
                        <ListItem title={el.title} description={el.description}/>
                    )
                })
            }
        </div>
        </div>
        <div className="absolute w-full h-full z-0 pointer-events-none ">
        <img src="https://assets-global.website-files.com/63793925c7db23ce040b0824/64ef089c7513babb5e53bc6c_Meeesh2.jpg"
          className="w-full h-[140%] absolute left-[-63%] -bottom-full rotate-[-24deg] opacity-[0.6]"
        />
      </div>
    </div>
  )
}

export default WhyUs