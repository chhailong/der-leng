import React from 'react'
import {useState ,useEffect} from 'react' ; 
import {Link} from "react-router-dom" ;
// import Card from './Card'
// import "../CSS/card.css" ; 
export default function Destination() {
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

  return (
    <>
    <section className='container py-5 mt-5 '>
        <h1 className='text-center'> Destinations</h1>
       
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {
            places.length === 0? <h2 className='text-center text-warning'>Loading.......</h2>:
            places.map((item)=>{
              return(
                <div className="col">
                <Link className='nav-link' to={"/places-details/" +item.id} key={item.id}>
                <div className="card h-100">
                  <img src={item.image1} className="card-img-top" style={{ height:"280px"}} alt="..."/>
                  <div className="card-body">
    
                    <h5 className="card-title text-truncate" style={{maxWidth:"100%"}}>{item.title}</h5>
                    <p className="card-text text-truncate " style={{maxWidth:"100%"}} >{item.description}</p>
                
                  </div>
                </div>
              </Link>
              </div>

              )
              

            })
          }


          </div>
        </section>

    </>
 
  )
}
