import React from 'react'
import { Fade , Slide} from 'react-awesome-reveal'
import angkor from "./../../images/angkor.jpg"

export default function Us() {
  return (
    <>
    <section className='container py-5'>
        <div className="row d-flex flex-wrap">
        <div className='col-md'>
            <Slide>
            <h1>About Us</h1>

             <p>Traveling is one of the most popular activities in the world. People travel for many reasons, including business, pleasure, and education. With the rise of the internet, it has become easier than ever to plan and book travel. However, with so many options available, it can be difficult to find the right information and make informed decisions.</p>

            </Slide>
           

        </div>
        <div className="col-md">
            <Fade>
                <img src={angkor} alt="" className='img-fluid rounded w-auto' />
            </Fade>
        </div>
        </div>

    </section>
    </>

  )
}
