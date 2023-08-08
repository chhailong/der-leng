

import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import TopDestination from './organs/TopDestination';
import "../CSS/home.css" ; 
import HeroSection from './organs/HeroSection';
import Hero from './organs/Hero';
import BestService from './organs/BestService';
import Us from './organs/Us';
 
function Home () {
    return (
        <>
        <HeroSection/>
        <Hero/>
        <BestService/>
        <TopDestination/>
        <Us/>
    
        </>
        
    )

}
export default Home ; 



