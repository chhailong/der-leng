import React  from "react";
import Provinces from "./Provinces";

import logo2 from "../images/logo2.png"; 
import {Link} from "react-router-dom" ; 
function Navbar (){
    return(
        <>
        <div className ="navbar">
        {/* <a href="#" class="logo">Der Leng</a> */}
        <Link to = "/" className="logo" >Der Leng</Link>

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
                        {/* <a  href="#">Kampot</a>
                        <a href="#">Siem Reap</a>
                        <a href="#">Kep</a> */}
                        <Link to ="/provinces/kampot">Kampot</Link>
                        <Link to ="/provinces/sihanoukville">Sihanoukville</Link>
                        <Link to ="/provinces/kohkong">Koh Kong</Link>
                        <Link to ="/provinces/mondulkiri">Mondulkiri</Link>
                        <Link to ="/provinces/siemreap">Siem Reap</Link>
                        

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