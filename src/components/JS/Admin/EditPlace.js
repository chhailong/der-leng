import React from 'react'
import { useState ,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';

export default function EditPlace() {
  const [title ,setTitle]  = useState("") ;
  const [image1 ,setImage1]  = useState("") ;
  const [image2 ,setImage2]  = useState("") ;
  const [image3 ,setImage3]  = useState("") ;
  const [description ,setDescription]  = useState("") ;
  const [location ,setLocation]  = useState("") ;
  const [province_id ,setProvince_id] = useState("") ;
  const navigate = useNavigate() ;

  const {id} = useParams() ;
 
  const token = localStorage.getItem("access_token") ? JSON.parse(localStorage.getItem('access_token')) : null ; 
  const Update = async () => {

    const response = await fetch(`http://localhost:8000/api/admin/places/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title,
        image1,
        image2,
        image3,
        description,
        location,
        province_id,
      }),
    });
    const data = await response.json();
       console.log(data);

    // if(response.status === 200){
    //     const data = await response.json();
    //     console.log(data);
    //     navigate('/dashboard') ;
    // }
    // else{
    //     alert("Something went wrong") ;
    // }
    
  }

  return (
    <>
     <div className="container py-5">
     <main class="mb-4 mt-5">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <h2 className='text-uppercase text-center text-danger'>Update place</h2>
                    <div class="my-5">
                        <form >
                
                             <div class="form-floating mb-2">
                                <input class="form-control"  value={title} onChange={(e) => setTitle(e.target.value)} name="title" type="text" placeholder=" " required />
                                <label for="title">Tilte</label>
                            </div>
                            <div class="form-floating mb-2">
                                <input class="form-control" value={image1} onChange={(e) =>setImage1(e.target.value)} name="image1" type="text"  placeholder=" " required/>
                              
                                <label for="image1">Image 1</label>
                            </div>
                            <div class="form-floating mb-2">
                                <input class="form-control" value={image2} onChange={(e) =>setImage2(e.target.value)} name="image2" type="text" placeholder=" " required/>
                               
                                <label for="image2">Image 2</label>
                            </div>
                            <div class="form-floating mb-2">
                                <input class="form-control" value={image3} onChange={(e) =>setImage3(e.target.value)} name="image3" type="text" placeholder=" " required/>
                               
                                <label for="image3">Image 3</label>
                            </div>
                            <div class="form-floating mb-2">
                                <input class="form-control"  value={location} onChange={(e) => setLocation(e.target.value)} name="location" type="text" placeholder=" " required />
                                <label for="location">Location</label>
                            </div>

                            <div class="select mb-2">
                                <select class="form-select"  onChange={(e) =>setProvince_id(e.target.value)} name ="province_id" aria-label=" select ">
                           
                                    <option value="12">Mondulkiri</option>
                                    <option value="18">Siem Reap</option>
                                    <option value="8">Kampot</option>
                                    <option value="10">Koh Kong</option>
                                    <option value="17">Ratanakiri</option>
                                    <option value="24">Kep</option>
                                    <option value="16">Pursat</option>
                             
                                </select>

                            </div>

                            <div class="form-floating mb-2" >
                            <textarea class="form-control" value={description} onChange={(e) =>setDescription(e.target.value)} placeholder="Leave a comment here" id="floatingTextarea2" style={{height:"200px"}} ></textarea>
                            <label for="floatingTextarea2">Description</label>
                            </div>
                          
                            <br />

                            <button class="btn btn-outline-success btn-lg px-5 m-1"  value="Save" type="button" onClick={Update}>Update</button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </main>
    </div> 
  
    </>

  )
}
