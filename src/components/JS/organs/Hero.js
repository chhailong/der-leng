import React from 'react'
import imgHero from  "../../images/travel4-removebg-preview.png"
import bgHero from  "../../images/HeroVector.png"
import imgPlus from "../../images/plusGroup.png"
import '../../CSS/home.css' ;
import { Slide ,Fade } from 'react-awesome-reveal';

export default function Hero() {
  return (
    <>
    <section className='justify-content-end overflow-hidden w-100' >
       
           <img className="img-fluid  float-end img-bg"  src={bgHero} alt="background shape" />
         <div className='text-hero' >
            <div className='text-danger  fw-bold'>
            BEST DESITNATIONS AROUND THE CAMBODIA
            </div>
            <Fade >
                <h1 className='text-title' > Welcome to 
                    <br />
                    <span className=" text-warning">  Travel, enjoy and live a new and full life.</span>
                  
                </h1>
            </Fade>

            <Slide direction="right" >
                <img src={imgHero} className='img-hero img-fluid rounded ' alt="hero scroll image" />    
            </Slide>

            
         </div>
         <div>
          <img className=' m-5 ' src={imgPlus} alt="plus image " />
         </div>

        
    </section>

  

    </>
  
  )
}
