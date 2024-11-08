import React from 'react'
import Card from './Card'

const TrackRecord = () => {
  return (
    <div className='p-[1em] w-full mb-28 text-[#dcefd8]'>
        <div className='rounded-[24px] w-full h-full flex flex-col justify-center items-center relative pt-[6.5em] pb-28  bg-[#dcefd8]'>
            <div className='w-[25%] h-[5.5em] flex flex-col items-center justify-center rounded-bl-[24px] rounded-br-[24px]  bg-[#262d29] absolute top-0 left-[10em]'>
                <h1 className='opacity-[0.6] text-[1.5em] font-medium '>Track Record</h1>
            </div>
            <div className='w-[70%] flex gap-4 '>
                <div className='flex flex-col w-1/3 gap-4 justify-start '>
                  <Card bgColor="bg-white" textColor="text-[#43554b]" height="h-[22em]" data="10K" label="Businesses analyzed" />
                  <Card bgColor="bg-[#97d28b]" textColor="text-[#43554b]" height="h-[19em]" data="100+" label="Markets studied" />

                </div>
                <div className='flex flex-col w-1/3 gap-4 justify-start pt-20 '>
                  <Card bgColor='bg-[#262d29]' textColor='text-[#dcefd8]' height='h-[23em]' data='$50M+' label='Raised'/>
                  <Card bgColor="bg-white" textColor="text-[#43554b]" height="h-[19em]" data='700+' label='Completed projects'/>
                </div>
                <div className='flex flex-col w-1/3 gap-4 justify-start '>
                <Card bgColor="bg-[#97d28b]" textColor="text-[#43554b]" height="h-[19em]" data="500+" label="Clients" />
                <Card bgColor="bg-[#262d29]" textColor="text-[#97d28b]" height="h-[19em]" data="100+" label="Average customer rating" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default TrackRecord