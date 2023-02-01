
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Footer from '../Footer';

function Kampot() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
  return (
    <>
    <br />
        <div className="image-kampot">
            <img className="image-img-fluid" src="https://khmerrealestate.com.kh/images/news/local_news/Kampot-disply.jpg" alt="background.." />
        </div>
        <br />
        <h1> Welcome to Kampot province </h1>
        <br />


        <div className="container">
            <div class="card-province" >
                <img src="https://bizkhmer.com/storage/photos/33/Bokor.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">ភ្នំបូកគោ</h5>
                    <p class="card-text">ឧទ្យានជាតិព្រះមុនីវង្សភ្នំបូកគោ ដែលត្រូវបានគេស្គាល់ភាគច្រើនថា ឧទ្យានជាតិបូកគោ ស្ថិតនៅក្នុងស្រុកទឹកឈូ ខេត្តកំពត..</p>
                    <Link to= "/provinces/kampot/bokor" onClick={handleClick}><a href="#" class="btn btn-primary">Details</a></Link>
                    
                    <br />
                    <p className="star">⭐⭐⭐⭐⭐</p>
                </div>
                </div>
                <div class="card-province" >
                <img src="https://khmerrealestate.com.kh/images/news/local_news/Kampot-disply.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    <br />
                    <p className="star">⭐⭐⭐⭐</p>
                </div>
                </div>
                <div class="card-province" >
                <img src="https://khmerrealestate.com.kh/images/news/local_news/Kampot-disply.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    <br />
                    <p className="star">⭐⭐⭐</p>
                </div>
                </div>
                <div class="card-province" >
                <img src="https://khmerrealestate.com.kh/images/news/local_news/Kampot-disply.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    <br />
                    <p className="star">⭐⭐⭐⭐</p>
                </div>
                </div>
                <div class="card-province" >
                <img src="https://khmerrealestate.com.kh/images/news/local_news/Kampot-disply.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    <br />
                    <p className="star">⭐⭐⭐</p>
                </div>
                </div>
                <div class="card-province" >
                <img src="https://khmerrealestate.com.kh/images/news/local_news/Kampot-disply.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    <br />
                    <p className="star">⭐⭐⭐⭐⭐</p>
                </div>
                </div>
        
        </div>
        <Footer/>
    </>
  )
}
export default Kampot ; 
