import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Card from './Card';
import { data } from '../../assets/ServiceCards/CardsData';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);
  const cardContainerRef = useRef(null);
  const cardWidth = 320;
  const margin = 16;

  useEffect(() => {
    const maxScrollWidth = (data.length * (cardWidth + margin)) - window.innerWidth+900;

   
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: `+=${maxScrollWidth}`,
        scrub: 1, 
        pin: true, 
        anticipatePin: 1,
      },
    });

    tl.to(cardContainerRef.current, {
      x: -maxScrollWidth,
      ease: 'none', 
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} id="servicesSection" className="z-[4] w-full h-full mb-48 relative pt-32">
      <div>
      <h1 className="sticky top-[18vh] text-[10em] text-[#dcefd8] md:mx-[10rem] font-medium">Services</h1>
      </div>
      <div
        ref={cardContainerRef}
        className="flex flex-col md:flex-row gap-4 md:space-x-4"
      >
        {data.map((el, index) => (
          <div className="md:flex-shrink-0 md:translate-x-[800px]">
            <Card title={el.title} description={el.description} icon={el.icon} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
