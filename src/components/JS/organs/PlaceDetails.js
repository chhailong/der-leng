import React from 'react'
import { Fade , Slide} from 'react-awesome-reveal'

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function PlaceDetails() {
    const [places ,setPlaces ] = useState(null)  ; 
    const {id} = useParams() ;

    const details = async ()=> {
     
      try{
        const response = await fetch("http://localhost:8000/api/places/"+id) ; 
        const result = await response.json() ; 
        setPlaces(result.data) ; 
        console.log(result.data); 
  
      }catch(err){
        console.log(err) ; 
      
      }
  
    }
  
  
    useEffect(() => {
      details() ; 
    } ,[]);
  return (
    <>
    <div className="container py-5 mt-5">
        {
    
            places && (
              
                <div class="lightbox">
                <div class="row">
                    <div class="col-lg-6 ">
                    <img
                        src={places.image1}
                       
                        alt="image1"
                        style={{height:"300px"}}
                        class="w-100 mb-2 mb-md-4 shadow-1-strong rounded"
                    />
            
                    <img
                        src={places.image2}
                     
                        alt="image2"
                        class="w-100 shadow-1-strong rounded "
                    />
                    </div>
                    <div class="col-lg-6">
                    <img
                        src={places.image3}
                        alt=""
                        class="w-100 shadow-1-strong rounded"
                    />
                    </div>
                </div>
                <Slide>
                  <div className="col-lg-6 py-5">
                      <h1 className='fw-bold'>{places.title}</h1>
                      <p>{places.description}</p>
                      <p className='fw-bold'>Live in {places.province.name}</p>
                  </div>

                </Slide>

                <div className="col-lg-6">
                    <div>
                    <iframe src={places.location} style={{width:"600px" ,height:"450px" , border:0}}   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            
                    </div>
               
                </div>
                </div>


            )
        }
   
    </div>
    </>


  )
}
