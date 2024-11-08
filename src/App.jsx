import React from 'react'
import Home from './components/Home/Home'
import Services from './components/Service/Services'
import TrackRecord from './components/TrackRecord/TrackRecord'
import WhyUs from './components/WhyUs/WhyUs'
import Customers from './components/Customers/Customers'
import Feedback from './components/Feedback/Feedback'
import Navbar from './components/Navbar/Navbar'
import Resources from './components/Resources/Resources'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="w-full relative h-full text-[8px] sm:text-[10px] md:text-[12px] lg:text-[16px]">
      {/* <div className='w-[full] h-[100vw] z-10  fixed top-0 bottom-0 right-0 left-0 flex flex-col  items-center opacity-85  bg-black'> 
        <div className='text-[1.25em] font-medium leading-[1.4] absolute top-[40%] text-[#dcefd8]'>
                <em>Aedifico </em>
                <span className='opacity-40'>
                    - from Latin, meaning to <em>build, create, establish, </em>
                    and <em>improve. </em>
                </span>
          </div>
      </div> */}
      <Navbar/>
      <Home/>
      <Services/>
     <TrackRecord/> 
     <WhyUs/>    
     <Customers/>
     <Feedback/>
     <Resources/>
     <Footer/>
    </div>
  )
}

export default App