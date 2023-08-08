
import React, { useState, useEffect } from 'react';
import "../CSS/navbarstyle.css" ;
import profile from "../images/profile.png"

import {Link} from "react-router-dom" ; 
function Navbar (){

    const userLogin  = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null ;
    const [userInfo , setUserInfo] = React.useState(userLogin) ;
    console.log(userInfo);

    function logout() {
        // Remove the user information from local storage.
        localStorage.removeItem("user");
      
        // Redirect the user to the login page.
        window.location.href = "/login";
      }

      useEffect(()=>{

      } , [Navbar])

    return(
        <>
        <div className="navbar bg-light navbar-expand-md py-2 fixed-top">
        <div className="container">
            <Link to="/" className="navbar-brand text-danger fw-bold " >DERLENG</Link >
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse flex-row justify-content-end" id="nav">
        
                <ui className=" navbar-nav">
                    <li className='nav-item'>
                        <Link to="/" className='nav-link '> Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to ="/destination" className='nav-link '>Destination</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="#" className='nav-link '>Province</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="#" className='nav-link '>About</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="#" className='nav-link'>Contact</Link>
                    </li>

                    {
                        userInfo ? (
                            <li className='nav-item'>
                            <div class="dropdown">
                             <a class=" dropdown-toggle" href="#"  data-bs-toggle="dropdown"style={{ marginRight:"50px"}} >
                            
                              <img src={profile} alt="" className=" rounded-circle" style={{width:"40px" , height:"50px" }} />
 
                             </a>
 
                             <ul class="dropdown-menu">
                                 <h5 className="m-2">{userInfo.name}</h5>
                                 <Link to ={`/dashboard`} className="nav-link  text-black" >Dashboard</Link>
                                 <Link to ="#" className="nav-link  text-black" onClick={logout}  >Logout</Link>
                                 {/* <Link><a class="dropdown-item" href="#"onClick={logout} >Logout</a></Link> */}
                               
                             </ul>
                             </div>
                                 
                             </li>


                        ):(
                            <li className='nav-item'>
                        <Link to="/login" className='nav-link'> <button className="btn btn-outline-danger btn-md px-4 ">Login</button></Link>
                        </li>


                        )
                    }
                    

                </ui>
               

            </div>
        </div>
        </div>



        
      
        </>   
    );
}
export default Navbar ; 