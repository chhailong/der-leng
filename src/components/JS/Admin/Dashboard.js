import React from 'react'
import { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'
import "../../CSS/home.css"; 

export default function Dashboard() {
  const [places , setPlaces] = useState([]);
  const token = localStorage.getItem("access_token") ? JSON.parse(localStorage.getItem('access_token')) : null ; 
  const GetPlace = async () =>{
     
    try{
     
      const response = await fetch("http://localhost:8000/api/admin/places", {
        headers:{
          Authorization: `Bearer ${token}`,
       
        }
      }); 
      const result = await  response.json() ;  
      setPlaces(result.data) ; 
      console.log(result.data); 

    }catch(err){
      console.log(err) ; 
    }

  }

  const DeletePlace = async (id) =>{
    try{
      const response = await fetch(`http://localhost:8000/api/admin/places/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          Authorization:`Bearer ${token}`,
        },
      });
      const result = await response.json();
      console.log(result);
     
    }catch(err){
      console.log(err) ;
    }

  }
  useEffect(()=>{
    GetPlace(); 
  } , []) ; 
  return (
    <>
      <div className="dashboard rounded-2 d-flex flex-wrap py-5 m-2">
        <div className="slidebar py-5 ">
          <i class="bi bi-house-gear-fill text-center m-lg-2 text-2xl mt-3" >Dashboard</i>

          <Link to ="/dashboard/post-place">  <button className="btn btn-outline-info btn-md m-auto px-5 mb-2">Post Place</button></Link>

        </div>
        <aside className='float-sm-start py-5 w-75 vh-100 '>
             <div className="container overflow-auto">
                        <table class="table table-bordered  rounded">
                        <thead>
                            <tr className='rounded'>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Image 1</th>
                            <th scope="col">Image 2</th>
                            <th scope="col">Image 3</th>
                            <th scope="col">Descrition</th>
                            <th scope="col">Location</th>
                            <th scope="col">Province_id</th>
                            </tr>
                        </thead>
                        {
                          places.length === 0? <h2 className='text-center text-warning'>Loading.......</h2>:
            places.map((item) => {
                return (
                        <tbody>
                            <tr className='vh-25'>
                            <td className='text-truncate'  >{item.id}</td>
                            <td className='text-truncate' style={{maxWidth:"120px"}}>{item.title}</td>
                            <td className='text-truncate' ><img src={item.image1} alt='image1'  style={{width:"120px" ,height:"90px"}} /></td>
                            <td className='text-truncate' ><img src={item.image2} alt='image2'  style={{width:"120px" ,height:"90px"}} /></td>
                            <td className='text-truncate' ><img src={item.image3} alt='image3'  style={{width:"120px" ,height:"90px"}} /></td>
                            <td className='text-truncate' style={{maxWidth:"150px"}}>{item.description}</td>
                            <td className='text-truncate' style={{maxWidth:"150px"}}>{item.location}</td>
                            <td className='text-truncate' style={{maxWidth:"100px"}}>{item.province_id}</td>
                            <td >
                            <Link to ={`/dashboard/edit-place/${item.id}`} className="btn btn-outline-info btn-sm m-1">Edit</Link>
                            <Link to ="#" className="btn btn-outline-danger btn-sm m-1 " 
                            {...item.id}  onClick={()=>DeletePlace(item.id)}
                            >Delete</Link>

                            <Link to={"/dashboard/view-place/" +item.id} key={item.id} className="btn btn-outline-success btn-sm m-1">View</Link>
                            </td>
                            </tr>
                        </tbody>
                             )
                             })
                        
                         }
                        </table>
         </div>
         </aside>

    </div>

    </>

  )
}
