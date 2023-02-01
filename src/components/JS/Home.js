

import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import background from "../images/background.png" ; 
import logo1 from "../images/logo1.png"; 
import "../CSS/home.css" ; 
import Footer from "../JS/Footer";
 
function Home () {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <>
            <div className="image-page">
                <img className="image-img-fluid" src={background} alt="background.." />
            </div>
            <div className="container">
            <div class="row">
                    <div class="col4">
                        <h2>DER LENG</h2>
                        <br />
                        <p>DER LENG is the website that help you to get your destination in Cambodia </p>


                    </div>
                    <div className="col4">
                        <Link to ="/allprovinces" className='all-provinces' onClick={handleClick}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Cambodia_provinces_en.svg/800px-Cambodia_provinces_en.svg.png" class="card-img-top " alt="pic"/>
                            <div className="img-text">All Province of Cambodia</div>
                        </Link>
                    </div>
                    <div className="col4">
                        <Link to ="#" className='all-provinces' onClick={handleClick}>
                            <img src="https://www.planetware.com/photos-large/CAM/cambodia-angkor-wat.jpg" class="card-img-top " alt="pic"/>
                             <div className="img-text">Destination</div>
                        </Link>
                    </div>
                    <div className="col4">
                        <Link to ="#" className='all-provinces' onClick={handleClick}>
                            <img src="https://a.cdn-hotels.com/gdcs/production64/d453/ceedfa17-7643-46d0-8289-544c8dd7f12e.jpg" class="card-img-top " alt="pic"/>
                             <div className="img-text"> Food in Cambodia</div>
                        </Link>
                    </div>
                    <br />


                </div>
                <div className="tour">
                    <h3>Tending Destination</h3>
                   
                    <p>We list down the most popular destination here.</p>
                </div>

            </div>

                <div className="container">
                    <Link to ="/provinces/kampot/bokor" className='all-provinces' onClick={handleClick} >
                    <div class="card" >
                        <img src="https://bizkhmer.com/storage/photos/33/Bokor.jpg" class="card-img-top " alt="pic1"/>
                        <div class="card-body">
                        <h4 class="card-title">ភ្នំបូកគោ</h4>
                            <p class="card-text">ឧទ្យានជាតិព្រះមុនីវង្សភ្នំបូកគោ ដែលត្រូវបានគេស្គាល់ភាគច្រើនថា ឧទ្យានជាតិបូកគោ ស្ថិតនៅក្នុងស្រុកទឹកឈូ ខេត្តកំពត...</p>
                        </div>
                    </div>

                    </Link>
                    <Link to ="/provinces/kampot/bokor" className='all-provinces' onClick={handleClick} >
                    <div class="card" >
                        <img src="https://bizkhmer.com/storage/photos/33/Bokor.jpg" class="card-img-top " alt="pic1"/>
                        <div class="card-body">
                        <h4 class="card-title">ភ្នំបូកគោ</h4>
                            <p class="card-text">ឧទ្យានជាតិព្រះមុនីវង្សភ្នំបូកគោ ដែលត្រូវបានគេស្គាល់ភាគច្រើនថា ឧទ្យានជាតិបូកគោ ស្ថិតនៅក្នុងស្រុកទឹកឈូ ខេត្តកំពត...</p>
                        </div>
                    </div>

                    </Link>
                    <Link to ="/provinces/kampot/bokor" className='all-provinces' onClick={handleClick} >
                    <div class="card" >
                        <img src="https://bizkhmer.com/storage/photos/33/Bokor.jpg" class="card-img-top " alt="pic1"/>
                        <div class="card-body">
                        <h4 class="card-title">ភ្នំបូកគោ</h4>
                            <p class="card-text">ឧទ្យានជាតិព្រះមុនីវង្សភ្នំបូកគោ ដែលត្រូវបានគេស្គាល់ភាគច្រើនថា ឧទ្យានជាតិបូកគោ ស្ថិតនៅក្នុងស្រុកទឹកឈូ ខេត្តកំពត...</p>
                        </div>
                    </div>

                    </Link>
                    <Link to ="/provinces/kampot/bokor" className='all-provinces' onClick={handleClick} >
                    <div class="card" >
                        <img src="https://bizkhmer.com/storage/photos/33/Bokor.jpg" class="card-img-top " alt="pic1"/>
                        <div class="card-body">
                        <h4 class="card-title">ភ្នំបូកគោ</h4>
                            <p class="card-text">ឧទ្យានជាតិព្រះមុនីវង្សភ្នំបូកគោ ដែលត្រូវបានគេស្គាល់ភាគច្រើនថា ឧទ្យានជាតិបូកគោ ស្ថិតនៅក្នុងស្រុកទឹកឈូ ខេត្តកំពត...</p>
                        </div>
                    </div>
                    </Link>
                    <br />
                    <br />
                    <div className="tour">
                    <h3> New destination</h3>
                   
                    <p>New destination we just update and new</p>
                    </div>

                </div>
                <div className="container">
                <div class="row">

                    <div className="col3">
                        <Link to ="#" className='all-provinces' onClick={handleClick}>
                            <img src="https://lh3.googleusercontent.com/p/AF1QipOvdGSYe2N5kmgAKGX6Q12CbARVEVcnKl1ASi05=s1360-w1360-h1020" class="card-img-top " alt="pic"/>
                             <div className="img-text"><h4>ឧទ្យានដងព្រែក</h4></div>
                        </Link>
                    </div>
                    <div className="col3">
                        <Link to ="/provinces/kampot/bokor" className='all-provinces' onClick={handleClick}>
                            <img src="https://www.khmerplaces.com/storage/posts/May2019/9YiLU7GbM840w1h4zkkn.jpg" class="card-img-top " alt="pic"/>
                             <div className="img-text"><h4>ភ្នំបូកគោ</h4></div>
                        </Link>
                    </div>
                    <div className="col3">
                        <Link to ="#" className='all-provinces' onClick={handleClick}>
                            <img src="https://demo.cambodia.gov.kh/wp-content/uploads/2021/02/%E1%9E%80%E1%9F%86%E1%9E%96%E1%9E%8F-%E1%9E%91%E1%9E%B9%E1%9E%80%E1%9E%92%E1%9F%92%E1%9E%9B%E1%9E%B6%E1%9E%80%E1%9F%8B%E1%9E%87%E1%9F%92%E1%9E%9A%E1%9F%84%E1%9F%87%E1%9E%AA%E1%9E%98%E1%9F%89%E1%9E%B6%E1%9E%9B%E1%9F%8B2.jpg" class="card-img-top " alt="pic"/>
                             <div className="img-text"><h4>ទឹកធ្លាក់ឪម៉ាល</h4></div>
                        </Link>

                    </div>
                    <div className="col3">
                        <Link to ="#" className='all-provinces' onClick={handleClick}>
                            <img src="https://www.guidetrip.pro/guidetrip.info/asset/img/gallery_resort/5c38401dc9c5d.jpg" class="card-img-top " alt="pic"/>
                             <div className="img-text"><h4>តាតៃ កោះអណ្ដែត</h4></div>
                        </Link>

                    </div>
                    <br />


                </div>


            </div>
            <div className="container">
                <div className="others">
                    
                    <div className="row">

                        <div className="col6">
                            <img src="https://q-xx.bstatic.com/xdata/images/hotel/840x460/346672532.jpg?k=8cf542b653ba316231b5cae068b60470b3f507ba87c3963d64d65b6b277f7c02&o=" class="card-img-top " alt="pic"/>
                             <div className="img-text"><h4>Place To Sleep</h4></div>
                            
                        </div>
                        <div className="col6">
                            <img src="https://amber-kampot.com/wp-content/uploads/2020/12/ingredients4.jpg" class="card-img-top " alt="pic"/>
                             <div className="img-text"><h4>Food</h4></div>

                        </div>
                    </div>
                    <br />
                    <br />
                </div>
            </div>
            <Footer/>
        </>
        
    )

}
export default Home ; 



