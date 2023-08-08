import React from 'react' ; 
import { Fade } from 'react-awesome-reveal';
// import "../../CSS/card.css"  ; 
import { Link } from 'react-router-dom';

export default function BestService() {
  return (
    <>
    <section className='container text-center py-5'>
        <Fade>
            <h1>Our Service</h1>
        </Fade>
        <div className="row d-flex flex-wrap">
            <div className="col-sm-4">
            <Link to="#" className='nav-link'>
            <div class="card "style={{ width: "330px", height: "300px"}}>
                <div className="card-top">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Cambodia_provinces_en.svg/800px-Cambodia_provinces_en.svg.png" class="" alt="..."style={{ width: "330px" , height: "200px"}}/>
                </div>
                <div class="card-body text-center">
                    <h5 class="card-title ">All Province</h5>
                    <p class="card-text">Find provinces that you want to go</p>
                </div>
                </div>
            </Link>
            </div>
            <div className="col-sm-4">
            <Link to="/destination" className='nav-link'>
            <div class="card "style={{ width: "330px", height: "300px"}}>
                <div className="card-top">
                    <img src="https://media-cdn.tripadvisor.com/media/photo-s/17/67/d2/db/swimming-pool.jpg" class="" alt="..."style={{ width: "330px" , height: "200px"}}/>
                </div>
                <div class="card-body text-center">
                    <h5 class="card-title ">Destination</h5>
                    <p class="card-text">Find destination that you want to go</p>
                </div>
                </div>
            </Link>

            </div>
            <div className="col-sm-4">
            <Link to="#" className='nav-link'>
            <div class="card "style={{ width: "330px", height: "300px"}}>
                <div className="card-top">
                    <img src="https://a.cdn-hotels.com/gdcs/production64/d453/ceedfa17-7643-46d0-8289-544c8dd7f12e.jpg" class="" alt="..."style={{ width: "330px" , height: "200px"}}/>
                </div>
                <div class="card-body text-center">
                    <h5 class="card-title ">Food</h5>
                    <p class="card-text">Popular food in Cambodia</p>
                </div>
                </div>
            </Link>

          

            </div>
    
            
        </div>
        


    </section>


    </>
   
  )
}
