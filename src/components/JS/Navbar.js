
import React, { useState, useEffect } from 'react';
import "../CSS/navbarstyle.css" ;
import logo2 from "../images/logo2.png"; 
import {Link} from "react-router-dom" ; 
function Navbar (){

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return(
        <>
        <div className ="navbar">

        <Link to = "/" className="logo" onClick={handleClick} >
            Der Leng
            <i class="fa-regular fa-island-tropical"></i>
            
        </Link>
           

        <form className="search">
            <input className="form-control me-4"  type="search" placeholder="Search"  aria-label="Search"/>
        </form>
        <nav >
            <ul className="menu-above">
                <li><a href="#">EN</a></li>
                <li><a href="#">Help</a></li>
                <li><a href="#" class="cta">Sign up</a></li>
            </ul>
        </nav>

        </div>

        
        <div className ="menu">
        <nav>
            <ul className="menu-botton" >
                <li className="dropdown">
                    <a className="drop" href="#">All Province</a>
                    <div class="dropdown-content">

                        <Link to ="/provinces/kampot" onClick={handleClick}>Kampot</Link>
                        <Link to ="/provinces/sihanoukville" onClick={handleClick}>Sihanoukville</Link>
                        <Link to ="/provinces/kohkong" onClick={handleClick}>Koh Kong</Link>
                        <Link to ="/provinces/mondulkiri" onClick={handleClick}>Mondulkiri</Link>
                        <Link to ="/provinces/siemreap" onClick={handleClick}>Siem Reap</Link>
                        
                    </div>
                </li>
                <li className="dropdown">
                    <a className="drop" href="#">All Resort</a>
                    <div class="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </li>
                <li className="dropdown">
                    <a className="drop" href="#">All Destinations</a>
                    <div class="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </li>
            </ul>
        </nav>
        </div>
        </>   
    );
}
export default Navbar ; 