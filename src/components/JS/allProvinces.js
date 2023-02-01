
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

import background from "../images/background.png" ; 
function Provinces() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return(
        <>
        <div className="map-Cambodia">
            <img className="logomap" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Cambodia_provinces_en.svg/1200px-Cambodia_provinces_en.svg.png" alt="map" />
        </div>
        <br />

        <div className="container">
            <div><h1>All Province in Cambodia</h1></div>
            <br />

                <div class="position-relative">
                <div class="position-absolute top-0 start-0">
                    <Link to ="/provinces/kampot" className='logo-provinces' >
                        <img  src ="https://www.whereandwhen.net/site/images/illustration/oualler/-kampot.jpg" className ="rounded float-start" alt="..."/>
                        <div className="img-text"><h3>KAMPOT</h3></div>
                    </Link>
                    <Link to ="/provinces/siemreap" className='logo-provinces' >
                        <img  src ="https://www.angkorparadise.net/userfiles/pub-street.jpg" className ="rounded float-start" alt="..."/>
                        <div className="img-text"><h3>SIEM REAP</h3></div>
                    </Link>
                    <Link to ="/provinces/mondulkiri" className='logo-provinces' >
                        <img  src ="https://www.gdtp.gov.kh/wp-content/uploads/2021/01/mondulkiri-province-1024x751.jpg" className ="rounded float-start" alt="..."/>
                        <div className="img-text"><h3>MUNDULKIRI</h3></div>
                    </Link>
                    
                    <Link to ="/provinces/kohkong" className='logo-provinces' >
                        <img  src ="https://www.khmerplaces.com/storage/provinces/September2020/doBwrCTTiseg3SMpUbsk.jpg" className ="rounded float-start" alt="..."/>
                        <div className="img-text"><h3>KOH KONG</h3></div>
                    </Link>
                    <Link to ="/provinces/sihanoukville" className='logo-provinces' >
                        <img  src ="https://pix10.agoda.net/geo/city/17331/1_17331_02.jpg?ca=6&ce=1&s=1920x822" className ="rounded float-start" alt="..."/>
                        <div className="img-text"><h3>SIHANOUKVILLE</h3></div>
                    </Link>
                  
                    <Link to ="/provinces/kampot" className='logo-provinces' >
                        <img  src ="https://cdn.fazwaz.com/nw/SxdjFhKACogO9Px44yNfFzfm9QE/520x350/region/191/kampong-cham.jpg" className ="rounded float-start" alt="..."/>
                        <div className="img-text"><h3>KOMPONG CHAM</h3></div>
                    </Link>
                    <Link to ="/provinces/kampot" className='logo-provinces' >
                        <img  src ="http://4.bp.blogspot.com/-E9euFtvT1Yo/VqM6waVp1zI/AAAAAAAAAoU/9AEQStub5n0/s1600/hqdefault.jpg" className ="rounded float-start" alt="..."/>
                        <div className="img-text"><h3>KAMPOT</h3></div>
                    </Link>
                    <Link to ="/provinces/kampot" className='logo-provinces' >
                        <img  src ="http://4.bp.blogspot.com/-E9euFtvT1Yo/VqM6waVp1zI/AAAAAAAAAoU/9AEQStub5n0/s1600/hqdefault.jpg" className ="rounded float-start" alt="..."/>
                        <div className="img-text"><h3>KAMPOT</h3></div>
                    </Link>
                    <Link to ="/provinces/kampot" className='logo-provinces' >
                        <img  src ="http://4.bp.blogspot.com/-E9euFtvT1Yo/VqM6waVp1zI/AAAAAAAAAoU/9AEQStub5n0/s1600/hqdefault.jpg" className ="rounded float-start" alt="..."/>
                        <div className="img-text"><h3>KAMPOT</h3></div>
                    </Link>
                    <Link to ="/provinces/kampot" className='logo-provinces' >
                        <img  src ="http://4.bp.blogspot.com/-E9euFtvT1Yo/VqM6waVp1zI/AAAAAAAAAoU/9AEQStub5n0/s1600/hqdefault.jpg" className ="rounded float-start" alt="..."/>
                        <div className="img-text"><h3>KAMPOT</h3></div>
                    </Link>
                    <Link to ="/provinces/kampot" className='logo-provinces' >
                        <img  src ="http://4.bp.blogspot.com/-E9euFtvT1Yo/VqM6waVp1zI/AAAAAAAAAoU/9AEQStub5n0/s1600/hqdefault.jpg" className ="rounded float-start" alt="..."/>
                        <div className="img-text"><h3>KAMPOT</h3></div>
                    </Link>
                    <Link to ="/provinces/kampot" className='logo-provinces' >
                        <img  src ="http://4.bp.blogspot.com/-E9euFtvT1Yo/VqM6waVp1zI/AAAAAAAAAoU/9AEQStub5n0/s1600/hqdefault.jpg" className ="rounded float-start" alt="..."/>
                        <div className="img-text"><h3>KAMPOT</h3></div>
                    </Link>
                    <Link to ="/provinces/kampot" className='logo-provinces' >
                        <img  src ="http://4.bp.blogspot.com/-E9euFtvT1Yo/VqM6waVp1zI/AAAAAAAAAoU/9AEQStub5n0/s1600/hqdefault.jpg" className ="rounded float-start" alt="..."/>
                        <div className="img-text"><h3>KAMPOT</h3></div>
                    </Link>
                    <Link to ="/provinces/kampot" className='logo-provinces' >
                        <img  src ="http://4.bp.blogspot.com/-E9euFtvT1Yo/VqM6waVp1zI/AAAAAAAAAoU/9AEQStub5n0/s1600/hqdefault.jpg" className ="rounded float-start" alt="..."/>
                        <div className="img-text"><h3>KAMPOT</h3></div>
                    </Link>
                    <Link to ="/provinces/kampot" className='logo-provinces' >
                        <img  src ="http://4.bp.blogspot.com/-E9euFtvT1Yo/VqM6waVp1zI/AAAAAAAAAoU/9AEQStub5n0/s1600/hqdefault.jpg" className ="rounded float-start" alt="..."/>
                        <div className="img-text"><h3>KAMPOT</h3></div>
                    </Link>
                    <Link to ="/provinces/kampot" className='logo-provinces' >
                        <img  src ="http://4.bp.blogspot.com/-E9euFtvT1Yo/VqM6waVp1zI/AAAAAAAAAoU/9AEQStub5n0/s1600/hqdefault.jpg" className ="rounded float-start" alt="..."/>
                        <div className="img-text"><h3>KAMPOT</h3></div>
                    </Link>
                    <Link to ="/provinces/kampot" className='logo-provinces' >
                        <img  src ="http://4.bp.blogspot.com/-E9euFtvT1Yo/VqM6waVp1zI/AAAAAAAAAoU/9AEQStub5n0/s1600/hqdefault.jpg" className ="rounded float-start" alt="..."/>
                        <div className="img-text"><h3>KAMPOT</h3></div>
                    </Link>
                    <Link to ="/provinces/kampot" className='logo-provinces' >
                        <img  src ="http://4.bp.blogspot.com/-E9euFtvT1Yo/VqM6waVp1zI/AAAAAAAAAoU/9AEQStub5n0/s1600/hqdefault.jpg" className ="rounded float-start" alt="..."/>
                        <div className="img-text"><h3>KAMPOT</h3></div>
                    </Link>
                    <Link to ="/provinces/kampot" className='logo-provinces' >
                        <img  src ="http://4.bp.blogspot.com/-E9euFtvT1Yo/VqM6waVp1zI/AAAAAAAAAoU/9AEQStub5n0/s1600/hqdefault.jpg" className ="rounded float-start" alt="..."/>
                        <div className="img-text"><h3>KAMPOT</h3></div>
                    </Link>
                    <Link to ="/provinces/kampot" className='logo-provinces' >
                        <img  src ="http://4.bp.blogspot.com/-E9euFtvT1Yo/VqM6waVp1zI/AAAAAAAAAoU/9AEQStub5n0/s1600/hqdefault.jpg" className ="rounded float-start" alt="..."/>
                        <div className="img-text"><h3>KAMPOT</h3></div>
                    </Link>
                    <Link to ="/provinces/kampot" className='logo-provinces' >
                        <img  src ="http://4.bp.blogspot.com/-E9euFtvT1Yo/VqM6waVp1zI/AAAAAAAAAoU/9AEQStub5n0/s1600/hqdefault.jpg" className ="rounded float-start" alt="..."/>
                        <div className="img-text"><h3>KAMPOT</h3></div>
                    </Link>
                    <Link to ="/provinces/kampot" className='logo-provinces' >
                        <img  src ="http://4.bp.blogspot.com/-E9euFtvT1Yo/VqM6waVp1zI/AAAAAAAAAoU/9AEQStub5n0/s1600/hqdefault.jpg" className ="rounded float-start" alt="..."/>
                        <div className="img-text"><h3>KAMPOT</h3></div>
                    </Link>
                    <Link to ="/provinces/kampot" className='logo-provinces' >
                        <img  src ="http://4.bp.blogspot.com/-E9euFtvT1Yo/VqM6waVp1zI/AAAAAAAAAoU/9AEQStub5n0/s1600/hqdefault.jpg" className ="rounded float-start" alt="..."/>
                        <div className="img-text"><h3>KAMPOT</h3></div>
                    </Link>
                    <Link to ="/provinces/kampot" className='logo-provinces' >
                        <img  src ="http://4.bp.blogspot.com/-E9euFtvT1Yo/VqM6waVp1zI/AAAAAAAAAoU/9AEQStub5n0/s1600/hqdefault.jpg" className ="rounded float-start" alt="..."/>
                        <div className="img-text"><h3>KAMPOT</h3></div>
                    </Link>


          
                </div>
        
                </div>
                <br />
            
        </div>  
        </>
    )

}
export default Provinces;

