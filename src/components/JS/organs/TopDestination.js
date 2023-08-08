import React from 'react'
import "../../CSS/home.css"
import Card from "../Card"
import Slider from 'react-slick';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import { useState , useEffect } from 'react' ;


export default function TopDestination() {
  const [places ,setPlaces ] = useState([])  ; 

  const GETPLACE = async ()=> {
   
    try{
      const response = await fetch("http://localhost:8000/api/places") ; 
      const result = await response.json() ; 
      setPlaces(result.data) ; 
      console.log(result.data); 

    }catch(err){
      console.log(err) ; 
    
    }

  }


  useEffect(() => {
    GETPLACE() ; 
  } ,[]);

  const  settings = {
    dots: true,
    infinite: false ,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
    <section className='text-center py-5'>
      <Fade>
        <h1>Top Destinations</h1>
      </Fade>
     

      <div className='justify-center container'>
        <Slider {...settings}>
        {
          places.length === 0? <h2 className='text-center text-warning'>Loading.......</h2>:
          places.map((item)=>{
            return(
                <Link className='nav-link' to={"/places-details/" +item.id} key={item.id}>
                  <Card   image1 = {item.image1}   title= {item.title} description= {item.description}  />
                </Link>
            )
          })
        }
        </Slider>
        
      </div>
     
    </section>

    </>

  )
}
