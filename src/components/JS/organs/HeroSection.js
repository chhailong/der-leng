import React from 'react';
import "../../CSS/HeroSection.css" ; 
import video1 from "../../videos/video-1.mp4"

function HeroSection() {
  return (
    <section className='hero-container py-5' >
      <video src={video1} autoPlay loop muted  style={{width:"100%" , height:"100%"}}/>
      <div className="postion-relative">
          <div className="position-absolute top-50 start-50 translate-middle">
            <h1 className='text-adventure w-auto'  >ADVENTURE AWAITS</h1>
            

          </div>
      </div>
      

    </section>
  );
}

export default HeroSection;