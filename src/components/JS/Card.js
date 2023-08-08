import React from 'react'
import "../CSS/card.css";
import { Link } from 'react-router-dom';
export default function Card(props) {
  return (
    <>
      <div class="card ">
        <div className="card-top">
          <img src={props.image1} class="" alt="..."/>
        </div>
        <div class="card-body text-start">
          <h5 class="card-title fw-bold">{props.title}</h5>
          <p   className='card-text text-truncate' style={{maxWidth:"100%"}}>{props.description}</p>
        </div>
      </div>

    </>

  )
}
 